import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function Todo({todos = [], completeTodo}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const handleCompleteTodo = e => {
        // console.log(e.target)
        completeTodo(e.target.id)
      }
    

    return todos.map((todo, index) => (
        <div 
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
            key={index}
        >
            <div id={todo.id} key={todo.id} onClick={handleCompleteTodo}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine />
                <TiEdit />
            </div>
        </div>
    ))
}

export default Todo