const Router = require('koa-router')

const { 
    getBanners,
    remove,
    update
} = require('../controller/banner.controller')

// verifyAuth验证是否为该网站的用户(通过token)
// verifyAuth1验证是否为超级管理员(通过token)
// verifyAuth2验证是否为管理员(通过token)
const { verifyAuth,verifyAuth1,verifyAuth2 } = require('../middleware/auth.middleware')

const bannerRouter = new Router({prefix: '/banners'})

// 获取轮播图
bannerRouter.get('/',getBanners)

// 删除轮播图的某一项
bannerRouter.delete('/:bannerId',verifyAuth,verifyAuth2,remove)

// 编辑轮播图的某一项
bannerRouter.patch('/update',verifyAuth,verifyAuth2,update)

module.exports = bannerRouter