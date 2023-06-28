import { Router } from "express";

import { createTodo,deleteTodo,getAllTodo, updateTodo } from "../controllers/todoController";

const router = Router();

router.post("/save",createTodo);

router.get("/",getAllTodo);

router.put('/update',updateTodo);

router.delete("/delete",deleteTodo);

export default router;
