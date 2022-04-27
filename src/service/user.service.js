const connection = require("../app/database");

class UserService {
    // 添加用户
    async create(username,password) {
        const statement = `INSERT INTO user (username,password) VALUES (?,?)`
        const result = await connection.execute(statement,[
            username,
            password
        ])
        return result[0]
    }
    // 判断一个用户是否存在于数据库
    async getUserByName(username) {
        const statement = `SELECT * FROM user where username = ?;`
        const result = await connection.execute(statement,[username])
        return result[0]
    }
    // 获取用户信息
    async getUserDetail(id) {
        const statement = `SELECT * FROM user WHERE id = ?;`
        const result = await connection.execute(statement,[id])
        return result[0]
    }
}
module.exports = new UserService()