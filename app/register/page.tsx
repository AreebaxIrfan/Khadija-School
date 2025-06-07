"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { BookOpen, User, FileText, CheckCircle, Upload } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/layout/footer"

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Student Information
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    grade: "",
    previousSchool: "",

    // Parent/Guardian Information
    parentFirstName: "",
    parentLastName: "",
    relationship: "",
    parentEmail: "",
    parentPhone: "",
    address: "",
    city: "",
    zipCode: "",

    // Additional Information
    medicalConditions: "",
    specialNeeds: "",
    interests: "",

    // Agreements
    termsAccepted: false,
    privacyAccepted: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Application submitted successfully! We will contact you soon.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-green-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Kadija Schooling System</h1>
                <p className="text-xs text-gray-600">Excellence in Education</p>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                About
              </Link>
              <Link href="/campus" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Campus
              </Link>
              <Link href="/register" className="text-green-600 font-medium">
                Register
              </Link>
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-700 mb-4">Student Registration</Badge>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Join Our School Community</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Begin your educational journey with us. Complete the registration form below to apply for admission.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Indicator */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center justify-center space-x-4">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                  step <= currentStep
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
              </div>
              {step < 4 && (
                <div
                  className={`w-16 h-1 mx-2 ${
                    step < currentStep ? "bg-gradient-to-r from-green-500 to-emerald-500" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Step {currentStep} of 4:{" "}
              {currentStep === 1
                ? "Student Information"
                : currentStep === 2
                  ? "Parent/Guardian Information"
                  : currentStep === 3
                    ? "Additional Information"
                    : "Review & Submit"}
            </p>
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">Student Registration Form</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Student Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 mb-6">
                      <User className="w-6 h-6 text-green-600" />
                      <h3 className="text-2xl font-bold text-gray-800">Student Information</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder="Enter first name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          placeholder="Enter last name"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender *</Label>
                        <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="grade">Grade Level *</Label>
                        <Select value={formData.grade} onValueChange={(value) => handleInputChange("grade", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select grade level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kindergarten">Kindergarten</SelectItem>
                            <SelectItem value="grade-1">Grade 1</SelectItem>
                            <SelectItem value="grade-2">Grade 2</SelectItem>
                            <SelectItem value="grade-3">Grade 3</SelectItem>
                            <SelectItem value="grade-4">Grade 4</SelectItem>
                            <SelectItem value="grade-5">Grade 5</SelectItem>
                            <SelectItem value="grade-6">Grade 6</SelectItem>
                            <SelectItem value="grade-7">Grade 7</SelectItem>
                            <SelectItem value="grade-8">Grade 8</SelectItem>
                            <SelectItem value="grade-9">Grade 9</SelectItem>
                            <SelectItem value="grade-10">Grade 10</SelectItem>
                            <SelectItem value="grade-11">Grade 11</SelectItem>
                            <SelectItem value="grade-12">Grade 12</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="previousSchool">Previous School</Label>
                        <Input
                          id="previousSchool"
                          value={formData.previousSchool}
                          onChange={(e) => handleInputChange("previousSchool", e.target.value)}
                          placeholder="Enter previous school name"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Parent/Guardian Information */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 mb-6">
                      <User className="w-6 h-6 text-green-600" />
                      <h3 className="text-2xl font-bold text-gray-800">Parent/Guardian Information</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="parentFirstName">Parent/Guardian First Name *</Label>
                        <Input
                          id="parentFirstName"
                          value={formData.parentFirstName}
                          onChange={(e) => handleInputChange("parentFirstName", e.target.value)}
                          placeholder="Enter first name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="parentLastName">Parent/Guardian Last Name *</Label>
                        <Input
                          id="parentLastName"
                          value={formData.parentLastName}
                          onChange={(e) => handleInputChange("parentLastName", e.target.value)}
                          placeholder="Enter last name"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="relationship">Relationship to Student *</Label>
                      <Select
                        value={formData.relationship}
                        onValueChange={(value) => handleInputChange("relationship", value)}
                      >
                        <SelectTrigger>
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
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="parentEmail">Email Address *</Label>
                        <Input
                          id="parentEmail"
                          type="email"
                          value={formData.parentEmail}
                          onChange={(e) => handleInputChange("parentEmail", e.target.value)}
                          placeholder="Enter email address"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="parentPhone">Phone Number *</Label>
                        <Input
                          id="parentPhone"
                          type="tel"
                          value={formData.parentPhone}
                          onChange={(e) => handleInputChange("parentPhone", e.target.value)}
                          placeholder="Enter phone number"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Home Address *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        placeholder="Enter street address"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                          placeholder="Enter city"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">ZIP Code *</Label>
                        <Input
                          id="zipCode"
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange("zipCode", e.target.value)}
                          placeholder="Enter ZIP code"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Additional Information */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 mb-6">
                      <FileText className="w-6 h-6 text-purple-600" />
                      <h3 className="text-2xl font-bold text-gray-800">Additional Information</h3>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="medicalConditions">Medical Conditions or Allergies</Label>
                      <Textarea
                        id="medicalConditions"
                        value={formData.medicalConditions}
                        onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
                        placeholder="Please list any medical conditions, allergies, or medications"
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialNeeds">Special Educational Needs</Label>
                      <Textarea
                        id="specialNeeds"
                        value={formData.specialNeeds}
                        onChange={(e) => handleInputChange("specialNeeds", e.target.value)}
                        placeholder="Please describe any special educational needs or accommodations required"
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interests">Student Interests & Hobbies</Label>
                      <Textarea
                        id="interests"
                        value={formData.interests}
                        onChange={(e) => handleInputChange("interests", e.target.value)}
                        placeholder="Tell us about the student's interests, hobbies, and extracurricular activities"
                        rows={3}
                      />
                    </div>

                    <div className="space-y-4">
                      <Label>Document Upload</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">Upload required documents</p>
                        <p className="text-sm text-gray-500 mb-4">
                          Birth certificate, previous school records, immunization records
                        </p>
                        <Button type="button" variant="outline">
                          Choose Files
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Review & Submit */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 mb-6">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <h3 className="text-2xl font-bold text-gray-800">Review & Submit</h3>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                      <h4 className="font-semibold text-gray-800">Application Summary</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p>
                            <span className="font-medium">Student:</span> {formData.firstName} {formData.lastName}
                          </p>
                          <p>
                            <span className="font-medium">Grade:</span> {formData.grade}
                          </p>
                          <p>
                            <span className="font-medium">Date of Birth:</span> {formData.dateOfBirth}
                          </p>
                        </div>
                        <div>
                          <p>
                            <span className="font-medium">Parent/Guardian:</span> {formData.parentFirstName}{" "}
                            {formData.parentLastName}
                          </p>
                          <p>
                            <span className="font-medium">Email:</span> {formData.parentEmail}
                          </p>
                          <p>
                            <span className="font-medium">Phone:</span> {formData.parentPhone}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.termsAccepted}
                          onCheckedChange={(checked) => handleInputChange("termsAccepted", checked as boolean)}
                        />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to the{" "}
                          <Link href="#" className="text-green-600 hover:underline">
                            Terms and Conditions
                          </Link>{" "}
                          *
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="privacy"
                          checked={formData.privacyAccepted}
                          onCheckedChange={(checked) => handleInputChange("privacyAccepted", checked as boolean)}
                        />
                        <Label htmlFor="privacy" className="text-sm">
                          I agree to the{" "}
                          <Link href="#" className="text-green-600 hover:underline">
                            Privacy Policy
                          </Link>{" "}
                          *
                        </Label>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-sm text-blue-800">
                        <strong>Next Steps:</strong> After submitting your application, you will receive a confirmation
                        email. Our admissions team will review your application and contact you within 3-5 business days
                        to schedule an interview and campus visit.
                      </p>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="px-8"
                  >
                    Previous
                  </Button>

                  {currentStep < 4 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={!formData.termsAccepted || !formData.privacyAccepted}
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Submit Application
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
