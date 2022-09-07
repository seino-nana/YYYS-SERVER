const connection = require('../app/database')

class RankService {
  async getNewest(page,num){
    const offset = "" + ((page - 1) * num)
    const limit = num
    const statement = `SELECT * FROM newest ORDER BY id desc LIMIT ? OFFSET ?;`
    const result = await connection.execute(statement,[limit,offset])
    return result[0]
  }
  // 编辑最新电影
  async updateNewest(movie) {
    const {
      id,
      name,
      movieID
    } = movie

    if (!id) {
      const statement = `INSERT INTO newest (
        name,
        movieID
        ) VALUES (?,?);`
      await connection.execute(statement,[name,movieID])
      return true
    } else {
      const statement = `UPDATE newest SET 
      name = ?,
      movieID = ?
      WHERE id = ?;
      `
      await connection.execute(statement,[
        name,
        movieID,
        id
      ])
      return false
    }
  }
  // 删除最新电影
  async deleteNewest(newestId){
    const statement = `DELETE FROM newest WHERE id = ?;`
    const result = await connection.execute(statement,[newestId])
    return result[0]
  }
}

module.exports = new RankService()