import React, { useEffect, useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

const Header = () => {
    const[Todo,setTodo]=useState([{task:"early to rise",id:uuidv4(),Mark:false}]);
    const[newTask,setNewTask]=useState("");
    function Handler(event){
        setNewTask(event.target.value);
    }
    function AddHandler(){
      if(newTask==""){
        return;
      }
        setTodo([...Todo,{task:newTask,Mark:false,id:uuidv4()}]);
        setNewTask("");
    }
    function Deletion(id){
      setTodo(Todo.filter((el)=>el.id!=id))
    }
    function UpdateTodo(id){
      setTodo(Todo.map((el)=>{
        if(el.id!=id){
          return{...el};
        }
        else{
          return{...el,Mark:!el.Mark}
        }
      }))
    }
  return (
   <div>
     <header className="glass-header">
      <div className="header-left">
        <span className="logo-icon">📝</span>
        <h1 className="logo-text">TODO APP-<span>   manage your daily task with todo..</span></h1>
      </div>
      
      <div className="header-right">
        <div className="search-container">
          <input type="text" placeholder="Search tasks..." className="search-input" value={newTask} onChange={Handler}/>
        </div>
        <button className="add-task-btn" onClick={AddHandler}>Add Task +</button>
      </div>
    </header>
     
    <div className="todo-container">
      <ul className="todo-list">
        {Todo.map((el) => (
          <li key={el.id} className="todo-item">
            <div className="task-info">
              <input 
                type="checkbox" 
                className="custom-checkbox" 
                checked={el.Mark} 
                onChange={()=>{
                  UpdateTodo(el.id);
                }}
              />
              <span className={`task-text ${el.Mark ? 'completed' : ''}`}>
                {el.task}
              </span>
            </div>
            <button className="delete-btn" onClick={()=>{Deletion(el.id)}}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>




   </div>
  );
};

export default Header;