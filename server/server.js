import express  from "express"
import apiRoutes from "./routes/apiRoutes.js"
import mongoose, { mongo } from "mongoose"
import dotenv from "dotenv"
dotenv.config()

//express app
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use("/api/nuomininkai", apiRoutes)

//connect to DB
mongoose.connect(process.env.URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("listening on port", process.env.PORT)
        })
    })
    .catch((err) => console.log(err))

