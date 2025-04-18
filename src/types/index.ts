export interface JourneyFormData {
  fullName: string;
  currentLocation: string;
  destination: string;
  dateOfBirth: Date | null;
  startDate: Date | null;
  endDate: Date | null;
  purpose?: string;
}

export interface AuspiciousDate {
  date: string;
  day: string;
  tithi: string;
  nakshatra: string;
  reason: string;
  score: number;
}

export interface JourneyContextType {
  formData: JourneyFormData;
  results: AuspiciousDate[];
  isLoading: boolean;
  updateFormData: (data: Partial<JourneyFormData>) => void;
  submitForm: () => Promise<void>;
  resetForm: () => void;
}