const UserService = require('../service/user.service')

class UserController {
  // 注册用户
  async create(ctx, next) {
    const { username, password } = ctx.request.body;
    await UserService.create(
      username,
      password
    )
    ctx.body = '用户' + username + '添加成功'
  }

  // 获取用户详情
  async getUserDetail(ctx, next) {
    const { id } = ctx.user
    const result = await UserService.getUserDetail(id)
    ctx.body = result
  }

  // 获取用户信息
  async getUserSubcount(ctx, next) {
    const { id } = ctx.user
    ctx.body = '返回的是' + id + '的用户信息'
  }

  // 更改用户信息
  async update(ctx, next) {
    const { id } = ctx.user
    ctx.body = "更改" + id + "的用户信息"
  }

  // 删除用户
  async remove(ctx,next) {
    const { id } = ctx.query
    await UserService.removeUser(id)
    ctx.body = "移除成功"
  }

  // 获取所有用户信息
  async getallUserInfo(ctx, next) {
    const { num, page } = ctx.query
    const result = await UserService.getallUserInfo(num, page)
    ctx.body = result
  }
}

module.exports = new UserController()