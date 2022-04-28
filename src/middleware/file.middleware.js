const Multer = require('koa-multer')
const { BANNERS_PATH } = require('../constants/file-path')

const bannersUpload = Multer({
    dest: BANNERS_PATH
})

const bannersHandler = bannersUpload.single('banners')

module.exports = {
    bannersHandler
}