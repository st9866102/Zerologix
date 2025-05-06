// src/components/ConfirmationPage.tsx
import React from 'react';
import ButtonComponent from './ButtonComponent';
import { useFormContext } from '../context/FormContext';

interface ConfirmationPageProps {
  onBack: () => void;
  onSubmit: () => void;
}

const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ onBack, onSubmit }) => {
  const { formData } = useFormContext();

  return (
    <div>
      <h2>Confirmation</h2>
      <div>
        <h3>Basic Information</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <p>Nationality: {formData.nationality}</p>
        <p>Gender: {formData.gender}</p>
        <p>Address: {formData.address}</p>
        <p>Date of Birth: {formData.dob}</p>
      </div>
      <div>
        <h3>Uploaded Documents</h3>
        <ul>
          {formData.idCardFront?.map(file => (
            <li key={file.name}>{file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)</li>
          ))}
          {formData.idCardBack?.map(file => (
            <li key={file.name}>{file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)</li>
          ))}
          {formData.additionalDocs?.map(file => (
            <li key={file.name}>{file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)</li>
          ))}
        </ul>
      </div>
      <ButtonComponent label="Back" onClick={onBack} styleType="secondary" />
      <ButtonComponent label="Submit" onClick={onSubmit} styleType="primary" />
    </div>
  );
};

export default ConfirmationPage;