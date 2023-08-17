const connection = require("../app/database");
class MovieService {
  async getRecommends(typeDesc) { // 获取首页推荐列表
    const recommendTy = [
      {type:'电影',title:'最新电影推荐'},
      {type:'连续剧',title:'最新剧集推荐'},
      {type:'综艺',title:'最新综艺推荐'},
      {type:'动漫',title:'最新动漫推荐'}
    ]
    const recommendTypes = [
      { type: '电影', categories: ['喜剧片', '爱情片', '恐怖片', '动作片', '科幻片', '剧情片', '战争片', '记录片'] },
      { type: '连续剧', categories: ['国产剧', '欧美剧', '日本剧', '韩国剧', '香港剧', '韩国剧', '泰国剧'] },
      { type: '综艺', categories: ['大陆综艺', '日韩综艺', '欧美综艺', '港台综艺'] },
      { type: '动漫', categories: ['国产动漫', '日韩动漫', '欧美动漫'] }
    ];
    
    if (typeDesc) {
      if (typeDesc == '推荐') {
        const bannersStatement = `SELECT * FROM banners WHERE typeDesc = ? ORDER BY bannerId DESC LIMIT 6;`
        const banners = await connection.execute(bannersStatement, [typeDesc]);
        // 处理推荐部分
        const recommend = [];
        
        for (const type of recommendTy) {
          const category = type.type;
          const dataStatement = `SELECT * FROM movieinfo WHERE typeDesc = ? AND year = '2023' ORDER BY create_time DESC LIMIT 6;`;
          const [dataRows] = await connection.execute(dataStatement, [category]);
          recommend.push({ title: type.title, movieList: dataRows });
        }
        return { typeDesc, banners: banners[0], list: recommend };
      } else {
        const recResult = [];
        const bannersStatement = `SELECT * FROM banners WHERE typeDesc = ? ORDER BY bannerId DESC LIMIT 6;`
        const banners = await connection.execute(bannersStatement, [typeDesc])
        if (typeDesc == '电影') {
          for (const category of recommendTypes[0].categories) {
            const dataStatement = `SELECT * FROM movieinfo WHERE cat = ? AND year = '2023' ORDER BY create_time DESC LIMIT 6;`
            const [dataRows] = await connection.execute(dataStatement, [category])
            recResult.push({ title: category, movieList: dataRows })
          }
        } else if (typeDesc == '连续剧') {
          for (const category of recommendTypes[1].categories) {
            const dataStatement = `SELECT * FROM movieinfo WHERE cat = ? AND year = '2023' ORDER BY create_time DESC LIMIT 6;`
            const [dataRows] = await connection.execute(dataStatement, [category])
            recResult.push({ title: category, movieList: dataRows })
          }
        } else if (typeDesc == '综艺') {
          for (const category of recommendTypes[2].categories) {
            const dataStatement = `SELECT * FROM movieinfo WHERE cat = ? AND year = '2023' ORDER BY create_time DESC LIMIT 6;`
            const [dataRows] = await connection.execute(dataStatement, [category])
            recResult.push({ title: category, movieList: dataRows })
          }
        } else if(typeDesc == '动漫') {
          for (const category of recommendTypes[3].categories) {
            const dataStatement = `SELECT * FROM movieinfo WHERE cat = ? AND year = '2023' ORDER BY create_time DESC LIMIT 6;`
            const [dataRows] = await connection.execute(dataStatement, [category])
            recResult.push({ title: category, movieList: dataRows })
          }
        } else {
          return '参数不对'
        }
        return { typeDesc, banners: banners[0], list: recResult }
      }
    } else {
      const recommend = [];
      const recommendTypes = [
        { type: '电影', categories: ['喜剧片', '爱情片', '恐怖片', '动作片', '科幻片', '剧情片', '战争片', '纪录片'] },
        { type: '连续剧', categories: ['国产剧', '欧美剧', '日本剧', '韩国剧', '香港剧', '韩国剧', '泰国剧'] },
        { type: '综艺', categories: ['大陆综艺', '日韩综艺', '欧美综艺', '港台综艺'] },
        { type: '动漫', categories: ['国产动漫', '日韩动漫', '欧美动漫'] }
      ];
      // 处理推荐部分
      for (const type of recommendTy) {
        const category = type.type;
        const dataStatement = `SELECT * FROM movieinfo WHERE typeDesc = ? AND year = '2023' ORDER BY create_time DESC LIMIT 6;`;
        const [dataRows] = await connection.execute(dataStatement, [category]);
        recommend.push({ title: type.title, movieList: dataRows });
      }
      const bannerRecStatement = `SELECT * FROM banners WHERE typeDesc = ? ORDER BY bannerId DESC LIMIT 6;`
      const bannersRec = await connection.execute(bannerRecStatement, ['推荐'])
      const result = [{ typeDesc: '推荐', banners: bannersRec[0], list: recommend, }];
      // 处理其他类型
      for (const recType of recommendTypes) {
        const recResult = [];
        const bannersStatement = `SELECT * FROM banners WHERE typeDesc = ? ORDER BY bannerId DESC LIMIT 6;`
        const banners = await connection.execute(bannersStatement, [recType.type])
        for (const category of recType.categories) {
          const dataStatement = `SELECT * FROM movieinfo WHERE cat = ? AND year = '2023' ORDER BY create_time DESC LIMIT 6;`
          const [dataRows] = await connection.execute(dataStatement, [category])
          recResult.push({ title: category, movieList: dataRows })
        }
        result.push({ typeDesc: recType.type, banners: banners[0], list: recResult });

      }
      return result;
    }
  }
  async getBanners() { // 轮播图列表
    const list = []
    const bannertTypes = ['推荐', '电影', '连续剧', '综艺', '动漫']
    for (const type of bannertTypes) {
      const statement = `SELECT * FROM banners WHERE typeDesc = ? ORDER BY bannerId DESC LIMIT 6;`
      const result = await connection.execute(statement, [type])
      list.push({ typeDesc: type, movieList: result[0] })
    }
    return list
  }
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

    return result[0];
  }
  async findCategoryMovies(typeDesc, cat, categorys, area, year, sort, num, page) { // 按条件分类查询

    const _typeDesc = '%' + typeDesc + '%'
    const _cat = '%' + cat + '%'
    const _categorys = '%' + categorys + '%'
    const _area = '%' + area + '%'
    const _year = '%' + year + '%'
    const offset = "" + ((page - 1) * num)
    const limit = num
    let statement = ''
    if (sort == 0) {
      statement = `
      select * FROM movieinfo 
      WHERE typeDesc LIKE ? AND cat LIKE ? AND categorys LIKE ? AND area LIKE ? AND year LIKE ? 
      ORDER BY create_time desc 
      LIMIT ? OFFSET ?;` // 按条件分类查询
    } else if (sort == 1) {
      statement = `
      select * FROM movieinfo
      WHERE typeDesc LIKE ? AND cat LIKE ? AND categorys LIKE ? AND area LIKE ? AND year LIKE ?
      ORDER BY play_count desc 
      LIMIT ? OFFSET ?;`
    } else if (sort == 2) {
      statement = `
      select * FROM movieinfo
      WHERE typeDesc LIKE ? AND cat LIKE ? AND cat!='记录片' AND categorys LIKE ? AND area LIKE ? AND year LIKE ?
      ORDER BY score desc 
      LIMIT ? OFFSET ?;`
    }

    const result = await connection.execute(statement, [_typeDesc, _cat, _categorys, _area, _year, limit, offset])
    const statement2 = `
    SELECT count(1) as count from movieinfo
    WHERE typeDesc LIKE ? 
    AND cat LIKE ? AND categorys LIKE ? AND area LIKE ? AND year LIKE ?` // 获取count
    const result2 = await connection.execute(statement2, [_typeDesc, _cat, _categorys, _area, _year])
    // 创建新对象用来展示接口
    const obj = {}
    obj.movieList = result[0]
    obj.total = result2[0][0].count
    return obj
  }
  // 有可能搜 电影名：功夫，综艺名：开心，电视剧名，动漫名
  async findSearch(keywords, range, num, page) { // 模糊查询 1
    const _keywords = '%' + keywords + '%'
    const offset = "" + ((page - 1) * num)
    const limit = num
    let statement = ''
    let statement2 = ''
    let result = ''
    let result2 = ''
    if (range == 0) { //range为0时按影名
      statement = `select * FROM movieinfo WHERE 
      nm LIKE ?
      ORDER BY year desc
      LIMIT ? OFFSET ?;` // 获取相关信息
      statement2 = `select count(1) as count FROM movieinfo 
      WHERE nm LIKE ?;` // 获取count
      result = await connection.execute(statement, [_keywords, limit, offset])
      result2 = await connection.execute(statement2, [_keywords])
    }
    else if (range == 1) { // range为1时按导演相关
      statement = `select * from movieinfo WHERE 
      dir = ?
      ORDER BY year desc
      LIMIT ? OFFSET ?;` // 获取相关信息
      statement2 = `
      SELECT count(1) as count from movieinfo
      WHERE dir = ?;` // 获取count 
      result = await connection.execute(statement, [keywords, limit, offset])
      result2 = await connection.execute(statement2, [keywords])
    }
    else if (range == 2) { // range为2时按电影演员相关
      statement = `select * from movieinfo
      where actors like ?
      ORDER BY year desc
      LIMIT ? OFFSET ?;`  // 获取相关信息
      statement2 = `select count(1) as count from movieinfo
      where actors like ?;` // 获取count
      result = await connection.execute(statement, [_keywords, limit, offset])
      result2 = await connection.execute(statement2, [_keywords])
    }
    else { // 其它情况按相关
      statement = `select * FROM movieinfo WHERE 
      nm like ? or actors like ? or dir like ?
      order by year desc
      LIMIT ? OFFSET ?;` // 获取相关信息
      statement2 = `select count(1) as count FROM movieinfo WHERE 
      nm like ? or actors like ? or dir like ?;` // 获取count
      result = await connection.execute(statement, [_keywords, _keywords, _keywords, limit, offset])
      result2 = await connection.execute(statement2, [_keywords, _keywords, _keywords])
    }
    const obj = {}
    obj.movieList = result[0]
    obj.count = result2[0][0].count
    return obj
  }
  async findtypeDescCount() { // 查询typeDesc分类个数
    const statement = `select count(*) as count,
                         count(typedesc='电影' or null) as dianyin,
                         count(typedesc='连续剧' or null) as lianxuju, 
                         count(typedesc='综艺' or null) as zongyi,
                         count(typedesc='动漫' or null) as dongman
                      from movieinfo;`
    const result = await connection.execute(statement, []);
    return result[0]
  }

  
  async addPlayCount(movieId) { // 增加点击量
    const statement = `update movieinfo set play_count = play_count + 1 WHERE movieId = ?;`
    const result = await connection.execute(statement, [movieId])
    return '增加点击量'
  }
  async submit(content) { // 提交用户反馈
    if (content) {
      const statement = `INSERT INTO problem (content) values (?);`
      await connection.execute(statement, [content])
      return '提交成功'
    }
    else {
      return '提交失败'
    }
  }

  // async getProblem(page, num) { // 获取用户反馈
  //   const offset = "" + ((page - 1) * num)
  //   const limit = num
  //   const statement = `select *,(SELECT count(1) from problem) as count FROM problem ORDER BY create_time desc LIMIT ? OFFSET ?;`
  //   const result = await connection.execute(statement, [limit, offset])
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