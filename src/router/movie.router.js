const Router = require('koa-router')

const { 
        getMovies,
        getDetail,
        remove,
        getCategory2,
        getCategory2deep,
        getSearchName,
        getSearchActors,
        getSearchDirector,
      } = require('../controller/movie.controller')
const dataRouter = new Router({prefix: '/movies'})

// 获取所有信息
dataRouter.get('/', getMovies)

// 查询id的所有信息
dataRouter.get('/detail',getDetail)
// 删除id的所有信息
dataRouter.delete('/:movieId',remove)

// 根据category2查询信息
dataRouter.get('/category2',getCategory2)

// 根据category2查询信息(深度查询)
dataRouter.get('/category2/deep',getCategory2deep)
 
// 根据关键字查询
// 关键字查询电影名
dataRouter.get('/search/name',getSearchName)
// 关键词查询演员
dataRouter.get('/search/actors',getSearchActors)
// 关键词查询导演
dataRouter.get('/search/director',getSearchDirector)


module.exports = dataRouter

