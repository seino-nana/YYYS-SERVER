const errorType = require("../constants/error-types")
const userService = require('../service/user.service')
const md5password = require('../utils/password-handle')

// 用户能否注册
const verifyUser = async (ctx,next) => {
  // 1.获取response回来的username,password
  const {username,password} = ctx.request.body
  
  // 2.判断username,password是否为空
  if(!username || !password) {
      const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED)
      return ctx.app.emit("error",error,ctx)
  }
  // 3.从userService中判断是否存在此username
  const result = await userService.getUserByName(username)
  
  // true时不允许创建并返回错误
  if(result.length) {
      const error = new Error(errorType.USER_ALREADY_EXISTS)
      return ctx.app.emit("error",error,ctx)
  }
  // fasle时允许创建并通过
  await next()
}

// 密码加密
const handlePassword = async (ctx,next) => {
  let { password } = ctx.request.body
  ctx.request.body.password = md5password(password)

  await next()
}

module.exports = {
    verifyUser,
    handlePassword
}