import connectDB from "./src/db/index.js";

import { app } from "./app.js";
import dotenv from "dotenv"


dotenv.config({
    path:"./.env"

}) 

const port =process.env.PORT||7001


connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`);
        
    }) 
})  
.catch((err)=>{
    console.log("Mongodb connection error",err);  
    
})   