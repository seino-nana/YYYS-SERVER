const Multer = require('koa-multer')
const { BANNERS_PATH } = require('../constants/file-path')

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

let upload = Multer({storage:storage})

const bannersHandler = upload.single('file')

module.exports = {
    bannersHandler
}
