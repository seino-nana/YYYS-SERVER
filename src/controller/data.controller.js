const dataService = require('../service/data.service')

class dataController {
    async getHomeData(ctx, next) { // 获取首页数据
        const { typeDesc = '' } = ctx.query
        const result = await dataService.getHomeData(typeDesc)
        ctx.body = result
    }
    async getBanners(ctx, next) { // 获取首页轮播图数据
        const { typeDesc = '' } = ctx.query
        const result = await dataService.getBanners(typeDesc)
        ctx.body = result
    }
    async getDetail(ctx, next) { // 查询id详情
        const { movieId } = ctx.query
        const result = await dataService.getDetail(movieId)
        ctx.body = result[0]
    }
    async getCategory(ctx, next) { // 分类查询
        // 不是必传参数
        const { typeDesc = '', cat = '', categorys = '', area = '', year = '', sort = '', num, page } = ctx.query
        const result = await dataService.getCategory(typeDesc, cat, categorys, area, year, sort, num, page)
        ctx.body = result
    }
    async getSearch(ctx, next) { // 模糊搜索
        // 都是必传参数
        const { keywords, range=0, num, page } = ctx.query
        const result = await dataService.getSearch(keywords, range, num, page)
        ctx.body = result
    }
    async addPlayCount(ctx, next) { // 增加点击量
        const { movieId } = ctx.request.body
        await dataService.addPlayCount(movieId)
        ctx.body = '点击量增加'
    }
    async addProblem(ctx, next) { // 提交用户反馈
        const { userId } = ctx.user
        const { content } = ctx.request.body
        const result = await dataService.submit(userId,content)
        ctx.body = result
    }
}

module.exports = new dataController()