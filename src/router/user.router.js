const Router = require("koa-router")

// verifyUser:判断用户是否可以注册
// handlePasword:密码加密
const { verifyUser,handlePassword } = require('../middleware/user.middleware')

const { create }  = require('../controller/user.controller')

const userRouter = new Router({prefix: "/users"})

// 用户注册
userRouter.post("/",verifyUser,handlePassword,create)

module.exports = userRouter