import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { BiEditAlt } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'

function Todo({ todos, completeTodo, editTodo, deleteTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        editTodo(edit.id, value);
        setEdit({
            id: null,
            value: '',
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.id} : {todo.text}
            </div>
            <div className="icons">
                <BiEditAlt
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='edit-icon'
                />
                <AiOutlineDelete
                    onClick={() => deleteTodo(todo.id)}
                    className='delete-icon'
                />
            </div>
        </div>
    ));
}

export default Todo
