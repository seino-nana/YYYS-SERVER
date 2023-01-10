const movieService = require('../service/movie.service')

class MovieController {
    // async getCount(ctx, next) { // 获取所有信息个数(成员,问题,电影总数,访客)
    //     const result = await movieService.findCount()
    //     ctx.body = result
    // }
    // async update(ctx, next) { // 添加+编辑
    //     const movie = ctx.request.body
    //     const result = await movieService.updateMovie(movie)
    //     if (result) {
    //         ctx.body = '添加成功'
    //     } else {
    //         ctx.body = '编辑成功'
    //     }

    // }
    // async remove(ctx, next) { // 删除id
    //     const { movieId } = ctx.params
    //     const result = await movieService.deleteMovie(movieId)
    //     ctx.body = '删除成功' + result
    // }
    
    async getDetail(ctx, next) { // 获取信息
        const { movieId } = ctx.query
        const result = await movieService.getDetail(movieId)
        ctx.body = result
    }
    async gettypeDescCount(ctx, next) { // 获取typeDesc分类的个数
        const result = await movieService.findtypeDescCount()
        ctx.body = result
    }
    async getCategoryMovies(ctx, next) { // 按条件分类查询
        // 不是必传参数
        const { typeDesc='',cat='',categorys='',area='',year='',num,page } = ctx.query
        const result = await movieService.findCategoryMovies(typeDesc,cat,categorys,area,year,num,page)
        ctx.body = result
    }
    async getSearch(ctx, next) { // 模糊搜索
        const { keywords,range, num, page } = ctx.query
        const result = await movieService.findSearch(keywords,range,num,page)
        ctx.body = result
    }

    // async addProblem(ctx, next) { // 提交用户反馈
    //     const { title,content } = ctx.query
    //     await movieService.submit(title,content)
    //     ctx.body = '提交成功'
    // }
    
    // async getProblem(ctx, next) { // 获取用户反馈
    //     const { page,num } = ctx.query
    //     const result = await movieService.getProblem(page,num)
    //     ctx.body = result
    // } 
    // async addPlayCount(ctx, next) { // 增加点击量
    //     const { id } = ctx.query
    //     await movieService.addPlayCount(id)
    //     ctx.body = id + '+1'
    // }
    // async addVisitor(ctx, next) { // 添加访客信息
    //   const { address,ads } = ctx.query
    //   await movieService.addVisitor(address,ads)
    //   ctx.body = '添加成功'
    // }
    // async getVisitor(ctx,next) { // 获取访客信息
    //   const { page,num } = ctx.query
    //   const result = await movieService.getVisitor(page,num)
    //   ctx.body = result
    // }
    // async getvisitorWeek(ctx,next) { // 近7天访问记录
    //   const result = await movieService.getvisitorWeek()
    //   ctx.body = result
    // }

}

module.exports = new MovieController()