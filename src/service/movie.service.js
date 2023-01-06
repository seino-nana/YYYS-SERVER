const connection = require("../app/database");
class MovieService {
  
  // async findCount() { // 获取关键表的数量(成员,问题,电影总数,访客)
  //   const statement = `
  //     SELECT count(*) as count from user
  //     UNION ALL
  //     SELECT count(*) as count from problem
  //     UNION ALL
  //     SELECT count(*) as count from movieinfo
  //     UNION ALL
  //     SELECT count(*) as count from visitor
  //     ;`
  //   const result = await connection.execute(statement, [])
  //   return result[0]
  // }
  // async updateMovie(movie) { // 创建电影信息
  //   const {
  //     id,
  //     name,
  //     category,
  //     image_thumb,
  //     image_desc,
  //     actors,
  //     director,
  //     year,
  //     area,
  //     now_movie,
  //     introduction
  //   } = movie

  //   if (!id) {
  //     const statement = `INSERT INTO movie2 (
  //       name,
  //       category,
  //       image_thumb,
  //       image_desc,
  //       actors,
  //       director,
  //       area,
  //       year,
  //       introduction,
  //       now_movie
  //       ) VALUES (?,?,?,?,?,?,?,?,?,?);`
  //     await connection.execute(statement, [
  //       name,
  //       category,
  //       image_thumb,
  //       image_desc,
  //       actors,
  //       director,
  //       area,
  //       year,
  //       introduction,
  //       now_movie
  //     ])
  //     return true
  //   } else {
  //     const statement = `UPDATE movie2 SET 
  //     name = ?,
  //     category = ?,
  //     image_thumb = ?,
  //     image_desc = ?,
  //     actors = ?,
  //     director = ?,
  //     area = ?,
  //     year = ?,
  //     introduction = ?,
  //     now_movie = ? 
  //     WHERE id = ?;
  //     `
  //     await connection.execute(statement, [
  //       name,
  //       category,
  //       image_thumb,
  //       image_desc,
  //       actors,
  //       director,
  //       area,
  //       year,
  //       introduction,
  //       now_movie,
  //       id
  //     ])
  //     return false
  //   }
  // }
  // async deleteMovie(id) { // 根据id删除
  //   const statement = `DELETE FROM movie2 WHERE id = ?;`;
  //   const result = await connection.execute(statement, [id])
  //   return result[0];
  // }
  
  async getDetail(movieId) { // 获取电影信息
    const statement = `SELECT * FROM movieinfo WHERE movieId = ?;`; // 获取电影信息
    const result = await connection.execute(statement, [movieId]);
    const statement2 = `select * from playurl where movieId = ? ORDER BY number asc;`; // 从playurl获取集数
    const result2 = await connection.execute(statement2, [movieId]);
    const statement3 = `select actor from actors where movieid = ?;` // 从actors里获取演员
    const result3 = await connection.execute(statement3,[movieId])
    // 集数添加到电影信息中
    const obj = {}
    obj.movieDetail = result[0][0]
    obj.movieDetail.number = result2[0]
    obj.movieDetail.actors = result3[0]
    return obj;
  }
  async findCategoryMovies(typeDesc,cat,area,year,num,page,sort) { // 按条件分类查询
    const _typeDesc = '%' + typeDesc + '%'
    const _cat = '%' + cat + '%'
    const _area = '%' + area + '%'
    const _year = '%' + year + '%'
    const offset = "" + ((page - 1) * num) 
    const limit = num
    const statement = `
    select * FROM movieinfo 
    WHERE typeDesc LIKE ? AND cat LIKE ? AND area LIKE ? AND year LIKE ? 
    ORDER BY year desc 
    LIMIT ? OFFSET ?;` // 按条件分类查询
    const result = await connection.execute(statement, [_typeDesc,_cat, _area, _year,limit, offset])
    const statement2 = `
    SELECT count(1) as count from movieinfo
    WHERE typeDesc LIKE ? 
    AND cat LIKE ? AND area LIKE ? AND year LIKE ?` // 获取count
    const result2 = await connection.execute(statement2,[_typeDesc,_cat, _area, _year])
    result[0][0].searchCount = result2[0][0].count
    // 创建新对象用来展示接口
    const obj = {}
    obj.movieList = result[0]
    obj.total = result2[0][0].count
    return obj
  }
  // 有可能搜 电影名：功夫，综艺名：开心，电视剧名，动漫名
  async findSearch(keywords,range, num, page) { // 模糊查询 1
    const _keywords = keywords + '%'
    const offset = "" + ((page - 1) * num)
    const limit = num
    let statement = ''
    let statement2 = ''
    if(range==1) { // range为1时按导演相关
      statement = `select * from movieinfo WHERE 
      dir LIKE ?
      ORDER BY year desc
      LIMIT ? OFFSET ?;` // 获取相关信息
      statement2 = `
      SELECT count(1) as count from movieinfo
      WHERE dir LIKE ?` // 获取count 
    }
    else if(range==2){ // range为2时按电影演员相关
      statement = `select * from movieinfo,actors 
      where movieinfo.movieId = actors.movieId  and actors.actor like ?
      ORDER BY year desc
      LIMIT ? OFFSET ?;`  // 获取相关信息
      statement2 = `select count(1) as count from movieinfo,actors 
      where movieinfo.movieId = actors.movieId and actors.actor like ?` // 获取count
    }
    else { // 其它情况按影视综
      statement = `select * FROM movieinfo WHERE 
      nm LIKE ?
      ORDER BY year desc
      LIMIT ? OFFSET ?;` // 获取相关信息
      statement2 = `select count(1) as count FROM movieinfo 
      WHERE nm LIKE ?` // 获取count
    }
    const result = await connection.execute(statement,[_keywords, limit, offset])
    const result2 = await connection.execute(statement2,[_keywords])
    const obj = {}
    obj.fuzzymovie = result[0]
    obj.count = result2[0][0].count
    return obj
  }
  async findtypeDescCount() { // 查询typeDesc分类个数
    const statement = `select count(*) as count,
                         count(typedesc='电影' or null) as dianyin,
                         count(typedesc='电视剧' or null) as dianshiju, 
                         count(typedesc='综艺' or null) as zongyi,
                         count(typedesc='动漫' or null) as dongman
                      from movieinfo;`
    const result = await connection.execute(statement, []);
    return result[0]
  }
  // async submit(title, content) { // 提交用户反馈
  //   const statement = `INSERT INTO problem (title,content) values (?,?);`
  //   const result = await connection.execute(statement, [title, content])
  //   return result[0]
  // }
  // async getProblem(page, num) { // 获取用户反馈
  //   const offset = "" + ((page - 1) * num)
  //   const limit = num
  //   const statement = `select *,(SELECT count(1) from problem) as count FROM problem ORDER BY create_time desc LIMIT ? OFFSET ?;`
  //   const result = await connection.execute(statement, [limit, offset])
  //   return result[0]
  // }
  // async addPlayCount(id) { // 增加点击量
  //   const statement = `update movie2 set play_count = play_count + 1 WHERE id = ?;`
  //   const result = await connection.execute(statement, [id])
  //   return result[0]
  // }
  // async addVisitor(address, ads) { // 添加访问信息
  //   const statement = `INSERT INTO visitor (address,ads) values (?,?);`
  //   const result = await connection.execute(statement, [address, ads])
  //   return result[0]
  // }
  // async getVisitor(page, num) { // 获取访客信息
  //   const offset = "" + ((page - 1) * num)
  //   const limit = num
  //   const statement = `select *,(SELECT count(1) from visitor) as count FROM visitor ORDER BY create_time desc LIMIT ? OFFSET ?;`
  //   const result = await connection.execute(statement, [limit, offset])
  //   return result[0]
  // }
  // async getvisitorWeek() { // 获取近7天访问记录
  //   const statement = `select a.click_date,ifnull(b.count,0) as count
  //   from (
  //     SELECT curdate() as click_date
  //     union all
  //     SELECT date_sub(curdate(), interval 1 day) as click_date
  //     union all
  //     SELECT date_sub(curdate(), interval 2 day) as click_date
  //     union all
  //     SELECT date_sub(curdate(), interval 3 day) as click_date
  //     union all
  //     SELECT date_sub(curdate(), interval 4 day) as click_date
  //     union all
  //     SELECT date_sub(curdate(), interval 5 day) as click_date
  //     union all
  //     SELECT date_sub(curdate(), interval 6 day) as click_date
  //   ) a left join (
  //     select date(create_time) as datetime, count(*) as count
  //     from visitor
  //     group by date(create_time)
  //   ) b on a.click_date = b.datetime;`
  //   const result = await connection.execute(statement, [])
  //   return result[0]
  // }
}
module.exports = new MovieService() 