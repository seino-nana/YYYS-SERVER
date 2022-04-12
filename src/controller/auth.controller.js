const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = require("../app/config")

class AuthController {
    async login(ctx,next) {
        const { id,username } = ctx.user
        // 颁发签名
        const token = jwt.sign({ id,username },PRIVATE_KEY,{
            expiresIn: 60 * 60 * 24,
            algorithm: "RS256",
        })
        ctx.body = {
            id,
            username,
            token
        }
    }
}

module.exports = new AuthController()