export default function FormField({ label, htmlFor, full, children }) {
  return (
    <div className={full ? "form-field full" : "form-field"}>
      {label ? <label htmlFor={htmlFor}>{label}</label> : null}
      {children}
    </div>
  );
}
