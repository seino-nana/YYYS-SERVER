const jwt = require("jsonwebtoken");

const errorType = require('../constants/error-types')
const userService = require('../service/user.service')
const md5password = require('../utils/password-handle')

const { PUBLIC_KEY } = require("../app/config");

const verifyLogin = async (ctx, next) => {
    // 1.获取username,password 
    const { username, password } = ctx.request.body
    // 2.判断是否为空
    if (!username || !password) {
        const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit("error", error, ctx)
    }
    // 3.判断用户名是否存在
    const result = await userService.getUserByName(username)
    // 存在返回user(user中包含了password)
    const user = result[0]
    // 不存在返回用户名不存在
    if (!user) {
        const error = new Error(errorType.USER_DOES_NOT_EXISTS)
        return ctx.app.emit("error", error, ctx)
    }
    // 4.对密码进行解密,并判断密码是否和数据库的密码一致
    if (md5password(password) !== user.password) {
        const error = new Error(errorType.PASSWORD_IS_INCURRENT)
        return ctx.app.emit("error", error, ctx)
    }

    // 正确则继续，错误则返回密码错误 
    ctx.user = user
    await next()
}

const verifyAuth = async (ctx, next) => {
    console.log("验证是否为该网站的用户");
    // 1.获取token
    const authorization = ctx.headers.authorization;
    if (!authorization) {
        const error = new Error(errorType.UNAUTHORIZATION);
        return ctx.app.emit("error", error, ctx);
    }

    const token = authorization.replace("Bearer ", "");
    // 2.验证token
    try {
        const result = jwt.verify(token, PUBLIC_KEY, {
            algorithms: ["RS256"],
        });

        // token通过公钥解析出来的用户信息赋值给ctx.user
        ctx.user = result;
        await next();
    } catch (err) {
        const error = new Error(errorType.UNAUTHORIZATION);
        ctx.app.emit("error", error, ctx);
    }
};

module.exports = {
    verifyLogin,
    verifyAuth
}
