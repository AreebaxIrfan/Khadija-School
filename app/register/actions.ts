"use server"

import { redirect } from "next/navigation"

interface RegistrationData {
  // Student Information
  firstName: string
  lastName: string
  dateOfBirth: string
  gender: string
  grade: string
  previousSchool: string
  studentCnic: string
  // Parent/Guardian Information
  parentFirstName: string
  parentLastName: string
  relationship: string
  parentEmail: string
  parentPhone: string
  parentCnic: string
  address: string
  city: string
  zipCode: string

  // Additional Information
  medicalConditions: string
  specialNeeds: string
  interests: string

  // Agreements
  termsAccepted: boolean
  privacyAccepted: boolean
}

export async function submitRegistration(formData: FormData) {
  // Extract form data
  const registrationData: RegistrationData = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    dateOfBirth: formData.get("dateOfBirth") as string,
    gender: formData.get("gender") as string,
    grade: formData.get("grade") as string,
    previousSchool: formData.get("previousSchool") as string,
    studentCnic: formData.get("studentCnic") as string,
    parentFirstName: formData.get("parentFirstName") as string,
    parentLastName: formData.get("parentLastName") as string,
    relationship: formData.get("relationship") as string,
    parentEmail: formData.get("parentEmail") as string,
    parentPhone: formData.get("parentPhone") as string,
    parentCnic: formData.get("parentCnic") as string,
    address: formData.get("address") as string,
    city: formData.get("city") as string,
    zipCode: formData.get("zipCode") as string,
    medicalConditions: formData.get("medicalConditions") as string,
    specialNeeds: formData.get("specialNeeds") as string,
    interests: formData.get("interests") as string,
    termsAccepted: formData.get("termsAccepted") === "on",
    privacyAccepted: formData.get("privacyAccepted") === "on",
  }

  try {
    // Here you would typically save to a database
    // For now, we'll simulate the process

    // Option 1: Save to a database (recommended)
    // await db.registrations.create({ data: registrationData })

    // Option 2: Send email notification
    // await sendEmailNotification(registrationData)

    // Option 3: Save to a file (temporary solution)
    // await saveToFile(registrationData)

    // Option 4: Send to external API
    // await sendToExternalAPI(registrationData)

    console.log("Registration submitted:", registrationData)

    // Generate a unique application ID
    const applicationId = `APP-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Redirect to success page with application ID
    redirect(`/register/success?id=${applicationId}`)
  } catch (error) {
    console.error("Registration submission failed:", error)
    throw new Error("Failed to submit registration. Please try again.")
  }
}

// Helper function to send email notification (example)
async function sendEmailNotification(data: RegistrationData) {
  // This would integrate with an email service like:
  // - Resend
  // - SendGrid
  // - Nodemailer
  // - AWS SES

  const emailContent = `
    New Student Registration:
    
    Student: ${data.firstName} ${data.lastName}
    Grade: ${data.grade}
    Parent: ${data.parentFirstName} ${data.parentLastName}
    Email: ${data.parentEmail}
    Phone: ${data.parentPhone}
    
    Application submitted at: ${new Date().toISOString()}
  `

  // Send email to school administration
  console.log("Email notification sent:", emailContent)
}
