const connection = require("../app/database");
class MovieService {
    // 查询全部
    async findAll() {
      const statement = `SELECT * FROM movie LIMIT 100;`;
      const result = await connection.execute(statement, []);
      return result[0];
    }
    // 通过movieId查询
    async findId(id) {
      const statement = `SELECT * FROM movie WHERE id = ?;`;
      const result = await connection.execute(statement, [id]);
      return result[0];
    }
    // 通过category2查询(浅)
    async findCategory2(type) {
      const statement = `SELECT * FROM movie WHERE category2 = ?;`
      const result = await connection.execute(statement,[type])
      
      return result[0];
    }
    // 通过category2查询(深度,必带个数,页码)
    async findCategory2deep(type,num,page) {
      const offset = toString((page - 1) *num)
      const limit = num
      const statement = `SELECT * FROM movie WHERE category2 = ?  LIMIT ? OFFSET ?;`
      const result = await connection.execute(statement,[type,limit,offset])
      
      return result[0]
    }
    // 搜索关键字
    async findSearch(query) {
      const _query = '%' + query + '%'
      const statement = `SELECT * FROM movie where name LIKE ? OR actors LIKE ? OR director LIKE ?;`
      const result  = await connection.execute(statement,[_query,_query,_query])
      return result[0]
    }
}
module.exports = new MovieService()