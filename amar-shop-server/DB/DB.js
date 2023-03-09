import mongoose from "mongoose";

const connectDB  =async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to MongoDB DataBase && DataBase Host on --->>>${conn.connection.host.bgGreen}`)
    }catch(err){
       console.log("error while colling MongoDB ",err)
    }
}

export default connectDB;