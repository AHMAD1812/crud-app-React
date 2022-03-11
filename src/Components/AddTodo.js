import React from 'react';
import { useState, useEffect } from 'react';

export const AddTodo = (props) => {

    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    
    useEffect(()=>{
        props.update?setTitle(props.todoValue.title):setTitle("");
        props.update?setDescription(props.todoValue.desc):setDescription("");
    },[props.update]);

    const submit = (e) =>{
        e.preventDefault();
        if(Title=="" || Description==""){
            alert("Title and Description Required");
        }else{
            props.addTodo(Title,Description,props.update);
            setTitle("");
            setDescription("");
        }
    }
  return (
    <div className='container'>
    <h3 className='text-center mx-2 my-2'>Add a Todo List</h3>
    <form onSubmit={submit}>
        <div className="mb-3">
            <label htmlfor="title" className="form-label">Title</label>
            <input type="text" className="form-control" 
             value={Title} 
            onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label htmlfor="exampleInputPassword1" className="form-label">Description</label>
            <input type="text" className="form-control" 
            value={Description} 
            onChange={(e)=>setDescription(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">{props.update?"Update Todo":"Add Todo"}</button>
    </form>
    </div>
  )
}
