const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = require("../app/config")

class AuthController {
    async login(ctx,next) {
        const { userId,username,grade } = ctx.user
        // 颁发签名
        const token = jwt.sign({ userId,username },PRIVATE_KEY,{
            expiresIn: 60 * 60 * 24,
            algorithm: "RS256",
        })
        ctx.body = {
            userId,
            username,
            token,
            grade
        }
    }
}

module.exports = new AuthController()