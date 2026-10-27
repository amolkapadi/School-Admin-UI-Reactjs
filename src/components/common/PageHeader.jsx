import { useEffect } from "react";

export default function PageHeader({ title, description, children }) {
  useEffect(() => {
    document.title = `Campora | ${title}`;
  }, [title]);

  return (
    <div className="page-title">
      <div>
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </div>
      {children ? <div className="page-actions">{children}</div> : null}
    </div>
  );
}
