import React from 'react'
import { useTodo } from '../../../contexts/ToDoContext';

function Item({ todo }) {
    //context'imizi kullanalım.Bunun altındaki setTodos'u kullanalım.
    //elimizdeki verileri almak için todos 'u da ekleyelim.
    const { destroyTodo, toggleTodo } = useTodo();

    const onChange = (id) => toggleTodo(id);

    //onChange'deki işlemlere benzer şekilde hazırlayacağız.

    const onDestroy = (id) => { destroyTodo(id) };


    return (
        <li key={todo.id} className={todo.completed ? "completed" : " "}>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)}

                />
                <label>{todo.text}</label>
                <button className="destroy" onClick={() => onDestroy(todo.id)}></button>
            </div>
        </li>
    )
}
export default Item
