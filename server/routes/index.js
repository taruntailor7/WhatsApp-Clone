import { createChannel, createUser, getChannelList, loginUser, searchUser, sendMessage } from "../controllers/controller.js";
import { validateCreateUser } from "../utility/validations.js";

const applyRoutes = (app) => {
    app.get("/", (req, res) => {
        res.send({message:"hello"});
    })
    // create-user, login, channel, search-user, channel-list, send-message

    app.post("/user",validateCreateUser, createUser);

    app.post("/login",validateCreateUser, loginUser)

    app.post("/channel",validateCreateUser, createChannel)
    
    app.get("/search-user",validateCreateUser, getChannelList)

    app.get("/channel-list",validateCreateUser, searchUser)

    app.post("/message",validateCreateUser, sendMessage)

}

export default applyRoutes;