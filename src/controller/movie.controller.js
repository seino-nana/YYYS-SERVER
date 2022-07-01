const movieService = require('../service/movie.service')

class MovieController {
    // 获取关键表的数量(成员,问题,电影总数,访客)
    async getCount(ctx, next) {
        const result = await movieService.findCount()
        ctx.body = result
    }

    // 获取每个电影分类的个数
    async getCategoryCount(ctx, next) {
        const result1 = await movieService.findCategoryCount()
        ctx.body = result1
    }
    // 按条件分类查询
    async getCategoryMovies(ctx, next) {
        const { category, area, year, sort, num, page } = ctx.query
        const result = await movieService.findCategoryMovies(category, area, year, sort, num, page)
        ctx.body = result
    }
    // 获取信息
    async getDetail(ctx, next) {
        const { id } = ctx.query
        // const result = await movieService.getDetail(movieId)
        const result = await movieService.findId(id)
        ctx.body = result
    }
    // 添加+编辑
    async update(ctx, next) {
        const movie = ctx.request.body
        const result = await movieService.updateMovie(movie)
        if (result) {
            ctx.body = '添加成功'
        } else {
            ctx.body = '编辑成功'
        }

    }
    async remove(ctx, next) {
        const { movieId } = ctx.params
        const result = await movieService.deleteMovie(movieId)
        ctx.body = '删除成功' + result
    }
    async getCategory2(ctx, next) {
        const { type } = ctx.query
        const result = await movieService.findCategory2(type)
        ctx.body = result
    }
    async getCategory2deep(ctx, next) {
        const { type, num, page } = ctx.query
        const result = await movieService.findCategory2deep(type, num, page)
        ctx.body = result
    }

    // 关键字查找电影名
    async getSearchName(ctx, next) {
        const { query, num, page } = ctx.query
        const result = await movieService.findSearchName(query, num, page)
        ctx.body = result
    }

    // 关键词查找演员
    async getSearchActors(ctx, next) {
        const { query, num, page } = ctx.query
        const result = await movieService.findSearchActors(query, num, page)
        ctx.body = result
    }

    // 关键词查找导演
    async getSearchDirector(ctx, next) {
        const { query, num, page } = ctx.query
        const result = await movieService.findSearchDirector(query, num, page)
        ctx.body = result
    }

    // 提交bug
    async getProblem(ctx, next) {
        const { content } = ctx.query
        await movieService.submit(content)
        ctx.body = '提交成功'
    }

    // 增加点击量
    async addPlayCount(ctx, next) {
        const { id } = ctx.query
        await movieService.addPlayCount(id)
        ctx.body = id + '+1'
    }

    // 按热度获取
    async getHot(ctx, next) {
        const { page, num } = ctx.query
        const result = await movieService.getHot(page, num)
        ctx.body = result
    }
}

module.exports = new MovieController()