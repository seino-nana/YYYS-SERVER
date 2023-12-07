const Router = require("koa-router")

// verifyUser:判断用户是否可以注册
// handlePasword:密码加密
const { verifyUser,handlePassword } = require('../middleware/user.middleware')

// verifyAuth验证是否为该网站的用户(通过token)
const { verifyAuth,checkUserPermission } = require('../middleware/auth.middleware')

const { 
        create,
        deleteUser,
        getUserInfoList,
        getUserInfo,
        updateUserInfo,
        getHistory,
        addHistory,
        deleteHistory,
        getCollect,
        addCollect,
        deleteCollect
      }  = require('../controller/user.controller')

const userRouter = new Router({prefix: "/user"}) 

userRouter.post("/",verifyUser,handlePassword,create) // 用户注册
userRouter.delete("/:userId",verifyAuth,checkUserPermission,deleteUser) // 删除用户

userRouter.get("/list/info",verifyAuth,getUserInfoList) // 获取用户列表

userRouter.get("/info/:userId",verifyAuth,getUserInfo) // 获取用户信息
userRouter.patch('/info/:userId',verifyAuth,checkUserPermission,updateUserInfo) // 编辑用户信息

userRouter.get('/history',verifyAuth,getHistory) // 获取某个用户的历史记录
userRouter.post('/history/add',verifyAuth,addHistory) // 添加历史记录
userRouter.post('/history/delete',verifyAuth,deleteHistory) // 批量删除历史记录
userRouter.get('/collect',verifyAuth,getCollect) //获取某个用户的收藏
userRouter.post('/collect/add',verifyAuth,addCollect) // 添加收藏
userRouter.post('/collect/delete',verifyAuth,deleteCollect) // 批量删除收藏

module.exports = userRouter