const rankService = require('../service/rank.service')

class RankController {
    // 获取最新电影
    async getNewest(ctx,next) {
      const { page,num } = ctx.query
      const result = await rankService.getNewest(page,num)
      ctx.body = result
    }

    // 编辑newest某一项
    async updateNewest(ctx,next) {
      const movie = ctx.request.body
      const result = await rankService.updateNewest(movie)
      if(result) {
        ctx.body = '添加成功'
      } else {
        ctx.body = '编辑成功'
      }
    }

    // 删除newest某一项
    async removeNewest(ctx,next) {
      const { newestId } = ctx.params
      const result = await rankService.deleteNewest(newestId)
      ctx.body="删除" + newestId + '成功'
    }
}

module.exports = new RankController()