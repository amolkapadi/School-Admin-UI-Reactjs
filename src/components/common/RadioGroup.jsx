import FormField from "./FormField.jsx";

export default function RadioGroup({ label, name, options = [], value, full }) {
  return (
    <FormField label={label} full={full}>
      <div className="radio-group" role="radiogroup" aria-label={label}>
        {options.map((option) => {
          const optionValue = typeof option === "string" ? option : option.value;
          const text = typeof option === "string" ? option : option.label;
          return (
            <label className="check" key={optionValue}>
              <input
                type="radio"
                name={name}
                value={optionValue}
                defaultChecked={value === optionValue}
              />
              <span>{text}</span>
            </label>
          );
        })}
      </div>
    </FormField>
  );
}
