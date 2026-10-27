import { Link } from "react-router-dom";
import iconClass from "./iconClass.js";

export default function Button({
  to,
  variant = "primary",
  size,
  icon,
  children,
  className = "",
  type = "button",
  ...props
}) {
  const classes = ["btn", `btn-${variant}`, size === "sm" ? "btn-sm" : "", className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon ? <i className={iconClass(icon)} /> : null}
      {children}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}
