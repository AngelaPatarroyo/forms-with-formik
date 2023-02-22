import { useField } from "formik"


const TextInput = ({ label, ...props}) => {
  const [field, meta] = useField(props) /* useFiel is a hook */

  return (
    <div className="control">
        <label className="label">{label}</label>
        <input className="input" {...field} {...props} />
        {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  )
}

export default TextInput