import React from 'react';
import { Todo } from '../model';
import "./styles.css";

interface Props {    
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Todolist: React.FC<Props> = ( { todos, setTodos }: Props) => {
  return (
    <div className="todos">
            {todos.map(todo=>(
                <li>{todo.todo}</li>

            ))}
    </div>
  )
}

export default Todolist