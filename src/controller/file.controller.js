const fileService = require('../service/file.service')
const { APP_HOST, APP_PORT } = require("../app/config"); 

class FileController {
    async saveBannersInfo(ctx,text) {
        const { filename,mimetype,size } = ctx.req.file
        const { title } = ctx.query
        
        // 将信息保存在banner中
        await fileService.createBanner(filename,mimetype,size,title)

        ctx.body = '保存' + title
    }
}

module.exports = new FileController()