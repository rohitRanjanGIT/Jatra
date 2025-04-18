import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  as?: 'input' | 'textarea';
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  as = 'input',
  className = '',
}) => {
  const baseStyles = "w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-saffron-300 focus:border-saffron-500 transition duration-200 bg-white";
  
  return (
    <div className={`mb-4 ${className}`}>
      <label 
        htmlFor={name} 
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
        {required && <span className="text-maroon-700 ml-1">*</span>}
      </label>
      
      {as === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`${baseStyles} h-24`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={baseStyles}
        />
      )}
    </div>
  );
};

export default FormField;