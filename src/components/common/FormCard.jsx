export function FormCard({ children, onSubmit }) {
  return (
    <form
      className="form-card"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit?.(event);
      }}
    >
      {children}
    </form>
  );
}

export function FormGrid({ children }) {
  return <div className="form-grid">{children}</div>;
}

export function FormActions({ children }) {
  return <div className="form-actions">{children}</div>;
}
