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
  ref?: React.Ref<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
}

const FormField = React.forwardRef<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, FormFieldProps>(
  ({

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
}, ref) => {
  const inputClasses = "w-full p-3 border border-cloudGray rounded-lg focus:ring-imperialGold focus:border-imperialGold transition-all duration-300 ease-in-out bg-softSilver dark:bg-glassPanelBlack text-charcoalBlack dark:text-whiteSnow";

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
      <label htmlFor={id} className="block text-sm font-medium text-charcoalBlack dark:text-whiteSnow mb-1">
        {label}
      </label>
      {renderField()}
    </div>
  );
};

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-1">
        {label}
      </label>
      {renderField()}
    </div>
  );
});

FormField.displayName = 'FormField';

export default FormField;