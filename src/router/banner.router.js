const Router = require('koa-router')

const { 
    getBanners,
    remove,
    update
} = require('../controller/banner.controller')
const bannerRouter = new Router({prefix: '/banners'})

// 获取轮播图
bannerRouter.get('/',getBanners)

// 删除轮播图的某一项
bannerRouter.delete('/:bannerId',remove)

// 编辑轮播图的某一项
bannerRouter.patch('/:bannerId',update)

module.exports = bannerRouter