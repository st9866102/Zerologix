// src/components/BasicInfoForm.tsx
import React, { useState } from 'react';
import InputComponent from './InputComponent';
import SelectComponent from './SelectComponent';
import DatePickerComponent from './DatePickerComponent';
import ButtonComponent from './ButtonComponent';
import { useFormContext } from '../context/FormContext';

interface BasicInfoFormProps {
  onNext: () => void;
}

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ onNext }) => {
  const { formData, setFormData } = useFormContext();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.phone || ! /^09\d{8}$/.test(formData.phone)) newErrors.phone = 'Valid phone number is required';
    if (!formData.nationality) newErrors.nationality = 'Nationality is required';
    if (!formData.dob || new Date().getFullYear() - new Date(formData.dob).getFullYear() < 18 || new Date().getFullYear() - new Date(formData.dob).getFullYear() > 85) newErrors.dob = 'Valid age is required (18-85)';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext();
      console.log('第一頁完成')
    }
  };

  return (
    <div>
      <h2>Basic Information</h2>
      <InputComponent type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Name" error={errors.name} />
      <InputComponent type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email" error={errors.email} />
      <InputComponent type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Phone" error={errors.phone} />
      <SelectComponent options={["USA", "Canada", "UK"]} value={formData.nationality} onChange={(value) => setFormData({ ...formData, nationality: value })} placeholder="Select Nationality" />
      <SelectComponent options={["Male", "Female", "Prefer not to say"]} value={formData.gender} onChange={(value) => setFormData({ ...formData, gender: value })} placeholder="Select Gender" />
      <InputComponent type="text" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} placeholder="Address" />
      <DatePickerComponent value={formData.dob} onChange={(value) => setFormData({ ...formData, dob: value })} minDate="1900-01-01" maxDate="2023-12-31" />
      <ButtonComponent label="Next" onClick={handleNext} styleType="primary" />
    </div>
  );
};

export default BasicInfoForm;