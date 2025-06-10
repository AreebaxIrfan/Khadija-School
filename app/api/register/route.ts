import { NextResponse } from 'next/server';
import { sanityClient } from '@/sanity/lib/client';
import { RegistrationFormData } from '@/sanity/types/registration';
import { ZodError, z } from 'zod';

const registrationSchema = z.object({
  firstName: z.string().min(1, 'Student first name is required'),
  lastName: z.string().min(1, 'Student last name is required'),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)'),
  gender: z.enum(['male', 'female', 'other', 'prefer-not-to-say'], {
    errorMap: () => ({ message: 'Invalid gender selection' }),
  }),
  grade: z.string().min(1, 'Grade level is required'),
  previousSchool: z.string().optional(),
  studentCnic: z
    .string()
    .regex(/^\d{5}-\d{7}-\d{1}$/, 'Student CNIC must be in format 12345-1234567-1')
    .optional(),
  parentFirstName: z.string().min(1, 'Parent/Guardian first name is required'),
  parentLastName: z.string().min(1, 'Parent/Guardian last name is required'),
  relationship: z.enum(['mother', 'father', 'guardian', 'grandparent', 'other'], {
    errorMap: () => ({ message: 'Invalid relationship selection' }),
  }),
  parentEmail: z.string().email('Invalid email address'),
  parentPhone: z.string().min(1, 'Phone number is required'),
  parentCnic: z
    .string()
    .regex(/^\d{5}-\d{7}-\d{1}$/, 'Parent CNIC must be in format 12345-1234567-1'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  zipCode: z.string().min(1, 'ZIP code is required'),
  medicalConditions: z.string().optional(),
  specialNeeds: z.string().optional(),
  interests: z.string().optional(),
  termsAccepted: z
    .string()
    .transform((val) => val === 'true')
    .refine((val) => val === true, 'You must accept the terms'),
  privacyAccepted: z
    .string()
    .transform((val) => val === 'true')
    .refine((val) => val === true, 'You must accept the privacy policy'),
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    console.log('Received FormData keys:', Array.from(formData.keys()));

    const data: Record<string, any> = {};
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('file-')) continue;
      data[key] = value;
    }
    console.log('Parsed form fields:', data);

    const validatedData = registrationSchema.parse(data);
    const {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      grade,
      previousSchool,
      studentCnic,
      parentFirstName,
      parentLastName,
      relationship,
      parentEmail,
      parentPhone,
      parentCnic,
      address,
      city,
      zipCode,
      medicalConditions,
      specialNeeds,
      interests,
      termsAccepted,
      privacyAccepted,
    } = validatedData;

    const documents = [];
    const fileEntries = Array.from(formData.entries()).filter(([key]) => key.startsWith('file-'));
    for (const [key, file] of fileEntries) {
      if (file instanceof File) {
        if (file.size > 10 * 1024 * 1024) {
          throw new Error(`File ${file.name} exceeds 10MB limit`);
        }
        console.log(`Uploading file: ${file.name}, size: ${file.size} bytes`);
        const asset = await sanityClient.assets.upload('file', file, {
          filename: file.name,
        });
        documents.push({
          _type: 'file',
          asset: { _ref: asset._id },
        });
      }
    }
    console.log('Uploaded documents:', documents);

    const result = await sanityClient.create({
      _type: 'studentRegistration',
      firstName,
      lastName,
      dateOfBirth,
      gender,
      grade,
      previousSchool,
      studentCnic,
      parentFirstName,
      parentLastName,
      relationship,
      parentEmail,
      parentPhone,
      parentCnic,
      address,
      city,
      zipCode,
      medicalConditions,
      specialNeeds,
      interests,
      termsAccepted,
      privacyAccepted,
      documents,
      status: 'pending',
      submittedAt: new Date().toISOString(),
    });

    console.log('Sanity create result:', result);

    return NextResponse.json({
      message: 'Registration submitted successfully',
      result,
    });
  } catch (error) {
    console.error('Error in /api/register:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          message: 'Validation error',
          errors: error.errors.map((e) => ({
            path: e.path.join('.'),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        message: 'Error submitting registration',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}