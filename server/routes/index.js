import { createChannel, createUser, getChannelList, loginUser, searchUser, sendMessage } from "../controllers/controller.js";
import { validateCreateUser } from "../utility/validations.js";

const applyRoutes = (app) => {
    app.get("/", (req, res) => {
        res.send({message:"hello"});
    })
    // create-user, login, channel, search-user, channel-list, send-message

    app.post("/user",validateCreateUser, createUser);

    app.post("/login", loginUser)

    app.post("/channel", createChannel)
    
    app.get("/search-user", getChannelList)

    app.get("/channel-list", searchUser)

    app.post("/message", sendMessage)

}

export default applyRoutes;