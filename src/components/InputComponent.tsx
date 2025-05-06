import React from 'react';

interface InputComponentProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}

const InputComponent: React.FC<InputComponentProps> = ({ type, value, onChange, placeholder, error }) => {
  return (
    <div>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default InputComponent; 