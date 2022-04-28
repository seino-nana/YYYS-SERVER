const Router = require('koa-router')

// 保存图片至路径/upload/banners的中间件
const { bannersHandler } = require('../middleware/file.middleware')

const { saveBannersInfo } = require('../controller/file.controller')

const fileRouter = new Router({ prefix: '/upload' })

fileRouter.post('/banners', bannersHandler,saveBannersInfo)

module.exports = fileRouter
