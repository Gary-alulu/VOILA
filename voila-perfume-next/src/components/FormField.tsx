import React from 'react';

interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  rows?: number;
  children?: React.ReactNode;
  as?: 'input' | 'textarea' | 'select';
  ariaLabel?: string;
  ariaDescribedBy?: string;
  // Props from react-hook-form's Controller
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onBlur: () => void;
  name: string;
  value: string;
  ref?: React.Ref<any>;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  type = 'text',
  placeholder,
  rows,
  children,
  as = 'input',
  ariaLabel,
  ariaDescribedBy,
  onChange,
  onBlur,
  name,
  value,
  ref,
}) => {
  const inputClasses = "w-full p-3 border border-gray-400 rounded-lg focus:ring-rose-gold focus:border-rose-gold transition-all duration-300 ease-in-out bg-white dark:bg-velvet-black text-charcoal-black dark:text-off-white";

  const renderField = () => {
    switch (as) {
      case 'textarea':
        return (
          <textarea
            id={id}
            name={name}
            rows={rows}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className={inputClasses}
            aria-label={ariaLabel}
            aria-describedby={ariaDescribedBy}
            ref={ref}
          ></textarea>
        );
      case 'select':
        return (
          <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={inputClasses}
            aria-label={ariaLabel}
            aria-describedby={ariaDescribedBy}
            ref={ref}
          >
            {children}
          </select>
        );
      case 'input':
      default:
        return (
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className={inputClasses}
            aria-label={ariaLabel}
            aria-describedby={ariaDescribedBy}
            ref={ref}
          />
        );
    }
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-1">
        {label}
      </label>
      {renderField()}
    </div>
  );
};

export default FormField;