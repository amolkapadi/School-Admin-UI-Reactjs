export default function Toggle({ label, on, onClick }) {
  return (
    <div className="toggle-row">
      <span>{label}</span>
      <button
        type="button"
        className={on ? "toggle on" : "toggle"}
        aria-label={label}
        aria-pressed={on}
        onClick={onClick}
      />
    </div>
  );
}
