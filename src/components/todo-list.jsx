import React, { useEffect, useRef, useState } from 'react'
import Todo from './todo'

const TodoList = () => {

    const [newTodo, setNewTodo] = useState("");
    const isTrue = true;
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        localStorage.getItem("todos") && setTodos(JSON.parse(localStorage.getItem("todos")));
    }, []);

    const handleTodos = () => {
        const newTodos = [...todos, newTodo]
        setTodos(newTodos);
        setNewTodo("");
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }
    const cleanTodo = () => { 
        setNewTodo(""); 
    }
    const handleRemoveTodo = (id) =>{
        const newTodos = todos.filter((_, i) => i!==id)
        console.log(newTodos);
        setTodos(newTodos)     
        localStorage.setItem("todos", JSON.stringify(newTodos));
    }
    return (
       
        <div className='todo-list'>
            {isTrue ? <div> ITS TRUEEE </div> : <div>ITS NOT TRUE!</div>}
            <div className="add-menu">
                <input type='text' value={newTodo} name="new-todo" className="new-todo" placeholder='New To-Do...' onChange={e => setNewTodo(e.target.value)}></input>
                <button disabled={!newTodo} onClick={handleTodos}
                >+</button><button onClick={cleanTodo}>x</button>
            </div>

            {
                todos.map((todo, id) => {
                    console.log(id, todo)
                    return (
                        <div className="todo-item">
                            <Todo key={todo + id} todo={todo} />
                            <button onClick={()=>{handleRemoveTodo(id)}}>X</button>
                        </div>
                        )
                })
            }
        </div>
    )
}

export default TodoList