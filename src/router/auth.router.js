const Router = require('koa-router')

// 判断是否可以登录并返回user(包含username,password等)
const { verifyLogin } = require('../middleware/auth.middleware')
// 对user颁发证书
const { login } = require('../controller/auth.controller')

const authRouter = new Router({prefix: '/login'})

authRouter.post("/",verifyLogin,login)

module.exports = authRouter
