const Router = require('koa-router')

const { 
    getNewest,
    updateNewest,
    removeNewest
} = require('../controller/rank.controller')
const rankRouter = new Router({prefix: '/rank'})

// 获取最新电影
rankRouter.get('/newest',getNewest)

// 编辑某一条
rankRouter.post('/newest/update',updateNewest)

// 删除某一条
rankRouter.delete('/newest/:newestId',removeNewest)

module.exports = rankRouter