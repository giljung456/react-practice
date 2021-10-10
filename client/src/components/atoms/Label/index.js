function Label({ className, inputId, children }) {
  return (
    <label className={className} htmlFor={inputId}>
      {children}
    </label>
  );
}

export default Label;
