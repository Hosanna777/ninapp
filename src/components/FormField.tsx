import type { InputHTMLAttributes } from 'react';

type FormFieldProps = {
  error?: string;
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

function FormField({ error, label, required, ...inputProps }: FormFieldProps) {
  return (
    <label className="auth-field">
      <span>
        {label}
        {required ? <strong className="required-mark">※</strong> : null}
      </span>
      <input aria-invalid={Boolean(error)} aria-required={required} {...inputProps} />
      {error ? <small className="field-error">{error}</small> : null}
    </label>
  );
}

export default FormField;
