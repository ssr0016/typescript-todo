import './App.css';
import InputField from './components/InputField';
import React, { useState } from "react";
import { Todo } from './model';
import Todolist from './components/Todolist';


//TS App as Functional Components
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]); //Array interface in TS

  const handleAdd = (e: React.FormEvent) =>{
    e.preventDefault();

    if(todo){
      setTodos([...todos, { id: Date.now(), todo, isDone: false}])
      setTodo("");
    }
  };
   
  console.log(todos);


  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
     <Todolist todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
