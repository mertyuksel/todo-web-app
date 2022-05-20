const router = require("express").Router()
const Task = require("../models/Task");  

router.get("/", async(req, res) => {
    const Tasks = await Task.find();
    res.render("index", {todo: Tasks})
})

module.exports = router;