import express from "express";
import { configureExpressApp } from "./config/index.js";
import connection  from "./dbConnection/db.js";

const app = new express();
configureExpressApp(app)

app.get("/", (req, res) => {
    res.send({message:"Welcome"});
})


app.listen(3050, ()=>{
    try{
        connection();
        console.log("Server running on 3050");
    }
    catch(e){
        console.log(e)
    }
})