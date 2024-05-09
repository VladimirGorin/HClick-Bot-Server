import { config } from "dotenv"
config({ path: "./assets/.env" })

import { initBot } from "./bot/utils.js"
import { initApi } from "./api/utils.js"
import { initDatabase } from "./database/utils.js"

import databaseConfig from "./assets/config/config.json" with { type: "json" };
const databaseData = databaseConfig[process.env.MODE]

const bot = await initBot()
const app = initApi()
const sequelize = await initDatabase(databaseData)

export { bot, app, sequelize }
