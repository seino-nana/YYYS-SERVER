const connection = require('../app/database')

class BannerService {
    // 获取轮播图
    async findBanners(category3,num,page){
      const offset = "" + ((page - 1) * num)
      const limit = num
      if(!category3) {
        const statement = `select *,(SELECT count(1) from banner) as count FROM banner ORDER BY update_time desc LIMIT ? OFFSET ?;`
        const result = await connection.execute(statement,[limit,offset])
        return result[0]
      } else {
        const _category3 = '%' + category3 + '%'
        const statement = `SELECT * FROM banner WHERE category3 LIKE ? ORDER BY update_time desc;`
        const result = await connection.execute(statement,[_category3])
        return result[0]
      }
    }
    
    // 删除
    async deleleBanners(bannerId){
      const statement = `DELETE FROM banner WHERE id = ?`
      const result = await connection.execute(statement,[bannerId])
      return result[0]
    }

    // 编辑
    async updateBanners(title,movieID,category3,introduction,image_desc,id){
      const statement = `UPDATE banner SET title = ?,movieID = ?,category3 = ?,introduction = ?,image_desc = ? WHERE id = ?;`
      const result = await connection.execute(statement,[title,movieID,category3,introduction,image_desc,id])
      return result[0] 
    }
}

module.exports = new BannerService()