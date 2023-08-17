const Router = require('koa-router')

const { 
  getHomeData,
  getBanners,
  getDetail,
  getCategory,
  getSearch,
  addPlayCount,
  addProblem
} = require('../controller/data.controller')

// verifyAuth验证是否为该网站的用户(通过token)
// verifyAuth1验证是否为高级会员(通过token)
// verifyAuth2验证是否为管理员(通过token)
const { verifyAuth,verifyAuth1,verifyAuth2 } = require('../middleware/auth.middleware')

const dataRouter = new Router({prefix: ''})

// 首页模块
dataRouter.get('/home/data',getHomeData) // 获取首页数据
dataRouter.get('/home/banners',getBanners) // 获取首页轮播图数据
// 电影详情模块
dataRouter.get('/movies/detail',getDetail) // 查询id详情
// 分类模块
dataRouter.get('/movies/category',getCategory) // 分类查询
// 搜索模块
dataRouter.get('/movies/search',getSearch) // 模糊查询

dataRouter.post('/movies/addPlayCount',addPlayCount) // 增加点击量
dataRouter.post('/addProblem',verifyAuth,addProblem) // 提交用户反馈

module.exports = dataRouter

