import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className='container'>
    <h3 className='text-center mx-2 my-2'>Todos List</h3>
    {
      props.todoItem.length===0?<h2 className='text-center mx-3 text-danger'>No Todos to display</h2>:
        props.todoItem.map((todo)=>{
          return <TodoItem todo={todo} onDelete={props.onDelete} onUpdate={props.onUpdate}/>
        })
      }
    </div>
)
}
