const connection = require('../app/database')

class BannerService {
    // 获取轮播图
    async findBanners(){
      const statement = `SELECT * FROM banner;`
      const result = await connection.execute(statement,[])
      return result[0]
    }
    
    // 删除
    async deleleBanners(bannerId){
      const statement = `DELETE FROM banner WHERE id = ?`
      const result = await connection.execute(statement,[bannerId])
      return result[0]
    }

    // 编辑
    async updateBanners(title,image_thumb,bannerId){
      const statement = `UPDATE banner SET title = ?,image_thumb = ?  WHERE id = ?;`
      const result = await connection.execute(statement,[title,image_thumb,bannerId])
      return result[0]
    }
}

module.exports = new BannerService()