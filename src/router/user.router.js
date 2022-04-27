const Router = require("koa-router")

// verifyUser:判断用户是否可以注册
// handlePasword:密码加密
const { verifyUser,handlePassword } = require('../middleware/user.middleware')

const { verifyAuth } = require('../middleware/auth.middleware')

const { create,getUserDetail,getUserSubcount,update }  = require('../controller/user.controller')

const userRouter = new Router({prefix: "/user"})

// 用户注册
userRouter.post("/",verifyUser,handlePassword,create)

// 获取用户详情
userRouter.get("/detail",verifyAuth,getUserDetail)

// 获取用户信息(包含收藏/历史记录)
userRouter.get("/subcount",verifyAuth,getUserSubcount) 
// 更改用户信息
userRouter.patch("/update",verifyAuth,update)

module.exports = userRouter