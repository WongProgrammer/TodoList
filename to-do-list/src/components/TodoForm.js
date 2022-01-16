import React, { useState, useEffect, useRef } from 'react'

export default function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const [count, setCount] = useState(1);

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setCount(count + 1);
        //On Edit the id uses one because its a new Todo Form Component, so gotta make a random id
        if (props.edit) {
            // console.log('This is an edit');
            props.onSubmit({
                id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
                text: input
            })
        } else {
            props.onSubmit({
                id: count,
                text: input
            })
        }
        setInput('');
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        type="text"
                        placeholder='update todo'
                        value={input}
                        name='text'
                        className='todo-input edit'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className='todo-button edit'>Update todo</button>
                </>) :
                (<>
                    <input
                        type="text"
                        placeholder='add a todo'
                        value={input}
                        name='text'
                        className='todo-input'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className='todo-button'>Add todo</button>
                </>)
            }
        </form>
    )
}
