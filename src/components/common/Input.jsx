import { useId } from "react";
import FormField from "./FormField.jsx";
import iconClass from "./iconClass.js";

export default function Input({ label, full, icon, id, ...props }) {
  const autoId = useId();
  const inputId = id || autoId;

  if (icon) {
    return (
      <label className="field" htmlFor={inputId}>
        {label ? <span>{label}</span> : null}
        <div className="field-input">
          <i className={iconClass(icon)} />
          <input id={inputId} {...props} />
        </div>
      </label>
    );
  }

  const input = <input id={label ? inputId : undefined} {...props} />;
  if (!label) return input;

  return (
    <FormField label={label} htmlFor={inputId} full={full}>
      {input}
    </FormField>
  );
}
