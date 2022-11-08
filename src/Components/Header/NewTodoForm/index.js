import React from 'react'
import { Formik, Field, Form } from 'formik';
import validationsSchema from './validations';
import { useTodo } from '../../../contexts/ToDoContext';


function NewTodoForm() {
    const { addTodo } = useTodo()

    return (

        <Formik
            initialValues={{
                text: "",
            }}
            onSubmit={(values, bag) => {

                console.log(values);
                //prev ile önceki verileri koruyacağım..ve yeni bir obje oluşturacağım , prev context'e alındı

                addTodo(values.text)

                bag.resetForm();
            }}
            validationsSchema={validationsSchema}
        >
            {/* İnputları Field olarak değiştirdik */}
            <Form>
                <Field
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                    id="text"
                    name="text"
                />
            </Form>
        </Formik>


    );
}

export default NewTodoForm
