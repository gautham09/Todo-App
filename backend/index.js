const express = require("express");
const {createTodo, updateTodo} = require("./types.js");
const { todo } = require("./db")
const cors = require("cors");

const app = express();
app.use(cors())

app.use(express.json());

app.post('/todo', async (req, res) =>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "todo created"
    })
});

app.get("/todos", async (req, res) =>{
   const todos = await todo.find({});
    
   res.json({
    todos
   })
});

app.put("/completed", async (req, res) =>{
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "you sent wrong inputs"
        })
    }

    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
});

app.listen(3000, ()=>{
    console.log("Server running on port 3000")
});