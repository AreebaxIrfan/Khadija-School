export default {
    name: 'studentRegistration',
    title: 'Student Registration',
    type: 'document',
    fields: [
      // Student Information
      {
        name: 'firstName',
        title: 'Student First Name',
        type: 'string',
        validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error('Student first name is required'),
      },
      {
        name: 'lastName',
        title: 'Student Last Name',
        type: 'string',
        validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error('Student last name is required'),
      },
      {
        name: 'dateOfBirth',
        title: 'Date of Birth',
        type: 'date',
        options: {
          dateFormat: 'YYYY-MM-DD',
        },
        validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error('Date of birth is required'),
      },
      {
        name: 'gender',
        title: 'Gender',
        type: 'string',
        options: {
          list: [
            { title: 'Male', value: 'male' },
            { title: 'Female', value: 'female' },
            { title: 'Other', value: 'other' },
            { title: 'Prefer not to say', value: 'prefer-not-to-say' },
          ],
        },
        validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error('Gender is required'),
      },
      {
        name: 'grade',
        title: 'Grade Level',
        type: 'string',
        options: {
          list: [
            { title: 'Kindergarten', value: 'kindergarten' },
            { title: 'Grade 1', value: 'grade-1' },
            { title: 'Grade 2', value: 'grade-2' },
            { title: 'Grade 3', value: 'grade-3' },
            { title: 'Grade 4', value: 'grade-4' },
            { title: 'Grade 5', value: 'grade-5' },
            { title: 'Grade 6', value: 'grade-6' },
            { title: 'Grade 7', value: 'grade-7' },
            { title: 'Grade 8', value: 'grade-8' },
            { title: 'Grade 9', value: 'grade-9' },
            { title: 'Grade 10', value: 'grade-10' },
            { title: 'Grade 11', value: 'grade-11' },
            { title: 'Grade 12', value: 'grade-12' },
          ],
        },
        validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error('Grade level is required'),
      },
      {
        name: 'previousSchool',
        title: 'Previous School',
        type: 'string',
      },
      {
        name: 'studentCnic',
        title: 'Student CNIC Number',
        type: 'string',
        validation: (Rule: { regex: (arg0: RegExp, arg1: { name: string; message: string; }) => { (): any; new(): any; optional: { (): any; new(): any; }; }; }) =>
          Rule.regex(/^\d{5}-\d{7}-\d{1}$/, {
            name: 'cnicFormat',
            message: 'Must be in format 12345-1234567-1',
          }).optional(),
      },
      // Parent/Guardian Information
      {
        name: 'parentFirstName',
        title: 'Parent/Guardian First Name',
        type: 'string',
        validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error('Parent/Guardian first name is required'),
      },
      {
        name: 'parentLastName',
        title: 'Parent/Guardian Last Name',
        type: 'string',
        validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error('Parent/Guardian last name is required'),
      },
      {
        name: 'relationship',
        title: 'Relationship to Student',
        type: 'string',
        options: {
          list: [
            { title: 'Mother', value: 'mother' },
            { title: 'Father', value: 'father' },
            { title: 'Legal Guardian', value: 'guardian' },
            { title: 'Grandparent', value: 'grandparent' },
            { title: 'Other', value: 'other' },
          ],
        },
        validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error('Relationship is required'),
      },
      {
        name: 'parentEmail',
        title: 'Parent/Guardian Email',
        type: 'string',
        validation: (Rule: { required: () => { (): any; new(): any; email: { (): { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; new(): any; }; }; }) => Rule.required().email().error('A valid email is required'),
      },
      {
        name: 'parentPhone',
        title: 'Parent/Guardian Phone',
        type: 'string',
        validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error('Phone number is required'),
      },
      {
        name: 'parentCnic',
        title: 'Parent/Guardian CNIC Number',
        type: 'string',
        validation: (Rule: { required: () => { (): any; new(): any; regex: { (arg0: RegExp, arg1: { name: string; message: string; }): { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; new(): any; }; }; }) =>
          Rule.required()
            .regex(/^\d{5}-\d{7}-\d{1}$/, {
              name: 'cnicFormat',
              message: 'Must be in format 12345-1234567-1',
            })
            .error('Parent/Guardian CNIC is required'),
      },
      {
        name: 'address',
        title: 'Home Address',
        type: 'string',
        validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error('Address is required'),
      },
      {
        name: 'city',
        title: 'City',
        type: 'string',
        validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error('City is required'),
      },
      {
        name: 'zipCode',
        title: 'ZIP Code',
        type: 'string',
        validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error('ZIP code is required'),
      },
      // Additional Information
      {
        name: 'medicalConditions',
        title: 'Medical Conditions or Allergies',
        type: 'text',
      },
      {
        name: 'specialNeeds',
        title: 'Special Educational Needs',
        type: 'text',
      },
      {
        name: 'interests',
        title: 'Student Interests & Hobbies',
        type: 'text',
      },
      // Document Uploads
      {
        name: 'documents',
        title: 'Uploaded Documents',
        type: 'array',
        of: [{ type: 'file' }],
        description: 'Birth certificate, previous school records, immunization records',
      },
      // Agreements
      {
        name: 'termsAccepted',
        title: 'Terms and Conditions Accepted',
        type: 'boolean',
        validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error('You must accept the terms and conditions'),
      },
      {
        name: 'privacyAccepted',
        title: 'Privacy Policy Accepted',
        type: 'boolean',
        validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error('You must accept the privacy policy'),
      },
      // Admin Fields
      {
        name: 'status',
        title: 'Application Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Approved', value: 'approved' },
            { title: 'Rejected', value: 'rejected' },
            { title: 'Interview Scheduled', value: 'interview-scheduled' },
          ],
        },
        initialValue: 'pending',
        validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error('Status is required'),
      },
      {
        name: 'submittedAt',
        title: 'Submission Date',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DD',
          timeFormat: 'HH:mm',
        },
        readOnly: true,
      },
      {
        name: 'adminComments',
        title: 'Admin Comments',
        type: 'text',
      },
    ],
  };