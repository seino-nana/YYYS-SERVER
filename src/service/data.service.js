const connection = require("../app/database");
class dataService {
  async getHomeData(typeDesc) { // 获取首页数据
    const recommendTy = [
      { type: '电影', title: '最新电影推荐' },
      { type: '连续剧', title: '最新剧集推荐' },
      { type: '综艺', title: '最新综艺推荐' },
      { type: '动漫', title: '最新动漫推荐' }
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
        } else if (typeDesc == '动漫') {
          for (const category of recommendTypes[3].categories) {
            const dataStatement = `SELECT * FROM movieinfo WHERE cat = ? AND year = '2023' ORDER BY create_time DESC LIMIT 6;`
            const [dataRows] = await connection.execute(dataStatement, [category])
            recResult.push({ title: category, movieList: dataRows })
          }
        } else {
          return '参数有误'
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
  async getBanners(typeDesc) { // 获取首页轮播图数据
    if (typeDesc) {
      if (typeDesc === "推荐" || typeDesc === "电影" || typeDesc === "连续剧" || typeDesc === "综艺" || typeDesc === "动漫") {
        const statement = `SELECT * FROM banners WHERE typeDesc = ? ORDER BY bannerId DESC LIMIT 6;`
        const result = await connection.execute(statement, [typeDesc])
        return result[0]
      } else {
        return '参数有误'
      }
    } else {
      const list = []
      const bannertTypes = ['推荐', '电影', '连续剧', '综艺', '动漫']
      for (const type of bannertTypes) {
        const statement = `SELECT * FROM banners WHERE typeDesc = ? ORDER BY bannerId DESC LIMIT 6;`
        const result = await connection.execute(statement, [type])
        list.push({ typeDesc: type, movieList: result[0] })
      }
      return list
    }


  }
  async getDetail(movieId) { // 查询id详情
    const statement = `SELECT * FROM movieinfo WHERE movieId = ?;`; // 获取电影信息
    const result = await connection.execute(statement, [movieId]);
    return result[0];
  }
  async getCategory(typeDesc, cat, categorys, area, year, sort, num, page) { // 分类查询

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
    obj.total = result2[0][0].count
    obj.movieList = result[0]

    return obj
  }
  async getSearch(keywords, range, num, page) { // 模糊查询
    const _keywords = '%' + keywords + '%'
    const offset = "" + ((page - 1) * num)
    const limit = num
    let statement = ''
    let statement2 = ''
    let result = ''
    let result2 = ''
    if (range == 0) { //range为0时按影名 默认
      statement = `select * FROM movieinfo WHERE 
      nm LIKE ?
      ORDER BY year desc
      LIMIT ? OFFSET ?;`
      statement2 = `select count(1) as count FROM movieinfo 
      WHERE nm LIKE ?;`
      result = await connection.execute(statement, [_keywords, limit, offset])
      result2 = await connection.execute(statement2, [_keywords])
    }
    else if (range == 1) { // range为1时按导演相关
      statement = `select * from movieinfo WHERE 
      dir = ?
      ORDER BY year desc
      LIMIT ? OFFSET ?;`
      statement2 = `
      SELECT count(1) as count from movieinfo
      WHERE dir = ?;`
      result = await connection.execute(statement, [keywords, limit, offset])
      result2 = await connection.execute(statement2, [keywords])
    }
    else if (range == 2) { // range为2时按电影演员相关
      statement = `select * from movieinfo
      where actors like ?
      ORDER BY year desc
      LIMIT ? OFFSET ?;`  
      statement2 = `select count(1) as count from movieinfo
      where actors like ?;` 
      result = await connection.execute(statement, [_keywords, limit, offset])
      result2 = await connection.execute(statement2, [_keywords])
    }
    else {
      return '参数有误'
    }
    return {
      count: result2[0][0].count,
      movieList: result[0]
    }
  }
  async addPlayCount(movieId) { // 增加点击量
    const statement = `update movieinfo set play_count = play_count + 1 WHERE movieId = ?;`
    const result = await connection.execute(statement, [movieId])
    return '增加点击量'
  }
  async submit(userId,content) { // 提交用户反馈
    if (content) {
      const statement = `INSERT INTO problem (content,userId) values (?,?);`
      await connection.execute(statement, [content,userId])
      return '提交成功'
    }
    else {
      return '参数不能为空'
    }
  }
}
module.exports = new dataService() 