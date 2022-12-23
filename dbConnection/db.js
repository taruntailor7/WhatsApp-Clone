import mongoose from "mongoose";
mongoose.set("strictQuery", false);
mongoose.set("debug", true);


const connection = async () =>{
    try {
        await mongoose.connect("mongodb+srv://tarun7:tarun7@imdb.46rj40h.mongodb.net/whatsapp?retryWrites=true&w=majority",{  
        useNewUrlParser : true,
        useUnifiedTopology: true
    });
        console.log("Connection established");
    } catch (error) {
        console.log(error);
    }
}

export default connection;
