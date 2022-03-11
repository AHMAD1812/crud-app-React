import './App.css';
import Header from './Components/Header';
import { Todos } from './Components/Todos';
import { Footer } from './Components/Footer';
import { useState } from 'react';
import { AddTodo } from './Components/AddTodo';

import {
  BrowserRouter as Router,
  Routes,
  Route } from 'react-router-dom';
import About from './Components/About';

function App() {

  const [update,setUpdate]=useState(false);
  const [todoValue,setTodo]=useState([]);
  const [update_sno,setSno]=useState(-1);

  const onDelete = (todo) =>{
    console.log("Deleted",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  };

  const onUpdate=(sno)=>{
    setUpdate(true);
    setTodo(todos[sno-1]);
    setSno(sno-1);
  };

  const addTodo = (title,desc,isUpdate) =>{
    if(isUpdate){
      // 1. Make a shallow copy of the array
      let temp_todos = [...todos];
      
      // 2. Make a shallow copy of the element you want to mutate
      let todos_element = { ...temp_todos[update_sno] };
      
      // 3. Update the property you're interested in
      todos_element.title = title;
      todos_element.desc = desc;
      
      // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
      temp_todos[update_sno] = todos_element;
      
      // 5. Set the state to our new copy
      setTodos( temp_todos );
      setUpdate(false);
    }else{
      let sno;
      if(todos.length==0){
        sno=0;
      }else{
        sno=todos[todos.length-1].sno+1;
      }
      const myTodo={
        sno:sno,
        title:title,
        desc:desc,
      }
      setTodos([...todos,myTodo]);
      alert("New Todo Added");
    }
  
  }

  const [todos, setTodos] = useState([
    {
      sno:1,
      title:"Learn React",
      desc:"Learn React from tutorial",
    },{
      sno:2,
      title:"Learn Flutter",
      desc:"Learn Flutter from tutorial",
    },{
      sno:3,
      title:"Learn Vue",
      desc:"Learn Vue from tutorial",
    },
    
  ]);

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={
              <>
              <AddTodo addTodo={addTodo} todoValue={todoValue} update={update}/>
              <Todos todoItem={todos} onDelete={onDelete} onUpdate={onUpdate}/>
              </>} 
            />
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
