const connection = require('../app/database')

class fileService {
    async createBanner(filename,originalname) {
        const title = originalname.replace(/(.*\/)*([^.]+).*/ig,"$2")
        const baseUrl = 'http://localhost:3000/'
        const imgURL = baseUrl + filename
        const statement = `INSERT INTO banner (title,imgURL) VALUES (?,?);`;
        const [result] = await connection.execute(statement,[title,imgURL])
        return result
    }

}

module.exports = new fileService()