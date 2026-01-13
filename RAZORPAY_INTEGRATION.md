# Razorpay Integration for fwg-online-combo

## Overview
This document describes the implementation of Razorpay integration for the fwg-online-combo project. The implementation includes a modal form that opens when users click the "Reserve Your Seat Now" button, collecting user details and processing a ₹2,499 payment.

## Components Created

### 1. API Configuration
- `src/config/apiConfig.js` - Configuration for API endpoints and Razorpay merchant ID
- `src/config/api.js` - Axios instance for making API calls

### 2. UI Components
- `src/components/common/Modal.jsx` - Reusable modal component
- `src/components/common/Input.jsx` - Input field component
- `src/components/common/AddressForm.jsx` - Address form component with validation
- `src/components/common/BookingModal.jsx` - Main booking modal with form and payment processing
- Updated `src/components/common/BoockBtn.jsx` - Added onClick handler support

### 3. Integration Points
- Updated `src/sections/FinalCTASection.jsx` - Added modal trigger to "Reserve Your Seat Now" button
- Added Razorpay script to `index.html`

## Features

### Form Fields
The modal collects the following information:
- Name
- Email ID
- Mobile Number
- Full Address
- City
- State
- Pincode

### Payment Processing
- Processes ₹2,499 payment via Razorpay
- Validates all form fields before processing
- Shows loading state during payment processing
- Displays thank you modal after successful payment

## Backend Integration

### New Endpoint
- `/public/v1/guest-payment/online-combo-booking` - Handles online combo course bookings

### Data Storage
- Payment information is stored in the ContactInquiry collection
- Includes user details and address information

## Validation
- Name: Required
- Email: Required and valid format
- Mobile: Required and 10 digits
- Full Address: Required
- City: Required
- State: Required
- Pincode: Required and 6 digits

## Error Handling
- Form validation errors displayed inline
- Payment processing errors handled gracefully
- Duplicate payment detection

## Security
- Secure payment processing via Razorpay
- Input validation on both frontend and backend
- Data stored in encrypted format

## How to Test
1. Start the backend server: `npm start` in the backend directory
2. Start the frontend development server: `npm run dev` in the fwg-online-combo directory
3. Navigate to the website
4. Click on "Reserve Your Seat Now" button
5. Fill in the form details
6. Complete the payment process
7. Verify that the payment is recorded in the database