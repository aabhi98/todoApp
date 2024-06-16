
const express = require("express")
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors()); 

app.post("/todo",async function(req, res){
    const createPayLoad = req.body;
    const parsePayLoad = createTodo.safeParse(createPayLoad);
    if(!parsePayLoad.success) {
        res.status(411).json({
            msg: "wrong input",
        })
        return;
    }
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description
    })

    res.json({
        msg:"Todo created"
    })

})

app.get("/todos", async function(req, res){
    const todos = await todo.find({})
    res.json({
        todos
    })
})

app.put("/completed",async function(req, res){

    const updatePayLoad = req.body;
    const parsePayLoad = updateTodo.safeParse(updatePayLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "wrong input"
        })
        return
    }
    await todo.update({
        _id: req.body._id
    },{
        completed: true
    })
    res,express.json({
        msg:"Todo marked completed"
    })
})

app.listen(3000);