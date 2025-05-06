// src/components/SelectComponent.tsx
import React, { useState } from 'react';

interface SelectComponentProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
}

const SelectComponent: React.FC<SelectComponentProps> = ({ options, value, onChange, placeholder, error }) => {
  const [search, setSearch] = useState('');

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={placeholder || 'Search...'}
      />
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="" disabled>{placeholder}</option>
        {filteredOptions.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default SelectComponent;