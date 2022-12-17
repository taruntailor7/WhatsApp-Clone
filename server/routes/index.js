const applyRoutes = (app) => {
    app.get("/", (req, res) => {
        res.send({message:"hello"});
    })
}

export default applyRoutes;