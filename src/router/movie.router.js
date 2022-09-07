const Router = require('koa-router')

const { 
  getHot,
  addPlayCount,
  addProblem,
  getProblem,
  getCategoryCount,
  getCount,
  getDetail,
  update,
  remove,
  getCategory2,
  getCategory3deep,
  getSearchName,
  getSearchActors,
  getSearchDirector,
  getCategoryMovies,
  addVisitor,
  getVisitor,
  getvisitorWeek,
  gettxMovie
} = require('../controller/movie.controller')

// verifyAuth验证是否为该网站的用户(通过token)
// verifyAuth1验证是否为超级管理员(通过token)
// verifyAuth2验证是否为管理员(通过token)
const { verifyAuth,verifyAuth1,verifyAuth2 } = require('../middleware/auth.middleware')

const dataRouter = new Router({prefix: '/movies'})

// 获取所有信息（个数）(成员,问题,电影总数,访客)
dataRouter.get('/', getCount) 

// 获取每个电影分类的个数
dataRouter.get('/categoryCount',getCategoryCount)

// 查询id的所有信息
dataRouter.get('/detail',getDetail)

// 编辑电影
dataRouter.post('/update',verifyAuth,verifyAuth1,update)

// 删除id的所有信息
dataRouter.delete('/:movieId',verifyAuth,verifyAuth1,remove)

// 根据category2查询信息
dataRouter.get('/category2',getCategory2)

// 根据category3查询信息(深度查询)
dataRouter.get('/category3/deep',getCategory3deep)
 
// 根据关键字查询
// 关键字查询电影名
dataRouter.get('/search/name',getSearchName)
// 关键词查询演员
dataRouter.get('/search/actors',getSearchActors)
// 关键词查询导演 
dataRouter.get('/search/director',getSearchDirector)

// 按条件分类查询
dataRouter.get('/search/category',getCategoryMovies)

// 增加点击量
dataRouter.get('/addPlayCount',addPlayCount)

// 按热度获取
dataRouter.get('/hot',getHot)

// 提交用户反馈
dataRouter.get('/addProblem',addProblem)
// 获取用户反馈
dataRouter.get('/problem',getProblem)

// 添加访客信息
dataRouter.get('/addVisitor',addVisitor)

// 获取访客信息
dataRouter.get('/visitor',getVisitor)

// 近7天访问记录
dataRouter.get('/visitor/week',getvisitorWeek)

// 获取tx视频的库
dataRouter.get('/tx',gettxMovie)

module.exports = dataRouter


