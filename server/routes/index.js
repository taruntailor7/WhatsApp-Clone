import { createChannel, createUser, getChannelList, loginUser, searchUser, sendMessage } from "../controllers/controller.js";
import { validateAddChannel, validateAddMessage, validateChannels, validateCreateUser, validateLogin, validateSearchUser } from "../utility/validations.js";

const applyRoutes = (app) => {
    app.get("/", (req, res) => {
        res.send({message:"Welcome on my WhatsApp"});
    })
    // create-user, login, channel, search-user, channel-list, send-message

    app.post("/user",validateCreateUser, createUser);

    app.post("/login",validateLogin, loginUser)

    app.post("/channel",validateAddChannel, createChannel)
    
    app.get("/search-user",validateSearchUser,searchUser)

    app.get("/channel-list",validateChannels, getChannelList)

    app.post("/message",validateAddMessage,sendMessage)

}

export default applyRoutes;