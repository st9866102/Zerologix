import React, { useState } from 'react';
import BasicInfoForm from './components/BasicInfoForm';
import DocumentUploadForm from './components/DocumentUploadForm';
import ConfirmationPage from './components/ConfirmationPage';
import { FormProvider } from './context/FormContext';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    // Handle form submission
   alert('Form submitted successfully');
    // Optionally reset the form or navigate to a success page
  };

  return (
    <FormProvider>
      <div className="App">
        <header className="App-header">
          <h1>KYC Form</h1>
          {currentStep === 1 && <BasicInfoForm onNext={handleNextStep} />}
          {currentStep === 2 && <DocumentUploadForm onNext={handleNextStep} onBack={handlePreviousStep} />}
          {currentStep === 3 && <ConfirmationPage onBack={handlePreviousStep} onSubmit={handleSubmit} />}
        </header>
      </div>
    </FormProvider>
  );
}

export default App;
