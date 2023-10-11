import React from 'react'
import "./styles.css"

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent)=> void; // void if this function is not going to return anything
}

const InputField:React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  return (
    <form className="input" onSubmit={handleAdd}>
        <input
         value={todo}
         onChange={
            (e)=>setTodo(e.target.value)
         }
         type="input"
         placeholder="Enter a task"
         className="input_box" />
        <button className="input_submit" type="submit">
        Go
        </button>
    </form>
  )
}

export default InputField