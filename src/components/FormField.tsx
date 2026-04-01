import type { InputHTMLAttributes } from 'react';

type FormFieldProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

function FormField({ label, ...inputProps }: FormFieldProps) {
  return (
    <label className="auth-field">
      <span>{label}</span>
      <input {...inputProps} />
    </label>
  );
}

export default FormField;
