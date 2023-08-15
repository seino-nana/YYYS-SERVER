const fileService = require('../service/file.service')

class FileController {
    // 保存轮播图图片的地址信息
    async saveBannersInfo(ctx,text) {
        const { filename,originalname } = ctx.req.file
        
        // 将信息保存在banner中
        await fileService.createBanner(filename,originalname)

        ctx.body = '保存'
    }
    // 保存电影的地址信息
    async saveMoviesInfo(ctx,next) {
        const { filename,originalname } = ctx.req.file
        await fileService.createMovie(filename)
        ctx.body = '保存'
    }

    async getAvatarInfo(ctx,next){
        const { filename } = ctx.req.file
        ctx.body = 'https://www.3154movie.cn/' + filename 
    }
}

module.exports = new FileController()