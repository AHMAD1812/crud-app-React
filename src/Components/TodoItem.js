import React from 'react'

export const TodoItem = ({todo,onDelete,onUpdate}) => {
  return (
    <div>
        <h3>{todo.title}</h3>
        <p>{todo.desc}</p>
        <button className='btn btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
        <button className='btn btn-primary mx-1' onClick={()=>{onUpdate(todo.sno)}}>Update</button>
    </div>
  )
}
