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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    handleClose(); // Close the form after submission
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Get Started with Harvest Dispatch</DialogTitle>
      <DialogContent>
        {/* Lighter background color */}
        <Box sx={{ backgroundColor: "#F5F5F5", p: 2, borderRadius: 1 }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Driver License Number"
            variant="outlined"
            fullWidth
            name="driverLicense"
            value={formData.driverLicense}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Vehicle Type"
            variant="outlined"
            fullWidth
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
