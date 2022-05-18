const connection = require("../app/database");
class MovieService {
    // 查询全部(加入num,page)
    async findAll(num,page) {
      const offset = "" + ((page - 1) *num)
      const limit = num
      const statement = `SELECT * FROM movie LIMIT ? OFFSET ?;`;
      const result = await connection.execute(statement, [limit,offset]);
      return result[0];
    }
    // 查询个数
    async finAllCount() {
      const statement = `SELECT count(*) from movie;`
      const result = await connection.execute(statement,[]);
      return result[0]
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
      const offset = "" + ((page - 1) *num)
      const limit = num
      const statement = `SELECT * FROM movie WHERE category2 = ?  LIMIT ? OFFSET ?;`
      const result = await connection.execute(statement,[type,limit,offset])
      
      return result[0]
    }
    // 关键字:电影名
    async findSearchName(query,num,page) {
      const _query = '%' + query + '%'
      const offset = "" + ((page - 1) *num)
      const limit = num
      const statement = `SELECT * FROM movie WHERE name LIKE ? LIMIT ? OFFSET ?;`
      const result  = await connection.execute(statement,[_query,limit,offset])
      return result[0]
    }

    // 关键字：演员
    async findSearchActors(query,num,page) {
      const _query = '%' + query + '%'
      const offset = "" + ((page - 1) *num)
      const limit = num
      const statement = `SELECT * FROM movie WHERE actors LIKE ? LIMIT ? OFFSET ?;`
      const result = await connection.execute(statement,[query,limit,offset])
      return result[0]
    }

    // 关键字：导演
    async findSearchDirector(query,num,page) {
      const _query = '%' + query + '%'
      const offset = "" + ((page - 1) *num)
      const limit = num
      const statement = `SELECT * FROM movie WHERE director LIKE ? LIMIT ? OFFSET ?;`
      const result = await connection.execute(statement,[query,limit,offset])
      return result[0]
    }

    // 按条件分类查询
    async findCategoryMovies(category,area,year,num,page) {
      const _category = '%' + category + '%'
      const _area = '%' + area + '%'
      const _year = '%' + year + '%'
      const offset = "" + ((page - 1) *num)
      const limit = num
      const statement = `SELECT * FROM movie WHERE category3 LIKE ? AND area LIKE ? AND year LIKE ? LIMIT ? OFFSET ?;`
      const result = await connection.execute(statement,[_category,_area,_year,limit,offset])
      return result[0]
    }

}
module.exports = new MovieService() 