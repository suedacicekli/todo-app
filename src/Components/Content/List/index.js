import React from 'react'
import { useTodo } from '../../../contexts/ToDoContext';
import Item from './Item';

let filtered = null;

function List() {
    const { todos, filter } = useTodo();
    // console.log(todos);

    filtered = todos;

    if (filter !== 'all') {
        filtered = todos.filter((todo) => filter === 'active'
            ? todo.completed === false && todo
            : todo.completed === true && todo)
    }

    return (
        <ul className="todo-list">
            {
                filtered.map(todo => (
                    <Item key={todo.id} todo={todo} />
                ))
            }
        </ul>
    )
}
export default List
