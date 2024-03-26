import React from 'react'

const Todo = ({todo}) => {
    return (
        <div className='todo'>
            <span className="todo-text">
                {todo}
            </span>
        </div>
    );
}

export default Todo 