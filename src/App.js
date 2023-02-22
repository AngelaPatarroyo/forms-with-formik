import { Formik, Form, Field, ErrorMessage } from 'formik'
import Checkbox from './components/Checkbox'
import TextInput from './components/TextInput'
import Select from './components/Select'
import Radio from './components/Radio'


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

  if (!values.radio) {
    errors.radio = 'Requerido'
  }
  return errors
}

function App() {
  return (
    <Formik
      initialValues={{ name: '', lastname: '', email: '', chancho: '',
    radio: '' }}
      validate={validate}
      onSubmit={values => console.log(values)}
    >

      <Form>
        <TextInput name='name' label='Nombre' />
        <br />
        <TextInput name='lastname' label='Apellido' />
        <br />
        <TextInput name='email' label='Correo' />
        <Select label='Tipo de Chancho' name='chancho'>
          <option value=''>Seleccione chancho</option>
          <option value='felipe'>Felipe</option>
          <option value='chanchitofeliz'>Chanchito Feliz</option>
          <option value='chanchitotriste'>Chanchito Triste</option>
        </Select>
        <br />
        <Checkbox name='accept'>
          Aceptar término sy condiciones
        </Checkbox>
        <br />
        <Radio name='radio' value='chanchito1' label='chanchito 1'/>
        <Radio name='radio' value='chanchito2' label='chanchito 2'/>
        <Radio name='radio' value='chanchito3' label='chanchito 3'/>
        <ErrorMessage name='radio' />
        <br />
        <button type='submit'>Enviar</button>
      </Form>

    </Formik>
  );
}

export default App;
