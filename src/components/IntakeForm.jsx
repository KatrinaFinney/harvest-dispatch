"use client";

import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Box } from "@mui/material";
import { useState } from "react";

export default function IntakeForm({ open, handleClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    driverLicense: "",
    vehicleType: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form and send data to the backend
  const handleSubmit = async () => {
    try {
      // Send the form data to the backend API
      const response = await fetch('http://localhost:5000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      const result = await response.json();
      
      if (response.ok) {
        console.log('Form submitted successfully:', result);
        handleClose(); // Close the modal if submission is successful
      } else {
        console.error('Failed to submit form:', result.message);
      }
    } catch (error) {
      console.error('Error while submitting form:', error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ textAlign: "center" }}>Get Started with Harvest Dispatch</DialogTitle>
      <DialogContent>
        <Box sx={{ backgroundColor: "#ffffff", p: 4, borderRadius: 1, boxShadow: 3 }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />
          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />
          <TextField
            label="Driver License Number"
            variant="outlined"
            fullWidth
            name="driverLicense"
            value={formData.driverLicense}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />
          <TextField
            label="Vehicle Type"
            variant="outlined"
            fullWidth
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          onClick={handleClose}
          color="secondary"
          sx={{
            backgroundColor: "#2196F3",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#1976D2",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          color="primary"
          sx={{
            backgroundColor: "#4CAF50",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#388E3C",
            },
            fontWeight: "bold",
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
