const connection = require("../app/database");
class MovieService {
  // 查询个数
  async finAllCount() {
    const statement = `SELECT count(1) from movie as count
    where category2 = 3 limit 0,10;`
    const result = await connection.execute(statement, []);
    console.log(result[0]);
    return result[0] 
  }
  // 按条件分类查询
  async findCategoryMovies(category, area, year, num, page) {
    const _category = '%' + category + '%'
    const _area = '%' + area + '%'
    const _year = '%' + year + '%'
    const offset = "" + ((page - 1) * num)
    const limit = num
    const statement = `
      select *,(SELECT count(1) from movie 
        WHERE category3 LIKE ? 
        AND area LIKE ? 
        AND year LIKE ?
      ) as count FROM movie WHERE 
        category3 LIKE ? 
        AND area LIKE ? 
        AND year LIKE ? 
        ORDER BY update_time desc 
        LIMIT ? OFFSET ?;
      `
    const result = await connection.execute(statement, [_category, _area, _year,_category, _area, _year, limit, offset])
    return result[0]
  }
  // 通过movieId查询
  async findId(id) {
    const statement = `SELECT * FROM movie WHERE id = ?;`;
    const result = await connection.execute(statement, [id]);
    return result[0];
  }
  // 创建电影信息
  async updateMovie(movie) {
    const {
      id,
      name,
      category1,
      category2,
      category3,
      image_thumb,
      image_desc,
      actors,
      director,
      language,
      year,
      area,
      now_movie,
      introduction
    } = movie

    if (!id) {
      const statement = `INSERT INTO movie (
        name,
        category1,
        category2,
        category3,
        image_thumb,
        image_desc,
        actors,
        director,
        language,
        area,
        year,
        introduction,
        now_movie
        ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);`
      await connection.execute(statement, [
        name,
        category1,
        category2,
        category3,
        image_thumb,
        image_desc,
        actors,
        director,
        language,
        area,
        year,
        introduction,
        now_movie
      ])
      return true
    } else {
      const statement = `UPDATE movie SET 
      name = ?,
      category1 = ?,
      category2 = ?,
      category3 = ?,
      image_thumb = ?,
      image_desc = ?,
      actors = ?,
      director = ?,
      language = ?,
      area = ?,
      year = ?,
      introduction = ?,
      now_movie = ? 
      WHERE id = ?;
      `
      await connection.execute(statement,[
        name,
        category1,
        category2,
        category3,
        image_thumb,
        image_desc,
        actors,
        director,
        language,
        area,
        year,
        introduction,
        now_movie,
        id
      ])
      return false
    }
  }
  // 根据id删除
  async deleteMovie(id) {
    const statement = `DELETE FROM movie WHERE id = ?;`;
    const result = await connection.execute(statement, [id])
    return result[0];
  }
  // 通过category2查询(浅)
  async findCategory2(type) {
    const statement = `SELECT * FROM movie WHERE category2 = ?;`
    const result = await connection.execute(statement, [type])

    return result[0];
  }
  // 通过category2查询(深度,必带个数,页码)
  async findCategory2deep(type, num, page) {
    const offset = "" + ((page - 1) * num)
    const limit = num
    const statement = `SELECT * FROM movie WHERE category2 = ?  LIMIT ? OFFSET ?;`
    const result = await connection.execute(statement, [type, limit, offset])

    return result[0]
  }
  // 关键字:电影名
  async findSearchName(query, num, page) {
    const _query = '%' + query + '%'
    const offset = "" + ((page - 1) * num)
    const limit = num
    const statement = `SELECT * FROM movie WHERE name LIKE ? LIMIT ? OFFSET ?;`
    const result = await connection.execute(statement, [_query, limit, offset])
    return result[0]
  }

  // 关键字：演员
  async findSearchActors(query, num, page) {
    const _query = '%' + query + '%'
    const offset = "" + ((page - 1) * num)
    const limit = num
    const statement = `SELECT * FROM movie WHERE actors LIKE ? LIMIT ? OFFSET ?;`
    const result = await connection.execute(statement, [query, limit, offset])
    return result[0]
  }

  // 关键字：导演
  async findSearchDirector(query, num, page) {
    const _query = '%' + query + '%'
    const offset = "" + ((page - 1) * num)
    const limit = num
    const statement = `SELECT * FROM movie WHERE director LIKE ? LIMIT ? OFFSET ?;`
    const result = await connection.execute(statement, [query, limit, offset])
    return result[0]
  }

  // 提交Bug
  async submit(content) {
    const statement = `INSERT INTO problem (content) values (?);`
    const result = await connection.execute(statement,[content])
    return result[0]
  }
}
module.exports = new MovieService() 