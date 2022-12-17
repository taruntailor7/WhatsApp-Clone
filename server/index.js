import express from "express";
import cors from "cors";
import connection  from "./config/db.js";

const app = new express();
app.use(express.json());
app.use(cors());



app.listen(3050, ()=>{
    try{
        connection();
        console.log("Server running on 3050");
    }
    catch(e){
        console.log(e)
    }
})