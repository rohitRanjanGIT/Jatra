import React, { createContext, useState, useContext } from 'react';
import { JourneyFormData, AuspiciousDate, JourneyContextType } from '../types';
import { fetchAuspiciousDates } from '../utils/api';

const defaultFormData: JourneyFormData = {
  fullName: '',
  currentLocation: '',
  destination: '',
  dateOfBirth: null,
  startDate: null,
  endDate: null,
  purpose: '',
};

const JourneyContext = createContext<JourneyContextType | undefined>(undefined);

export const JourneyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<JourneyFormData>(defaultFormData);
  const [results, setResults] = useState<AuspiciousDate[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const updateFormData = (data: Partial<JourneyFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const submitForm = async () => {
    setIsLoading(true);
    try {
      const auspiciousDates = await fetchAuspiciousDates(formData);
      setResults(auspiciousDates);
    } catch (error) {
      console.error('Error fetching auspicious dates:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData(defaultFormData);
    setResults([]);
  };

  return (
    <JourneyContext.Provider value={{ 
      formData, 
      results, 
      isLoading, 
      updateFormData, 
      submitForm,
      resetForm
    }}>
      {children}
    </JourneyContext.Provider>
  );
};

export const useJourney = (): JourneyContextType => {
  const context = useContext(JourneyContext);
  if (context === undefined) {
    throw new Error('useJourney must be used within a JourneyProvider');
  }
  return context;
};