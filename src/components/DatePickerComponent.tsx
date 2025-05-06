import React from 'react';

interface DatePickerComponentProps {
  value: string;
  onChange: (value: string) => void;
  minDate?: string;
  maxDate?: string;
}

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({ value, onChange, minDate, maxDate }) => {
  return (
    <div>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={minDate}
        max={maxDate}
      />
    </div>
  );
};

export default DatePickerComponent; 