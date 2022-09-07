const connection = require("../app/database");
class MovieService {
  // 获取关键表的数量(成员,问题,电影总数,访客)
  async findCount() {
    const statement = `
      SELECT count(*) as count from user
      UNION ALL
      SELECT count(*) as count from problem
      UNION ALL
      SELECT count(*) as count from movie 
      UNION ALL
      SELECT count(*) as count from visitor
      ;`
    const result = await connection.execute(statement, [])
    return result[0]
  }
  // 查询个数
  async findCategoryCount() {
    const statement = `select count(*) as count,
                         count(category2='1' or null) as dongzuo,
                         count(category2='2' or null) as aiqing, 
                         count(category2='3' or null) as kehuan, 
                         count(category2='4' or null) as kongbu, 
                         count(category2='5' or null) as zhanzheng,
                         count(category2='6' or null) as xiju,
                         count(category2='7' or null) as jilu,
                         count(category2='8' or null) as fanzui,
                         count(category2='9' or null) as juqing,
                         count(category2= 10 or null) as donghua
                      from movie;`
    const result = await connection.execute(statement, []);
    return result[0]
  }
  // 按条件分类查询
  async findCategoryMovies(category, area, year, sort, num, page) {
    const _category = '%' + category + '%'
    const _area = '%' + area + '%'
    const _year = '%' + year + '%'
    const offset = "" + ((page - 1) * num)
    const limit = num
    if (!sort) {
      const statement = `
      select *,(SELECT count(1) from movie 
        WHERE category3 LIKE ? 
        AND area LIKE ? 
        AND year LIKE ?
      ) as count FROM movie WHERE 
        category3 LIKE ? 
        AND area LIKE ? 
        AND year LIKE ? 
        ORDER BY create_time desc 
        LIMIT ? OFFSET ?;
      `
      const result = await connection.execute(statement, [_category, _area, _year, _category, _area, _year, limit, offset])
      return result[0]
    }

    else if (sort == '最新') {
      const statement = `
      select *,(SELECT count(1) from movie 
        WHERE category3 LIKE ? 
        AND area LIKE ? 
        AND year LIKE ?
      ) as count FROM movie WHERE 
        category3 LIKE ? 
        AND area LIKE ? 
        AND year LIKE ? 
        ORDER BY create_time desc
        LIMIT ? OFFSET ?;
      `
      const result = await connection.execute(statement, [_category, _area, _year, _category, _area, _year, limit, offset])
      return result[0]
    }
    else if (sort == '最热') {
      const statement = `
      select *,(SELECT count(1) from movie 
        WHERE category3 LIKE ? 
        AND area LIKE ? 
        AND year LIKE ?
      ) as count FROM movie WHERE 
        category3 LIKE ? 
        AND area LIKE ? 
        AND year LIKE ? 
        ORDER BY play_count desc
        LIMIT ? OFFSET ?;
      `
      const result = await connection.execute(statement, [_category, _area, _year, _category, _area, _year, limit, offset])
      return result[0]
    }
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
    const statement = `select *,(SELECT count(1) from movie) as count FROM movie WHERE category2 = ?;`
    const result = await connection.execute(statement, [type])

    return result[0];
  }
  // 通过category3查询(深度,必带个数,页码)
  async findCategory3deep(type, num, page) {
    const _type = '%' + type + '%'
    const offset = "" + ((page - 1) * num)
    const limit = num
    const statement = `SELECT * FROM movie WHERE category3 LIKE ? ORDER BY create_time desc  LIMIT ? OFFSET ?;`
    const result = await connection.execute(statement, [_type, limit, offset])

    return result[0]
  }
  // 关键字:电影名
  async findSearchName(query, num, page) {
    const _query = '%' + query + '%'
    const offset = "" + ((page - 1) * num)
    const limit = num
    const statement = `select *,(SELECT count(1) from movie WHERE name LIKE?)
    as count FROM movie WHERE 
    name LIKE ?
    ORDER BY create_time desc
    LIMIT ?
    OFFSET ?;`
    const result = await connection.execute(statement, [_query,_query, limit, offset])
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

  // 提交用户反馈
  async submit(title, content) {
    const statement = `INSERT INTO problem (title,content) values (?,?);`
    const result = await connection.execute(statement, [title, content])
    return result[0]
  }
  // 获取用户反馈
  async getProblem(page, num) {
    const offset = "" + ((page - 1) * num)
    const limit = num
    const statement = `select *,(SELECT count(1) from problem) as count FROM problem ORDER BY create_time desc LIMIT ? OFFSET ?;`
    const result = await connection.execute(statement, [limit, offset])
    return result[0]
  }

  // 增加点击量
  async addPlayCount(id) {
    const statement = `update movie set play_count = play_count + 1 WHERE id = ?;`
    const result = await connection.execute(statement, [id])
    return result[0]
  }

  // 按热度获取
  async getHot(page, num) {
    const offset = "" + ((page - 1) * num)
    const limit = num
    const statement = `SELECT * FROM movie ORDER BY play_count desc LIMIT ? OFFSET ?;`
    const result = await connection.execute(statement, [limit, offset])
    return result[0]
  }

  // 添加访问信息
  async addVisitor(address, ads) {
    const statement = `INSERT INTO visitor (address,ads) values (?,?);`
    const result = await connection.execute(statement, [address, ads])
    return result[0]
  }

  // 获取访客信息
  async getVisitor(page, num) {
    const offset = "" + ((page - 1) * num)
    const limit = num
    const statement = `select *,(SELECT count(1) from visitor) as count FROM visitor ORDER BY create_time desc LIMIT ? OFFSET ?;`
    const result = await connection.execute(statement, [limit, offset])
    return result[0]
  }

  // 获取近7天访问记录
  async getvisitorWeek() {
    const statement = `select a.click_date,ifnull(b.count,0) as count
    from (
      SELECT curdate() as click_date
      union all
      SELECT date_sub(curdate(), interval 1 day) as click_date
      union all
      SELECT date_sub(curdate(), interval 2 day) as click_date
      union all
      SELECT date_sub(curdate(), interval 3 day) as click_date
      union all
      SELECT date_sub(curdate(), interval 4 day) as click_date
      union all
      SELECT date_sub(curdate(), interval 5 day) as click_date
      union all
      SELECT date_sub(curdate(), interval 6 day) as click_date
    ) a left join (
      select date(create_time) as datetime, count(*) as count
      from visitor
      group by date(create_time)
    ) b on a.click_date = b.datetime;`
    const result = await connection.execute(statement, [])
    return result[0]
  }

  // 获取腾讯视频的库
  async gettxMovie(page,num) {
    const offset = "" + ((page - 1) * num)
    const limit = num
    const statement = `select * from movie2 ORDER BY id desc limit 20 OFFSET 0;`
    const result = await connection.execute(statement,[limit,offset])
    return result[0]
  }

}
module.exports = new MovieService() 