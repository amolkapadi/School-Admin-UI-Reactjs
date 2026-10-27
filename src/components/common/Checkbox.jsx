export default function Checkbox({ label, ...props }) {
  return (
    <label className="check">
      <input type="checkbox" {...props} />
      {label ? <span>{label}</span> : null}
    </label>
  );
}
