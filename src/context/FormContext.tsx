// src/context/FormContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  nationality: string;
  gender: string;
  address: string;
  dob: string;
  idCardFront?: File[];
  idCardBack?: File[];
  additionalDocs?: File[];
}

interface FormContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    nationality: '',
    gender: '',
    address: '',
    dob: '',
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};