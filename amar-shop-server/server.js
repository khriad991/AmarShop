import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./DB/DB.js";
import authRoute from "./routes/authRoute.js";
import CategoryRoutes from "./routes/CategoryRoutes.js";
import color from 'colors'
import cors from 'cors'
import ProductRoutes from "./routes/ProductRoutes.js";


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
// readdirSync('./src/routes').map(allfile =>app.use('/api/v1',require(`./routes/${allfile}`)))
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/category", CategoryRoutes);
app.use("/api/v1/product",ProductRoutes )

//rest api
app.get("/aa", (req, res) => {
    res.send("<h1>Welcome to ecommerce app</h1>");
});

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
// export default  app;









