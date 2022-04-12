const movieService = require('../service/movie.service')

class MovieController {
    async getMovies(ctx,next) {
        const result = await movieService.findAll()
        ctx.body = result
    }
    async getDetail(ctx,next) {
        const { movieId } = ctx.params
        // const result = await movieService.getDetail(movieId)
        const result = await movieService.findId(movieId)
        ctx.body = result
    }
    async getCategory2(ctx,next) {
        const { type } = ctx.query
        const result = await movieService.findCategory2(type)
        ctx.body = result
    }
}

module.exports = new MovieController()