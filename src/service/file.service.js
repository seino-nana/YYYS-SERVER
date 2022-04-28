const connection = require('../app/database')

class fileService {
    async createBanner(filename,mimetype,size,title) {
        const statement = `INSERT INTO banner (title,filename,mimetype,size) VALUES (?,?,?,?);`;
        const [result] = await connection.execute(statement,[
            title,
            filename,
            mimetype,
            size
        ])
        return result
    }

}

module.exports = new fileService()