import { useState } from 'react';
import { TextField, Button, Box, FormControlLabel, Checkbox } from '@mui/material';

export default function DriverForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    licenseType: '',
    licenseNumber: '',
    stateOfIssuance: '',
    licenseExpirationDate: '',
    previousEmployer: '',
    truckMakeModel: '',
    licensePlateNumber: '',
    dotMedicalCard: false,
    consentForDrugAlcoholScreening: false,
    consentForBackgroundCheck: false,
    preferredFreightType: '',
    availability: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the backend API
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Form submitted successfully:', result);
      } else {
        console.error('Failed to submit form:', result.message);
      }
    } catch (error) {
      console.error('Error while submitting form:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 3 }}>
      <h2>Driver Application Form</h2>

      {/* Personal Information */}
      <TextField
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Email Address"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
        sx={{ mb: 2 }}
      />

      {/* Driver’s License Information */}
      <TextField
        label="License Type"
        name="licenseType"
        value={formData.licenseType}
        onChange={handleChange}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="License Number"
        name="licenseNumber"
        value={formData.licenseNumber}
        onChange={handleChange}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="State of Issuance"
        name="stateOfIssuance"
        value={formData.stateOfIssuance}
        onChange={handleChange}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="License Expiration Date"
        name="licenseExpirationDate"
        type="date"
        value={formData.licenseExpirationDate}
        onChange={handleChange}
        fullWidth
        required
        sx={{ mb: 2 }}
      />

      {/* Employment History */}
      <TextField
        label="Previous Employer/Driving Experience"
        name="previousEmployer"
        value={formData.previousEmployer}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />

      {/* Vehicle Information */}
      <TextField
        label="Truck Make & Model"
        name="truckMakeModel"
        value={formData.truckMakeModel}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="License Plate Number"
        name="licensePlateNumber"
        value={formData.licensePlateNumber}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />

      {/* Health & Safety */}
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.dotMedicalCard}
            onChange={handleChange}
            name="dotMedicalCard"
          />
        }
        label="DOT Medical Card"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.consentForDrugAlcoholScreening}
            onChange={handleChange}
            name="consentForDrugAlcoholScreening"
          />
        }
        label="Consent for Drug/Alcohol Screening"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.consentForBackgroundCheck}
            onChange={handleChange}
            name="consentForBackgroundCheck"
          />
        }
        label="Consent for Background Check"
      />

      {/* Driving Preferences */}
      <TextField
        label="Preferred Freight Type"
        name="preferredFreightType"
        value={formData.preferredFreightType}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Availability"
        name="availability"
        value={formData.availability}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />

      {/* Submit Button */}
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </Box>
  );
}
