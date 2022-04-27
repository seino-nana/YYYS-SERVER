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
    
    // 获取用户详情
    async getUserDetail(ctx,next) {
      const { id } = ctx.user
      const result = await UserService.getUserDetail(id)
      ctx.body = result
    }

    // 获取用户信息
    async getUserSubcount(ctx,next) {
      const { id } = ctx.user
      ctx.body = id
    }

    // 更改用户信息
    async update(ctx,next) {
      const { id } = ctx.user
      ctx.body = "更改" + id + "的用户信息"
    }
}

module.exports = new UserController()