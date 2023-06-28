import * as mongoose from 'mongoose';
import { Model } from 'mongoose';

type TodoType = TodoModel & mongoose.Document

export interface TodoModel{
    text:{
        type:String,
        required:true
    }
}

const TodosSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    }
});

const Todo: Model<TodoType> = mongoose.model<TodoType>('Todo',TodosSchema);
export default Todo;