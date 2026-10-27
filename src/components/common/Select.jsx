import { useId } from "react";
import FormField from "./FormField.jsx";

export default function Select({ label, full, options = [], id, ...props }) {
  const autoId = useId();
  const inputId = id || autoId;

  const field = (
    <select id={label ? inputId : undefined} {...props}>
      {options.map((option) => {
        const value = typeof option === "string" ? option : option.value;
        const text = typeof option === "string" ? option : option.label;
        return (
          <option key={value} value={value}>
            {text}
          </option>
        );
      })}
    </select>
  );

  if (!label) return field;

  return (
    <FormField label={label} htmlFor={inputId} full={full}>
      {field}
    </FormField>
  );
}
