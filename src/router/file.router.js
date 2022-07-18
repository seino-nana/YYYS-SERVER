const Router = require('koa-router')

// 保存图片至路径/upload/banners的中间件
const { bannersHandler,moviesHandler } = require('../middleware/file.middleware')

const { saveBannersInfo,saveMoviesInfo } = require('../controller/file.controller')

// verifyAuth验证是否为该网站的用户(通过token)
// verifyAuth1验证是否为超级管理员(通过token)
// verifyAuth2验证是否为管理员(通过token)
const { verifyAuth,verifyAuth1,verifyAuth2 } = require('../middleware/auth.middleware')

const fileRouter = new Router({ prefix: '/upload' })

fileRouter.post('/banners',bannersHandler,saveBannersInfo)
fileRouter.post('/movies',moviesHandler,saveMoviesInfo)
module.exports = fileRouter 
