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

    // 编辑banner某一项
    async update(ctx,next) {
      const { bannerId } = ctx.params
      const { title,image_thumb } = ctx.query
      await bannerService.updateBanners(title,image_thumb,bannerId)
      ctx.body = '修改' + bannerId + '成功'
    }
}

module.exports = new BannerController()