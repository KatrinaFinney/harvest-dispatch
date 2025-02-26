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
        // Optionally, clear the form or show a success message
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
      
      {/* Form Fields (as previously defined) */}
      <TextField
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      {/* More form fields... */}
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </Box>
  );
}
