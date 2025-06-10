export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other' | 'prefer-not-to-say';
  grade: string;
  previousSchool: string;
  studentCnic: string;
  parentFirstName: string;
  parentLastName: string;
  relationship: 'mother' | 'father' | 'guardian' | 'grandparent' | 'other';
  parentEmail: string;
  parentPhone: string;
  parentCnic: string;
  address: string;
  city: string;
  zipCode: string;
  medicalConditions: string;
  specialNeeds: string;
  interests: string;
  termsAccepted: boolean;
  privacyAccepted: boolean;
}
  
  export interface Registration extends RegistrationFormData {
    _id: string;
    status: 'pending' | 'approved' | 'rejected' | 'interview-scheduled';
    submittedAt: string;
    adminComments?: string;
    documents?: { _key: string; asset: { _ref: string } }[];
  }