const router = require("express").Router();
const Task = require("../models/Task");

router
  .post("/add/todo", (req, res) => {
    const { todo } = req.body;
    const task = new Task({ todo });
    
    task.save().then(() => {
        console.log("Successfully added!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  })

  .get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Task.deleteOne({ _id }).then(() => {
        console.log("Deleted Successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });

module.exports = router;
