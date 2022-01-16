import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm
    from './TodoForm'
function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        //Checks if input has text or not
        if (!todo.text || /^\s*$/.test(todo.test)) {
            return;
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos);
        // console.log(...todos);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    const editTodo = (todoId, newValue) => {
        if (!newValue || /^\s*$/.test(newValue)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const deleteTodo = id => {
        const deleteArr = [...todos].filter(todo => todo.id !== id);

        setTodos(deleteArr);
    };

    return (
        <div>
            <TodoForm
                onSubmit={addTodo}
            />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    )
}

export default TodoList
