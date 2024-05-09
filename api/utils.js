
import express from "express"
import cors from "cors"

export function initApi() {
    const app = express()

    app.use(express.json());
    app.use(cors());

    app.listen(process.env.PORT, () => {
        console.log(`API running in port: ${process.env.PORT}`)
    })

    return app
}
