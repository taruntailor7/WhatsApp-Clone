import { createChannel, createUser, getChannelList, loginUser, searchUser, sendMessage } from "../controllers/controller.js";
import { validateAddMessage, validateCreateChannel, validateCreateUser, validateGetChannelList, validateLogin, validateSearchUser } from "../utility/validations.js";

const applyRoutes = (app) => {
    app.get("/", (req, res) => {
        res.send({message:"hello"});
    })
    // create-user, login, channel, search-user, channel-list, send-message

    app.post("/user",validateCreateUser, createUser);

    app.post("/login",validateLogin, loginUser)

    app.post("/channel",validateCreateChannel, createChannel)
    
    app.get("/search-user",validateSearchUser,searchUser)

    app.get("/channel-list",validateGetChannelList, getChannelList)

    app.post("/message",validateAddMessage,sendMessage)

}

export default applyRoutes;