const UserService = require('../service/user.service')

class UserController {
    // 注册用户
    async create(ctx,next) {
        const { username,password } = ctx.request.body;
        const result = await UserService.create(
          username,
          password
        )
        ctx.body = result
    }
}

module.exports = new UserController()