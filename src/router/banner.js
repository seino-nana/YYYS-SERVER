const Router = require('koa-router')

const { 
    getBanners,
    remove
} = require('../controller/banner.controller')
const bannerRouter = new Router({prefix: '/banners'})

// 获取轮播图
bannerRouter.get('/',getBanners)

// 删除轮播图的某一项
bannerRouter.delete('/:bannerId',remove)

module.exports = bannerRouter