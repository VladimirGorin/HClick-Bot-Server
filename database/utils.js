import { Sequelize } from "sequelize"


export async function initDatabase(databaseData) {
    try {

        if (!databaseData){
            throw Error(`Incorrect database mode (${process.env.MODE})`)
        }

        const sequelize = new Sequelize(databaseData.database, databaseData.username, databaseData.password, {
            dialect: databaseData.dialect,
            host: databaseData.host,
            port: databaseData.port,
            logging: false,
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        })

        await sequelize.authenticate()
        await sequelize.sync()

        console.log("Successfully connected to the database")

        return sequelize
    } catch (error) {
        console.error(`Error while trying to connect to the database: ${error}`)
        throw error
    }

}
