import mongoose from "mongoose";

const connection = async () =>{
    try {
        await mongoose.connect("mongodb+srv://tarun7:tarun7@imdb.46rj40h.mongodb.net/whatsapp?retryWrites=true&w=majority",{
        // keepAlive:1,
        // autoReconnect:true,
        // poolSize:10,    
        useNewUrlParser : true,
        useUnifiedTopology: true
    });
        console.log("Connection established");
    } catch (error) {
        console.log(error);
    }
}

export default connection;
