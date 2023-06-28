import { RequestHandler } from "express";

import Todo,{ TodoModel } from "../models/todoModel";

export const createTodo:RequestHandler=async(req,resp,next)=>{
    const data: TodoModel = req.body;
    var todos = await Todo.create(data);

    return resp.status(200).json({message:"Todo created succesfully", data:todos})
}

export const getAllTodo:RequestHandler =async (req,resp) => {
    const data= await Todo.find();
    return resp.send(data);
}

export const updateTodo:RequestHandler=async(req,resp,next)=>{
    const {_id,text} = req.body;
    Todo.findByIdAndUpdate(_id,{text})
    .then(()=>resp.set(201).send(console.log("Succesfully Updated...")))
    .catch((error)=>console.log({message: error.message}))
}


export const deleteTodo:RequestHandler=async(req,resp)=>{
    const {_id} = req.body;
    console.log(req.body);
    Todo.findByIdAndDelete(_id)
    .then(()=>resp.send(console.log("deleted Successfully...")))
    .catch((error)=>console.log({message:error.message}));
}
