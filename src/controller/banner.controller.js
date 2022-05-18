const bannerService = require('../service/banner.service')

class BannerController {
    // 获取轮播图
    async getBanners(ctx,next) {
        const result = await bannerService.findBanners()
        ctx.body = result
    }

    // 删除banner某一项
    async remove(ctx,next) {
      const { bannerId } = ctx.params
      const result = await bannerService.deleleBanners(bannerId)
      ctx.body = '删除成功' + result
    }
}

module.exports = new BannerController()