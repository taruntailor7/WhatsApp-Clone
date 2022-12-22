import express from "express";
import configureExpressApp from "./config/index.js";
import connection  from "./dbConnection/db.js";
import applyRoutes from "./routes/index.js";
import cors from "cors"

const app = new express();
configureExpressApp(app);

// app.use(express.json()); 
app.use(cors());


app.listen(3050, ()=>{
    try{
        connection();
        applyRoutes(app)
        console.log("Server running on 3050");
    }
    catch(e){
        console.log(e)
    }
})