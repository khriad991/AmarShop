import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./DB/DB.js";
import authRoute from "./routes/authRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import color from 'colors'
import cors from 'cors'


//congig engv
dotenv.config()

// rest object ---------..
const app = express()

// middleware implement
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// route ---------------->>>
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/category", CategoryRoute)

//rest api
app.get("/aa", (req, res) => {
    res.send("<h1>Welcome to ecommerce app</h1>");
});
// readdirSync('./src/routes').map(r =>app.use('/api/v1',require(`./routes/${r}`)))

let port = process.env.PORT || 6000;

// Database coll
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`applicatain Running Port ${port}`.bgGreen)
    })
}).catch((e) => {
    console.log(e.bgRed)
})


// // app exports for devloy
// module.exports = app;









