const Router = require('koa-router')

const { 
    getNewest,
    updateNewest,
    removeNewest
} = require('../controller/rank.controller')

// verifyAuth验证是否为该网站的用户(通过token)
// verifyAuth1验证是否为超级管理员(通过token)
// verifyAuth2验证是否为管理员(通过token)
const { verifyAuth,verifyAuth1,verifyAuth2 } = require('../middleware/auth.middleware')

const rankRouter = new Router({prefix: '/rank'})

// 获取最新电影
rankRouter.get('/newest',getNewest)

// 编辑某一条
rankRouter.post('/newest/update',verifyAuth,verifyAuth2,updateNewest)

// 删除某一条
rankRouter.delete('/newest/:newestId',verifyAuth,verifyAuth2,removeNewest)

module.exports = rankRouter