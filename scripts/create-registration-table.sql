-- Create database table for student registrations
CREATE TABLE IF NOT EXISTS student_registrations (
    id SERIAL PRIMARY KEY,
    application_id VARCHAR(50) UNIQUE NOT NULL,
    
    -- Student Information
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    date_of_birth DATE NOT NULL,
    gender VARCHAR(20),
    grade VARCHAR(20) NOT NULL,
    previous_school VARCHAR(200),
    
    -- Parent/Guardian Information
    parent_first_name VARCHAR(100) NOT NULL,
    parent_last_name VARCHAR(100) NOT NULL,
    relationship VARCHAR(50) NOT NULL,
    parent_email VARCHAR(150) NOT NULL,
    parent_phone VARCHAR(20) NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    zip_code VARCHAR(20) NOT NULL,
    
    -- Additional Information
    medical_conditions TEXT,
    special_needs TEXT,
    interests TEXT,
    
    -- Agreements
    terms_accepted BOOLEAN DEFAULT FALSE,
    privacy_accepted BOOLEAN DEFAULT FALSE,
    
    -- Metadata
    status VARCHAR(20) DEFAULT 'pending',
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reviewed_at TIMESTAMP,
    reviewed_by VARCHAR(100),
    notes TEXT,
    
    -- Indexes for better performance
    INDEX idx_application_id (application_id),
    INDEX idx_parent_email (parent_email),
    INDEX idx_status (status),
    INDEX idx_submitted_at (submitted_at)
);

-- Insert sample data for testing
INSERT INTO student_registrations (
    application_id, first_name, last_name, date_of_birth, gender, grade,
    parent_first_name, parent_last_name, relationship, parent_email, parent_phone,
    address, city, zip_code, terms_accepted, privacy_accepted
) VALUES (
    'APP-SAMPLE-001',
    'John', 'Doe', '2010-05-15', 'male', 'grade-8',
    'Jane', 'Doe', 'mother', 'jane.doe@email.com', '+1-555-0123',
    '123 Main Street', 'Anytown', '12345',
    TRUE, TRUE
);

-- Create view for easy reporting
CREATE VIEW registration_summary AS
SELECT 
    application_id,
    CONCAT(first_name, ' ', last_name) as student_name,
    grade,
    CONCAT(parent_first_name, ' ', parent_last_name) as parent_name,
    parent_email,
    parent_phone,
    status,
    submitted_at
FROM student_registrations
ORDER BY submitted_at DESC;
