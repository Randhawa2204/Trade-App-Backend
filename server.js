import express from "express";
import Connection from "./src/database/tradeDb.js";
import dotenv from "dotenv"
import router from "./src/routes/route.js";
import cors from 'cors'
import { updateStocks } from "./src/controller/stockController.js";

//app
const app = express()

//.env config
dotenv.config()

// app.use("/", (req, res) => {
//     res.send("<h2>Hellouyhghughubhubhu</h2>")
// })

app.use(cors())
app.use("/", router)

const PORT = process.env.PORT

app.listen(PORT, (err) => {
    if (err) return err

    console.log('System is running on ', PORT)
})

Connection(process.env.MONGODB_URL)

setInterval(updateStocks, 50000)
