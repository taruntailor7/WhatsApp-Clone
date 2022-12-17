const applyRoutes = (app) => {
    app.get("/", (req, res) => {
        res.send({message:"hello"});
    })
    // create-user, login, channel, search-user, channel-list, send-message

    app.post("/user", (req, res) => {
        res.send({message:"create-user"});
    })

    app.post("/login", (req, res) => {
        res.send({message:"login"});
    })

    app.post("/channel", (req, res) => {
        res.send({message:"channel"});
    })
    
    app.get("/search-user", (req, res) => {
        res.send({message:"search-user"});
    })

    app.get("/channel-list", (req, res) => {
        res.send({message:"channel-list"});
    })

    app.post("/message", (req, res) => {
        res.send({message:"message"});
    })

}

export default applyRoutes;