'use client';

import type React from 'react';
import { useState, FormEvent, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { BookOpen, User, FileText, CheckCircle, Upload } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/components/layout/footer';
import { RegistrationFormData } from '@/sanity/types/registration';

const initialFormData: RegistrationFormData = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  grade: '',
  previousSchool: '',
  studentCnic: '',
  parentFirstName: '',
  parentLastName: '',
  parentEmail: '',
  parentPhone: '',
  parentCnic: '',
  address: '',
  city: '',
  zipCode: '',
  medicalConditions: '',
  specialNeeds: '',
  interests: '',
  termsAccepted: false,
  privacyAccepted: false,
  gender: 'male',
  relationship: 'other'
};

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<RegistrationFormData>(initialFormData);
  const [files, setFiles] = useState<FileList | null>(null);
  const [message, setMessage] = useState<string>('');
  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationFormData, string>>>({});

  const validateStep = (): boolean => {
    const stepErrors: Partial<Record<keyof RegistrationFormData, string>> = {};
    if (currentStep === 1) {
      if (!formData.firstName) stepErrors.firstName = 'First name is required';
      if (!formData.lastName) stepErrors.lastName = 'Last name is required';
      if (!formData.dateOfBirth) stepErrors.dateOfBirth = 'Date of birth is required';
      if (!formData.gender) stepErrors.gender = 'Gender is required';
      if (!formData.grade) stepErrors.grade = 'Grade level is required';
      if (formData.studentCnic && !/^\d{5}-\d{7}-\d{1}$/.test(formData.studentCnic)) {
        stepErrors.studentCnic = 'Invalid CNIC format (12345-1234567-1)';
      }
    } else if (currentStep === 2) {
      if (!formData.parentFirstName) stepErrors.parentFirstName = 'First name is required';
      if (!formData.parentLastName) stepErrors.parentLastName = 'Last name is required';
      if (!formData.relationship) stepErrors.relationship = 'Relationship is required';
      if (!formData.parentEmail) stepErrors.parentEmail = 'Email is required';
      if (!formData.parentPhone) stepErrors.parentPhone = 'Phone is required';
      if (!formData.parentCnic) stepErrors.parentCnic = 'CNIC is required';
      if (!/^\d{5}-\d{7}-\d{1}$/.test(formData.parentCnic)) {
        stepErrors.parentCnic = 'Invalid CNIC format (12345-1234567-1)';
      }
      if (!formData.address) stepErrors.address = 'Address is required';
      if (!formData.city) stepErrors.city = 'City is required';
      if (!formData.zipCode) stepErrors.zipCode = 'ZIP code is required';
    } else if (currentStep === 4) {
      if (!formData.termsAccepted) stepErrors.termsAccepted = 'You must accept the terms';
      if (!formData.privacyAccepted) stepErrors.privacyAccepted = 'You must accept the privacy policy';
    }
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleInputChange = (field: keyof RegistrationFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const nextStep = () => {
    if (validateStep() && currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;
    setMessage('');
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value.toString());
      });
      if (files) {
        Array.from(files).forEach((file, index) => {
          formDataToSend.append(`file-${index}`, file);
        });
      }

      const response = await fetch('/api/register', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Submission failed');
      }

      setMessage('Application submitted successfully! We will contact you soon.');
      setFormData(initialFormData);
      setFiles(null);
      setCurrentStep(1);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error submitting registration. Please try again.';
      setMessage(errorMessage);
      console.error('Form submission error:', error);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex justify-center gap-4 mb-6">
      {[1, 2, 3, 4].map((step) => (
        <Badge
          key={step}
          variant={currentStep === step ? 'default' : 'outline'}
          className="px-3 py-1"
        >
          Step {step}
        </Badge>
      ))}
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <BookOpen className="h-5 w-5" /> Student Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  required
                />
                {errors.firstName && <p className="text-red-600 text-sm">{errors.firstName}</p>}
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  required
                />
                {errors.lastName && <p className="text-red-600 text-sm">{errors.lastName}</p>}
              </div>
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  required
                />
                {errors.dateOfBirth && <p className="text-red-600 text-sm">{errors.dateOfBirth}</p>}
              </div>
              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select
                  value={formData.gender}
                  onValueChange={(value) => handleInputChange('gender', value)}
                >
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
                {errors.gender && <p className="text-red-600 text-sm">{errors.gender}</p>}
              </div>
              <div>
                <Label htmlFor="grade">Grade Level</Label>
                <Select
                  value={formData.grade}
                  onValueChange={(value) => handleInputChange('grade', value)}
                >
                  <SelectTrigger id="grade">
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      'kindergarten',
                      'grade-1',
                      'grade-2',
                      'grade-3',
                      'grade-4',
                      'grade-5',
                      'grade-6',
                      'grade-7',
                      'grade-8',
                      'grade-9',
                      'grade-10',
                      'grade-11',
                      'grade-12',
                    ].map((grade) => (
                      <SelectItem key={grade} value={grade}>
                        {grade.replace('grade-', 'Grade ').replace('kindergarten', 'Kindergarten')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.grade && <p className="text-red-600 text-sm">{errors.grade}</p>}
              </div>
              <div>
                <Label htmlFor="previousSchool">Previous School (Optional)</Label>
                <Input
                  id="previousSchool"
                  value={formData.previousSchool}
                  onChange={(e) => handleInputChange('previousSchool', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="studentCnic">Student CNIC (Optional)</Label>
                <Input
                  id="studentCnic"
                  value={formData.studentCnic}
                  onChange={(e) => handleInputChange('studentCnic', e.target.value)}
                  placeholder="12345-1234567-1"
                />
                {errors.studentCnic && <p className="text-red-600 text-sm">{errors.studentCnic}</p>}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <User className="h-5 w-5" /> Parent/Guardian Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="parentFirstName">First Name</Label>
                <Input
                  id="parentFirstName"
                  value={formData.parentFirstName}
                  onChange={(e) => handleInputChange('parentFirstName', e.target.value)}
                  required
                />
                {errors.parentFirstName && <p className="text-red-600 text-sm">{errors.parentFirstName}</p>}
              </div>
              <div>
                <Label htmlFor="parentLastName">Last Name</Label>
                <Input
                  id="parentLastName"
                  value={formData.parentLastName}
                  onChange={(e) => handleInputChange('parentLastName', e.target.value)}
                  required
                />
                {errors.parentLastName && <p className="text-red-600 text-sm">{errors.parentLastName}</p>}
              </div>
              <div>
                <Label htmlFor="relationship">Relationship to Student</Label>
                <Select
                  value={formData.relationship}
                  onValueChange={(value) => handleInputChange('relationship', value)}
                >
                  <SelectTrigger id="relationship">
                    <SelectValue placeholder="Select relationship" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mother">Mother</SelectItem>
                    <SelectItem value="father">Father</SelectItem>
                    <SelectItem value="guardian">Legal Guardian</SelectItem>
                    <SelectItem value="grandparent">Grandparent</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.relationship && <p className="text-red-600 text-sm">{errors.relationship}</p>}
              </div>
              <div>
                <Label htmlFor="parentEmail">Email</Label>
                <Input
                  id="parentEmail"
                  type="email"
                  value={formData.parentEmail}
                  onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                  required
                />
                {errors.parentEmail && <p className="text-red-600 text-sm">{errors.parentEmail}</p>}
              </div>
              <div>
                <Label htmlFor="parentPhone">Phone</Label>
                <Input
                  id="parentPhone"
                  type="tel"
                  value={formData.parentPhone}
                  onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                  required
                />
                {errors.parentPhone && <p className="text-red-600 text-sm">{errors.parentPhone}</p>}
              </div>
              <div>
                <Label htmlFor="parentCnic">CNIC Number</Label>
                <Input
                  id="parentCnic"
                  value={formData.parentCnic}
                  onChange={(e) => handleInputChange('parentCnic', e.target.value)}
                  placeholder="12345-1234567-1"
                  required
                />
                {errors.parentCnic && <p className="text-red-600 text-sm">{errors.parentCnic}</p>}
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="address">Home Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  required
                />
                {errors.address && <p className="text-red-600 text-sm">{errors.address}</p>}
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  required
                />
                {errors.city && <p className="text-red-600 text-sm">{errors.city}</p>}
              </div>
              <div>
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange('zipCode', e.target.value)}
                  required
                />
                {errors.zipCode && <p className="text-red-600 text-sm">{errors.zipCode}</p>}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <FileText className="h-5 w-5" /> Additional Information
            </h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="medicalConditions">Medical Conditions or Allergies (Optional)</Label>
                <Textarea
                  id="medicalConditions"
                  value={formData.medicalConditions}
                  onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="specialNeeds">Special Educational Needs (Optional)</Label>
                <Textarea
                  id="specialNeeds"
                  value={formData.specialNeeds}
                  onChange={(e) => handleInputChange('specialNeeds', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="interests">Student Interests & Hobbies (Optional)</Label>
                <Textarea
                  id="interests"
                  value={formData.interests}
                  onChange={(e) => handleInputChange('interests', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="documents">Upload Documents (Optional)</Label>
                <Input
                  id="documents"
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.png"
                  onChange={handleFileChange}
                  className="mx-auto max-w-xs"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Accepted formats: PDF, DOC, DOCX, JPG, PNG. Max 10MB each.
                </p>
                {files && (
                  <ul className="text-sm text-muted-foreground mt-2">
                    {Array.from(files).map((file) => (
                      <li key={file.name}>{file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <CheckCircle className="h-5 w-5" /> Agreements
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="termsAccepted"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => handleInputChange('termsAccepted', checked)}
                />
                <Label htmlFor="termsAccepted">
                  I accept the{' '}
                  <Link href="/terms" className="text-primary underline">
                    Terms and Conditions
                  </Link>
                </Label>
              </div>
              {errors.termsAccepted && <p className="text-red-600 text-sm">{errors.termsAccepted}</p>}
              <div className="flex items-center gap-2">
                <Checkbox
                  id="privacyAccepted"
                  checked={formData.privacyAccepted}
                  onCheckedChange={(checked) => handleInputChange('privacyAccepted', checked)}
                />
                <Label htmlFor="privacyAccepted">
                  I accept the{' '}
                  <Link href="/privacy" className="text-primary underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
              {errors.privacyAccepted && <p className="text-red-600 text-sm">{errors.privacyAccepted}</p>}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Student Registration Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            {renderStepIndicator()}
            <form onSubmit={handleSubmit} className="space-y-6">
              {renderStepContent()}
              {message && (
                <p
                  className={`text-sm ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}
                >
                  {message}
                </p>
              )}
              <div className="flex justify-between gap-4">
                {currentStep > 1 && (
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Previous
                  </Button>
                )}
                {currentStep < 4 ? (
                  <Button type="button" onClick={nextStep} className="ml-auto">
                    Next
                  </Button>
                ) : (
                  <Button type="submit" className="ml-auto">
                    Submit Application
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}