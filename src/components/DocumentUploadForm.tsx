import React from 'react';
import FileUploadComponent from './FileUploadComponent';
import ButtonComponent from './ButtonComponent';
import { useFormContext } from '../context/FormContext';

interface DocumentUploadFormProps {
  onNext: () => void;
  onBack: () => void;
}

const DocumentUploadForm: React.FC<DocumentUploadFormProps> = ({ onNext, onBack }) => {
  const { formData, setFormData } = useFormContext();

  const handleFilesChange = (key: string, files: File[]) => {
    setFormData({ ...formData, [key]: files });
  };

  return (
    <div>
      <h2>Document Upload</h2>
      <FileUploadComponent label="ID Card Front" onFilesChange={(files) => handleFilesChange('idCardFront', files)} />
      <FileUploadComponent label="ID Card Back" onFilesChange={(files) => handleFilesChange('idCardBack', files)} />
      <FileUploadComponent label="Additional Documents" onFilesChange={(files) => handleFilesChange('additionalDocs', files)} multiple maxSizeMB={10} />
      <ButtonComponent label="Back" onClick={onBack} styleType="secondary" />
      <ButtonComponent label="Next" onClick={onNext} styleType="primary" />
    </div>
  );
};

export default DocumentUploadForm;