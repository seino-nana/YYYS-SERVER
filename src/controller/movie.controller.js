const fs = require("fs");
const movieService = require('../service/movie.service')
const fileService = require('../service/file.service')
const { BANNERS_PATH } = require('../constants/file-path')

class MovieController {
    async getMovies(ctx,next) {
        const result = await movieService.findAll()
        ctx.body = result
    }
    async getDetail(ctx,next) {
        const { id } = ctx.query
        // const result = await movieService.getDetail(movieId)
        const result = await movieService.findId(id)
        ctx.body = result
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
        const { query } = ctx.query
        const result = await movieService.findSearchName(query)
        ctx.body = result
    }
    
    // 关键词查找演员
    async getSearchActors(ctx,next) {
        const { query } = ctx.query
        const result = await movieService.findSearchActors(query)
        ctx.body = result
    }

    // 关键词查找导演
    async getSearchDirector(ctx,next) {
        const { query } = ctx.query
        const result = await movieService.findSearchDirector(query)
        ctx.body = result
    }
    
}

module.exports = new MovieController()