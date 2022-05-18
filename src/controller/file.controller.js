const fileService = require('../service/file.service')

class FileController {
    async saveBannersInfo(ctx,text) {
        const { filename,originalname } = ctx.req.file
        
        // 将信息保存在banner中
        await fileService.createBanner(filename,originalname)

        ctx.body = '保存'
    }
}

module.exports = new FileController()