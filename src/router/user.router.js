const Router = require("koa-router")

// verifyUser:判断用户是否可以注册
// handlePasword:密码加密
const { verifyUser,handlePassword } = require('../middleware/user.middleware')

// verifyAuth验证是否为该网站的用户(通过token)
// verifyAuth1验证是否为超级管理员(通过token)
// verifyAuth2验证是否为管理员(通过token)
const { verifyAuth,verifyAuth1,verifyAuth2 } = require('../middleware/auth.middleware')

const { 
        create,
        getUserDetail,
        getUserSubcount,
        update,
        remove,
        getallUserInfo
      }  = require('../controller/user.controller')

const userRouter = new Router({prefix: "/user"})

// 用户注册
userRouter.post("/",verifyAuth,verifyAuth1,verifyUser,handlePassword,create)

// 获取当前用户信息
userRouter.get("/detail",verifyAuth,getUserDetail)

// 获取用户信息(包含收藏/历史记录)
userRouter.get("/subcount",verifyAuth,getUserSubcount) 
// 更改用户信息
userRouter.patch("/update",verifyAuth,update)
// 删除用户
userRouter.delete("/delete",verifyAuth,verifyAuth1,remove)

// 获取所有用户信息(仅限超级管理员)
userRouter.get('/allUserInfo',verifyAuth,verifyAuth1,getallUserInfo)

module.exports = userRouter