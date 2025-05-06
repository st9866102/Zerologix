// src/components/FileUploadComponent.tsx
import React, { useState } from 'react';

interface FileUploadComponentProps {
  label: string;
  onFilesChange: (files: File[]) => void;
  multiple?: boolean;
  maxSizeMB?: number;
  acceptedFormats?: string[];
}

const FileUploadComponent: React.FC<FileUploadComponentProps> = ({ label, onFilesChange, multiple = false, maxSizeMB = 5, acceptedFormats = ['jpg', 'png', 'pdf'] }) => {
  const [fileList, setFileList] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => {
      const fileSizeMB = file.size / (1024 * 1024);
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      return fileSizeMB <= maxSizeMB && acceptedFormats.includes(fileExtension || '');
    });
    setFileList(validFiles);
    onFilesChange(validFiles);
  };

  const handleFileRemove = (fileName: string) => {
    const updatedFiles = fileList.filter(file => file.name !== fileName);
    setFileList(updatedFiles);
    onFilesChange(updatedFiles);
  };

  return (
    <div>
      <label>{label}</label>
      <input type="file" onChange={handleFileChange} multiple={multiple} />
      <ul>
        {fileList.map(file => (
          <li key={file.name}>
            {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)
            <button onClick={() => handleFileRemove(file.name)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileUploadComponent;