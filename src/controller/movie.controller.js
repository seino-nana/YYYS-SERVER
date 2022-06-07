const movieService = require('../service/movie.service')

class MovieController {
    async getCount(ctx,next) {
        // const result1 = await movieService.findAll(num,page)
        const result2 = await movieService.finAllCount() 
        ctx.body = result2
    } 
    // 按条件分类查询
    async getCategoryMovies(ctx,next) {
        const { category,area,year,num,page } = ctx.query
        const result = await movieService.findCategoryMovies(category,area,year,num,page)
        ctx.body = result
    }
    // 获取信息
    async getDetail(ctx,next) {
        const { id } = ctx.query
        // const result = await movieService.getDetail(movieId)
        const result = await movieService.findId(id)
        ctx.body = result
    }
    // 添加+编辑
    async update(ctx,next) { 
      const movie = ctx.request.body
      const result = await movieService.updateMovie(movie)
      if(result) {
        ctx.body = '添加成功'
      } else {
        ctx.body = '编辑成功'
      }
      
    }
    async remove(ctx,next) {
        const { movieId } = ctx.params
        const result = await movieService.deleteMovie(movieId)
        ctx.body = '删除成功' + result
    }
    async getCategory2(ctx,next) { 
        const { type } = ctx.query
        const result = await movieService.findCategory2(type) 
        ctx.body = result
    }
    async getCategory2deep(ctx,next) {
        const { type,num,page } = ctx.query
        const result = await movieService.findCategory2deep(type,num,page)
        ctx.body = result
    }

    // 关键字查找电影名
    async getSearchName(ctx,next) {
        const { query,num,page } = ctx.query
        const result = await movieService.findSearchName(query,num,page)
        ctx.body = result
    }
    
    // 关键词查找演员
    async getSearchActors(ctx,next) { 
        const { query,num,page } = ctx.query
        const result = await movieService.findSearchActors(query,num,page)
        ctx.body = result
    }

    // 关键词查找导演
    async getSearchDirector(ctx,next) {
        const { query,num,page } = ctx.query
        const result = await movieService.findSearchDirector(query,num,page)
        ctx.body = result
    }

    // 提交bug
    async getProblem(ctx,next) {
        const { content } = ctx.query
        await movieService.submit(content)
        ctx.body = '提交成功'
    }
}

module.exports = new MovieController()