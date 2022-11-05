import React from 'react';
import Form from './NewTodoForm/index';


function Header() {
    return (
        <header className="header">
            <h1>todos</h1>
            <Form />
        </header>
    )
}

export default Header