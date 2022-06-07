const connection = require('../app/database')

class RankService {
  async getNewest(){
    const statement = `SELECT * FROM newest ORDER BY update_time desc;`
    const result = await connection.execute(statement)
    return result[0]
  }
  // 编辑最新电影
  async updateNewest(movie) {
    const {
      id,
      name,
      movieID,
      image_thumb
    } = movie

    if (!id) {
      const statement = `INSERT INTO newest (
        name,
        movieID,
        image_thumb
        ) VALUES (?,?,?);`
      await connection.execute(statement,[name,movieID,image_thumb])
      return true
    } else {
      const statement = `UPDATE newest SET 
      name = ?,
      movieID = ?,
      image_thumb = ?
      WHERE id = ?;
      `
      await connection.execute(statement,[
        name,
        movieID,
        image_thumb,
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