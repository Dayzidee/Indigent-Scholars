# Database Schema & Architecture

This document defines the relational PostgreSQL schema and Row Level Security (RLS) rules for the "Indigent-Scholars" project, built to run on Supabase.

## Tables

### 1. Profiles
Extends the native Supabase `auth.users` tables.
- `id`: `uuid` (Primary Key, references `auth.users.id`)
- `email`: `text` (Unique, Not Null)
- `full_name`: `text`
- `role`: `text` (enum: 'student', 'sponsor', 'admin')

### 2. Student_Applications
Stores information submitted by students. 
- `id`: `uuid` (Primary Key)
- `student_id`: `uuid` (References `Profiles.id`)
- `school_info`: `jsonb` (e.g., institution name, program, GPA)
- `funding_needs`: `numeric`
- `document_urls`: `text[]` (Array of URLs linking to Supabase Storage)
- `status`: `text` (enum: 'pending', 'verified', 'rejected'; default: 'pending')
- `created_at`: `timestamp with time zone`
- `updated_at`: `timestamp with time zone`

### 3. Sponsors
Stores verified information about individual or organizational sponsors.
- `id`: `uuid` (Primary Key, References `Profiles.id`)
- `org_name`: `text` (Optional, if it's an organization)
- `phone`: `text` (Optional)
- `total_funded`: `numeric` (default: 0)
- `is_verified`: `boolean` (default: false)
- `created_at`: `timestamp with time zone`
- `updated_at`: `timestamp with time zone`

### 4. Funding_Matches
Tracks commitments/donations from sponsors to students.
- `id`: `uuid` (Primary Key)
- `sponsor_id`: `uuid` (References `Sponsors.id`)
- `student_app_id`: `uuid` (References `Student_Applications.id`)
- `amount`: `numeric`
- `status`: `text` (enum: 'pledged', 'fulfilled', 'cancelled'; default: 'pledged')
- `created_at`: `timestamp with time zone`
- `updated_at`: `timestamp with time zone`

---

## Row Level Security (RLS) Rules

Security relies on `auth.uid()` mapped to the `Profiles.id` to restrict access implicitly. 

### 1. Profiles
- **SELECT**: Users can read their own profile.
- **UPDATE**: Users can update their own profile fields (e.g., full_name).
- **INSERT**: Triggered via Supabase Auth Webhook on sign-up, securely created by the service role.

### 2. Student_Applications
- **SELECT**:
  - `role == 'student'`: Can only read applications where `student_id == auth.uid()`.
  - `role == 'sponsor'`: Can read **all** applications where `status == 'verified'`.
- **INSERT**:
  - `role == 'student'`: Can insert if `student_id == auth.uid()`.
- **UPDATE**:
  - `role == 'student'`: Can update own application if `status` is 'pending'.

### 3. Sponsors
- **SELECT**:
  - Publicly accessible, OR restricted so active verified users can query (depending on privacy requirements). Assuming sponsors can read their own data, and verified students might see who funded them.
- **INSERT/UPDATE**:
  - `role == 'sponsor'`: Can Insert/Update where `id == auth.uid()`. (Wait, verification flags should only be updatable by an 'admin' role).

### 4. Funding_Matches
- **SELECT**:
  - `role == 'sponsor'`: Can read matches where `sponsor_id == auth.uid()`.
  - `role == 'student'`: Can read matches where `student_app_id` belongs to an application owned by `auth.uid()`.
- **INSERT**:
  - `role == 'sponsor'`: Can ONLY insert where `sponsor_id == auth.uid()` and the target student application is `verified`.
- **UPDATE**:
  - Similar constraints to restrict arbitrary manipulation.
