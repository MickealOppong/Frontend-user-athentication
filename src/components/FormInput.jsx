const FormInput = ({ name, label, type, size, def }) => {
  return <label className={`input input-bordered flex items-center gap-2 capitalize  ${size}`}>
    {label}
    <input type={type} name={name} defaultValue={def} />
  </label>
}
export default FormInput;