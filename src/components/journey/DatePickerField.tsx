import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerFieldProps {
  label: string;
  selected: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  required?: boolean;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({
  label,
  selected,
  onChange,
  placeholder,
  required = false,
  minDate,
  maxDate,
  className = '',
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-maroon-700 ml-1">*</span>}
      </label>
      
      <DatePicker
        selected={selected}
        onChange={onChange}
        placeholderText={placeholder}
        minDate={minDate}
        maxDate={maxDate}
        className="w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-saffron-300 focus:border-saffron-500 transition duration-200 bg-white"
        dateFormat="dd/MM/yyyy"
        required={required}
      />
    </div>
  );
};

export default DatePickerField;