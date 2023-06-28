import axios from 'axios';

const baseUrl = "http://localhost:5000/todos";

const getAllTodo = (setTodo)=>{
    axios.get(baseUrl)
    .then(({data})=>{
        console.log('data---->',data);
        setTodo(data)
    })
}

const addTodo = (text,setText,setTodo)=>{
    axios.post(`${baseUrl}/save`,{text})
    .then((data)=>{
        console.log(data);
        setText("")
        getAllTodo(setTodo)
    })
    .catch((error)=>console.log(error))
}

const updateTodo = (todoId,text,setTodo,setText,setIsUpdating)=>{
    axios.put(`${baseUrl}/update`,{_id:todoId,text})
    .then((data)=>{
        setText("")
        setIsUpdating(false)
        getAllTodo(setTodo)
    })
    .catch((error)=>console.log(error))
}

const deleteTodo = (_id,setTodo)=>{
    axios.delete(`${baseUrl}/delete`,{data:{_id}})
    .then((data)=>{
        console.log(data);
        getAllTodo(setTodo);
    })
    .catch((error)=>console.log(error))
}

export {getAllTodo,addTodo,updateTodo,deleteTodo};