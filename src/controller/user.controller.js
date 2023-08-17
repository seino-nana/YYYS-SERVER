const userService = require('../service/user.service')

class UserController {
  async create(ctx, next) { // 注册用户
    const { username, password, grade = 1 } = ctx.request.body;
    await userService.create(
      username,
      password,
      grade
    )
    ctx.body = '用户' + username + '添加成功'
  }
  async getUserInfo(ctx, next) { // 获取用户信息
    const { userId } = ctx.user
    const result = await userService.getUserInfo(userId)
    ctx.body = result[0]
  }
  async updateUserInfo(ctx,next) { // 编辑用户信息
    const { userId } = ctx.user
    const { avatar='',name='',introduction='',phone='' } = ctx.request.body
    const result = await userService.updateUserInfo(userId,avatar,name,introduction,phone)
    ctx.body = result
  }
  async getHistory(ctx, next) { //获取用户历史记录
    const { userId } = ctx.user
    const result = await userService.getHistory(userId)
    ctx.body = result
  }
  async addHistory(ctx, next) { // 添加历史记录
    const { userId } = ctx.user
    const { movieId,oldnumber='0' } = ctx.request.body
    const result = await userService.addHistory(userId, movieId,oldnumber)
    ctx.body = result
  }
  async deleteHistory(ctx,next) { //批量删除历史记录
    const {ids} = ctx.request.body
    ctx.body = await userService.deleteHistory(ids)
  }
  async getCollect(ctx,next) { // 获取用户收藏
    const { userId } = ctx.user
    const result = await userService.getCollect(userId)
    ctx.body = result
  }
  async addCollect(ctx,next) { // 添加收藏
    const { userId } = ctx.user
    const { movieId } = ctx.request.body
    const result = await userService.addCollect(userId, movieId)
    ctx.body = result
  }
  async deleteCollect(ctx,next) { // 取消收藏
    const {ids} = ctx.request.body
    ctx.body = await userService.deleteCollect(ids)
  }
}

module.exports = new UserController()