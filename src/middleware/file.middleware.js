const Multer = require('koa-multer')
const { BANNERS_PATH, MOVIES_PATH,AVATAR_PATH } = require('../constants/file-path')

// const bannersUpload = Multer({
//     dest: BANNERS_PATH,
// })
let storage = Multer.diskStorage({
    //配置图片上传的目录
    destination: function (req, file, cb) {
        cb(null, BANNERS_PATH); //注意路径必须存在
    },
    //图片上传完成重命名
    filename: function (req, file, cb) {
        // 获取后缀名
        var fileFormat = file.originalname.split('.');
        cb(null, Date.now() + '.' + fileFormat[fileFormat.length - 1]);
    },
});

let storage2 = Multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, MOVIES_PATH); //注意路径必须存在
    },
    filename: function (req, file, cb) {
        var fileFormat = file.originalname.split('.');
        cb(null, Date.now() + '.' + fileFormat[fileFormat.length - 1]);
    }
})

let storage3 = Multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, AVATAR_PATH); //注意路径必须存在
    },
    filename: function (req, file, cb) {
        var fileFormat = file.originalname.split('.');
        cb(null, Date.now() + '.' + fileFormat[fileFormat.length - 1]);
    }
})

let upload = Multer({ storage: storage })
let upload2 = Multer({ storage: storage2 })
let upload3 = Multer({ storage: storage3 })

const bannersHandler = upload.single('file')
const moviesHandler = upload2.single('file')
const avatarHandler = upload3.single('avatar')

module.exports = {
    bannersHandler,
    moviesHandler,
    avatarHandler
}
