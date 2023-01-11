const Router = require('koa-router')

const { 
  getDetail,
  gettypeDescCount,
  getCategoryMovies,
  getSearch,
  getRecommends
  // getCount,
  // update,
  // remove,
  // addPlayCount,
  // addProblem,
  // getProblem,
  // addVisitor,
  // getVisitor,
  // getvisitorWeek,
} = require('../controller/movie.controller')

// verifyAuth验证是否为该网站的用户(通过token)
// verifyAuth1验证是否为超级管理员(通过token)
// verifyAuth2验证是否为管理员(通过token)
const { verifyAuth,verifyAuth1,verifyAuth2 } = require('../middleware/auth.middleware')

const dataRouter = new Router({prefix: '/movies'})

// dataRouter.get('/', getCount) // 获取所有信息（个数）(成员,问题,电影总数,访客)
// dataRouter.post('/update',verifyAuth,verifyAuth1,update) // 编辑电影
// dataRouter.delete('/:movieId',verifyAuth,verifyAuth1,remove) // 删除id的所有信息

dataRouter.get('/detail',getDetail) // 查询id的所有信息
dataRouter.get('/typeDescCount',gettypeDescCount) // 获取typeDesc分类的个数
dataRouter.get('/search/category',getCategoryMovies) // 按条件分类查询
dataRouter.get('/fuzzysearch',getSearch) // 关键字查询
dataRouter.get('/recommends',getRecommends) // 推荐列表
// // 增加点击量
// dataRouter.get('/addPlayCount',addPlayCount)
// // 提交用户反馈
// dataRouter.get('/addProblem',addProblem)
// // 获取用户反馈
// dataRouter.get('/problem',getProblem)
// // 添加访客信息
// dataRouter.get('/addVisitor',addVisitor)
// // 获取访客信息
// dataRouter.get('/visitor',getVisitor)
// // 近7天访问记录
// dataRouter.get('/visitor/week',getvisitorWeek)

module.exports = dataRouter


