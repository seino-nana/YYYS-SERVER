const connection = require("../app/database");
class MovieService {
    // 查询全部
    async findAll() {
      const statement = `SELECT * FROM movie;`;
      const result = await connection.execute(statement, []);
      return result[0];
    }
    // 通过movieId查询
    async findId(id) {
      const statement = `SELECT * FROM movie WHERE id = ?;`;
      const result = await connection.execute(statement, [id]);
      return result[0];
    }
    // 根据id删除
    async deleteMovie(id) {
      const statement = `DELETE FROM movie WHERE id = ?;`;
      const result = await connection.execute(statement,[id])
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
    // 关键字:电影名
    async findSearchName(query) {
      const _query = '%' + query + '%'
      const statement = `SELECT * FROM movie where name LIKE ?;`
      const result  = await connection.execute(statement,[_query])
      return result[0]
    }

    // 关键字：演员
    async findSearchActors(query) {
      const statement = `SELECT * FROM movie WHERE actors LIKE ?;`
      const result = await connection.execute(statement,[query])
      return result[0]
    }

    // 关键字：导演
    async findSearchDirector(query) {
      const statement = `SELECT * FROM movie WHERE director LIKE ?;`
      const result = await connection.execute(statement,[query])
      return result[0]
      
    }
}
module.exports = new MovieService()