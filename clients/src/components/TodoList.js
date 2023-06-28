import React from 'react'

import {BiEdit} from 'react-icons/bi';
import {MdDelete} from 'react-icons/md';

const TodoList = ({text,updateMode,deleteTodo}) => {
  return (
    <div className='todo'>
        <div className='text'>{text}</div>
        <div className='icons'>

        <BiEdit className='icon' onClick={updateMode}/>
        <MdDelete className='icon' onClick={deleteTodo}/>
        </div>
    </div>
  )
}

export default TodoList;