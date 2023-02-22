import { useFormik } from 'formik'

const validate = (values) => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Requerido'
  } else if (values.name.length < 5) {
    errors.name = 'El nombre es muy corto'
  }
  if (!values.lastname) {
    errors.lastname = 'Requerido'
  } else if (values.lastname.length < 5) {
    errors.lastname = 'El apellido es muy corto'
  }
  return errors
}

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
    },
    validate,
    onSubmit: values => console.log(values)
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input
        type='text' {...formik.getFieldProps('name')}
        /* getFieldProps le pasa todas las propiedades al inout sin necesidad de poner cada una como en el input apellido, solo debemos ponerle el type */
      />
      {formik.touched.name &&formik.errors.name ? <div>{formik.errors.name}</div> : null}
      <br />
      <label>Apellido</label>
      <input
        name='lastname'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        /* onBlur hace que la validación se ejecute cuando el usuario salga del campo */
        value={formik.values.lastname}
      />
      {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}
      {/* 'touched' hace que no muestre la validación a menos que sea "tocado" */}
      <br />
      <label>Email</label>
      <input
        type='email' {...formik.getFieldProps('email')}
      />
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <button type='submit'>Enviar</button>
    </form>

  );
}

export default App;
