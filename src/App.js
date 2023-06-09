
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {AddTodo} from "./MyComponents/AddTodo";
import {Footer} from "./MyComponents/Footer";
import React, { useState } from 'react';


function App() { 
  const onDelete =(todo) =>{
    console.log("I am onDelete of todo",todo);
    //Deleting this way doesnot work in react
    //let index = todos.indexOf(todo);
   // todos.splice(index, 1);

   setTodos (todos.filter((e) =>{
    return e!==todo;
   }));
  }

  const addTodo =(title, desc)=>{
    console.log ("I am adding this todo", title, desc)
    let sno;
    if (todos.length==0){
      sno = 0;
    }
    else {
      sno = todos[todos.length-1] .sno + 1;
    }
     
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log (myTodo);
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done"
    },

    {
      sno: 2,
      title: "Make your breakfast",
      desc: "You meed to make your breakfast"
    },

    {
      sno: 3,
      title: "Go to the gym",
      desc: "You meed to go to the gym to get this job done"
    },
  ]);


  return (
  <>
   <Header title = "My Todos List" searchBar={false} />
   <AddTodo addTodo={addTodo}/>
   <Todos todos={todos} onDelete={onDelete}/>
   <Footer/>
  </>
  );
}

export default App;
