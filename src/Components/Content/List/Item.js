import React from 'react'
import { useTodo } from '../../../contexts/ToDoContext';

function Item({ todo }) {
    //context'imizi kullanalım.Bunun altındaki setTodos'u kullanalım.
    //elimizdeki verileri almak için todos 'u da ekleyelim.
    const { todos, setTodos } = useTodo();

    const onChange = (id) => {
        const cloned_todos = [...todos];

        const itemIndex = cloned_todos.findIndex(todo => todo.id === id);
        const item = todos[itemIndex];
        item.completed = !item.completed; //itemcompleted'ın tersini al demiş oluyoruz 

        setTodos(cloned_todos); // setTodos'a cloned_todos atayarak checkbox'ı aktif hale getirdik.
        console.log("cloned_todos", cloned_todos);
    }

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
                <button className="destroy"></button>
            </div>
        </li>
    )
}
export default Item
