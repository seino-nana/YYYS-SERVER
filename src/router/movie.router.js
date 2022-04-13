const Router = require('koa-router')

const { getMovies,getDetail,getCategory2,getCategory2deep,getSearch } = require('../controller/movie.controller')
const dataRouter = new Router({prefix: '/movies'})

// 获取所有信息
dataRouter.get('/', getMovies)

// 查询id的所有信息
dataRouter.get('/detail/:movieId',getDetail)

// 根据category2查询信息
dataRouter.get('/category2',getCategory2)

// 根据category2查询信息(深度查询)
dataRouter.get('/category2/deep',getCategory2deep)

// 根据关键字查询
dataRouter.get('/search',getSearch)

module.exports = dataRouter

