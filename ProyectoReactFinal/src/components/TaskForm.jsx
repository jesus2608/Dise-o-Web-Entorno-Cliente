import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
//Validacion de que no cuelen ninguna tarea vacia
const validationSchema = Yup.object({
  tarea: Yup.string()
    .required('La tarea es requerida')
   
});

function TaskForm({ onAddTask }) {
  const [formStatus, setFormStatus] = useState('initial'); 
  const handleSubmit = (taskText) => {
    if (taskText.trim()) {
      onAddTask(taskText); 
    }
  };
// Aqui tenemos un formulario para ingresar una tarea que es un input y un submit
//Tambien tenemos el estado de formulario 
  return (
    <Formik
      initialValues={{
        tarea: '', 
      }}
      validationSchema={validationSchema} 
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          setFormStatus('submitting'); 
          await new Promise((resolve) => setTimeout(resolve, 500));// le pongo medio segundo para que se vea por lo menos el efecto y tampoco tarde tanto 
          handleSubmit(values.tarea); 
          setFormStatus('success'); 
          resetForm(); 
        } catch (error) {
          setFormStatus('error');
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <div className="form-group">
            <label htmlFor="tarea">Tarea</label>
            <Field
              type="text"
              name="tarea"
              placeholder="Escribe una tarea..."
            />
            <ErrorMessage
              name="tarea"
              component="div"
              className="error-message"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || formStatus === 'submitting'}
          >
            {formStatus === 'submitting' ? 'Enviando...' : 'Agregar Tarea'}
          </button>

          {formStatus === 'success' && (
            <div className="success-message">Tarea creada con éxito</div>
          )}

          {formStatus === 'error' && (
            <div className="error-message">
              Hubo un error al enviar la tarea.
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
}

export default TaskForm;