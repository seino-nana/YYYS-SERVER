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

    async createMovie(filename,movie) {
        // const title = originalname.replace(/(.*\/)*([^.]+).*/ig,"$2")
        const baseUrl = 'http://localhost:3000/'
        const movieURL = baseUrl + filename
        const statement = `INSERT INTO movie (now_movie) VALUES (?);`;
        const [result] = await connection.execute(statement,[movieURL])
        return result
    }
}

module.exports = new fileService()