function Input({ className, name, placeholder, type = "text", id, onChange }) {
  return <input className={className} name={name} placeholder={placeholder} type={type} id={id} onChange={onChange}></input>;
}

export default Input;
