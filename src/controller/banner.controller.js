const bannerService = require('../service/banner.service')

class BannerController {
    // 获取轮播图
    async getBanners(ctx,next) {
        const { category3,num,page } = ctx.query
        const result = await bannerService.findBanners(category3,num,page)
        ctx.body = result
    }

    // 删除banner某一项
    async remove(ctx,next) {
      const { bannerId } = ctx.params
      const result = await bannerService.deleleBanners(bannerId)
      ctx.body = '删除成功' + result
    }

    // 编辑banner某一项
    async update(ctx,next) {
      const { title,movieID,category3,introduction,id } = ctx.request.body
      await bannerService.updateBanners(title,movieID,category3,introduction,id)
      ctx.body = '编辑成功'
    }
}

module.exports = new BannerController()