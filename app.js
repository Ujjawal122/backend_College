import express from "express"
import cors from "cors"
import dotenv from "dotenv";

dotenv.config();

const app=express()

app.use(
    cors({
        origin:process.env.CORS_ORIGIN,
         methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        credentials:true
    })
)




import Checkroute from './src/routes/Check.routes.js'
import UserRoute from './src/routes/user.routes.js'
app.use(express.json());

app.use("/api/v1",Checkroute)   
app.use("/api/v1",UserRoute)

 
export {app}   