export default function Panel({ title, action, children }) {
  return (
    <div className="panel">
      {title ? (
        <div className="panel-header">
          <h3>{title}</h3>
          {action}
        </div>
      ) : null}
      {children}
    </div>
  );
}
