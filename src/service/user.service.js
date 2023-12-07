const connection = require("../app/database");

class UserService {
  async create(username, password, grade) { // 添加用户
    const statement = `INSERT INTO user (username,password,grade) VALUES (?,?,?)`
    const result = await connection.execute(statement, [
      username,
      password,
      grade
    ])
    return result[0]
  }
  async deleteUser(userId) { // 删除某个用户
    await connection.execute('DELETE FROM userinfo WHERE userId = ?', [userId]);
    await connection.execute('DELETE FROM user WHERE userId = ?', [userId]);
    return `成功删除用户${userId}的相关数据`
  }
  async getUserInfoList(grade) { // 获取用户列表
    if (grade) {
      if (grade === "管理员" || grade === "会员") {
        const statement = `SELECT * FROM userinfo WHERE grade = ?;`
        const result = await connection.execute(statement, [grade])
        return result[0]
      } else {
        return '参数有误'
      }
    } else {
      const statement = `SELECT * FROM userinfo;`
      const result = await connection.execute(statement)
      return result[0]
    }
  }
  async getUserInfo(userId) { // 获取用户信息
    const statement = `SELECT * FROM userinfo WHERE userId = ?;`
    const result = await connection.execute(statement, [userId])
    return result[0]
  }
  async updateUserInfo(userId, avatar, name, introduction, phone,grade) { // 编辑用户信息
    try {
      const statement = `UPDATE userinfo SET name = ?,avatar = ?,introduction = ?,phone = ?,grade = ? WHERE userId = ?;`
      await connection.execute(statement, [name, avatar, introduction, phone, grade, userId])
      return {
        statusCode: 200, // 成功的状态码
        data: '编辑成功' // 结果数据
      };
    } catch (error) {
      return {
        statusCode: 500, // 错误的状态码
        error: error // 错误对象
      };
    }
  }
  async getHistory(userId) { //获取用户历史记录
    const statement = `SELECT h.*, m.*
        FROM history h
        JOIN movieinfo m ON h.movieId = m.movieId
        WHERE h.userId = ?
        ORDER BY h.historyId DESC;`
    const result = await connection.execute(statement, [userId])
    return result[0]
  }
  async addHistory(userId, movieId, oldnumber) { //添加历史记录
    const statement = `DELETE FROM history WHERE userId = ? AND movieId = ?;`
    const statement2 = `INSERT INTO history (userId, movieId,oldnumber) VALUES (?,?,?);`
    await connection.execute(statement, [userId, movieId])
    await connection.execute(statement2, [userId, movieId, oldnumber])
    return '添加成功'
  }
  async deleteHistory(ids) { // 批量删除历史记录
    try {
      const placeholders = ids.map(() => '?').join(',');
      const query = `DELETE FROM history WHERE movieId IN (${placeholders})`;
      const res = await connection.execute(query, ids);
      return {
        statusCode: 200, // 成功的状态码
        data: res // 结果数据
      };
    } catch (error) {
      return {
        statusCode: 500, // 错误的状态码
        error: error // 错误对象
      };
    }
  }
  async getCollect(userId) { //获取用户收藏
    const statement = `SELECT c.*, m.*
        FROM collect c
        JOIN movieinfo m ON c.movieId = m.movieId
        WHERE c.userId = ?
        ORDER BY c.collectId DESC;`
    const result = await connection.execute(statement, [userId])
    return result[0]
  }
  async addCollect(userId, movieId) { //添加收藏
    const statement = `INSERT INTO collect (userId, movieId) VALUES (?,?);`
    await connection.execute(statement, [userId, movieId])
    return '添加成功'
  }
  async deleteCollect(ids) { //取消收藏
    try {
      const placeholders = ids.map(() => '?').join(',');
      const query = `DELETE FROM collect WHERE movieId IN (${placeholders})`;
      const res = await connection.execute(query, ids);
      return {
        statusCode: 200, // 成功的状态码
        data: res // 结果数据
      };
    } catch (error) {
      return {
        statusCode: 500, // 错误的状态码
        error: error // 错误对象
      };
    }
  }
  async getUserByName(username) { // 判断一个用户是否存在于数据库
    const statement = `SELECT * FROM user where username = ?;`
    const result = await connection.execute(statement, [username])
    return result[0]
  }
}
module.exports = new UserService()