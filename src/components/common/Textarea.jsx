import { useId } from "react";
import FormField from "./FormField.jsx";

export default function Textarea({ label, full, id, ...props }) {
  const autoId = useId();
  const inputId = id || autoId;
  const field = <textarea id={label ? inputId : undefined} {...props} />;

  if (!label) return field;

  return (
    <FormField label={label} htmlFor={inputId} full={full}>
      {field}
    </FormField>
  );
}
