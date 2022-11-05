import React from 'react'
import { Formik, Field, Form } from 'formik';
import validationsSchema from './validations';
function NewTodoForm() {


    return (

        <Formik
            initialValues={{
                text: "",
            }}
            onSubmit={(values, bag) => {

                console.log(values);

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
