import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  nombre: Yup.string()
    .min(2, 'Muy corto')
    .max(50, 'Muy largo')
    .required('Requerido'),
  apellidos: Yup.string().required('Requerido'),
  correo: Yup.string()
    .email('Email inválido')
    .required('Requerido'),
  contraseña: Yup.string()
    .min(8, 'Mínimo 8 caracteres')
    .required('Requerido'),
  edad: Yup.number()
    .min(18, 'Debes tener al menos 18 años')
    .required('Requerido'),
  numero: Yup.string()
    .matches(/^\d{10}$/, 'El número debe tener 10 dígitos')
    .required('Requerido'),
  pais: Yup.string()
    .oneOf(['españa', 'mexico', 'estadosUnidos'], 'Selecciona un país válido')
    .required('Requerido'),
  terminos: Yup.boolean()
    .oneOf([true], 'Debes aceptar los términos y condiciones')
    .required('Requerido'),
});

function Formulario() {
  const [formStatus, setFormStatus] = useState('initial');

  return (
    <Formik
      initialValues={{
        nombre: '',
        apellidos: '',
        correo: '',
        contraseña: '',
        edad: 0,
        numero: '',
        pais: '',
        terminos: false,
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          setFormStatus('submitting');
          await new Promise((r) => setTimeout(r, 2000));
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
            <label htmlFor="nombre">Nombre</label>
            <Field type="text" name="nombre" />
            <ErrorMessage name="nombre" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="apellidos">Apellidos</label>
            <Field type="text" name="apellidos" />
            <ErrorMessage name="apellidos" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="correo">Email</label>
            <Field type="email" name="correo" />
            <ErrorMessage name="correo" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="contraseña">Contraseña</label>
            <Field type="password" name="contraseña" />
            <ErrorMessage name="contraseña" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="edad">Edad</label>
            <Field type="number" name="edad" />
            <ErrorMessage name="edad" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="numero">Número</label>
            <Field type="text" name="numero" />
            <ErrorMessage name="numero" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="pais">País</label>
            <Field as="select" name="pais">
              <option value="">Selecciona un país</option>
              <option value="españa">España</option>
              <option value="mexico">México</option>
              <option value="estadosUnidos">EEUU</option>
            </Field>
            <ErrorMessage name="pais" component="div" className="error" />
          </div>

          <div className="form-group">
            <label>
              <Field type="checkbox" name="terminos" />
              Acepto los términos y condiciones
            </label>
            <ErrorMessage name="terminos" component="div" className="error" />
          </div>

          <button type="submit" disabled={isSubmitting || formStatus === 'submitting'}>
            {formStatus === 'submitting' ? 'Enviando...' : 'Enviar'}
          </button>

          {formStatus === 'success' && (
            <div className="success-message">
              ¡Formulario enviado con éxito!
            </div>
          )}

          {formStatus === 'error' && (
            <div className="error-message">
              Hubo un error al enviar el formulario.
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
}

export default Formulario;
