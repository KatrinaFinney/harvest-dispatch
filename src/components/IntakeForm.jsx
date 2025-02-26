"use client";

import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Box, Checkbox, FormControlLabel } from "@mui/material"; // Ensure these are imported
import { useState } from "react";

export default function IntakeForm({ open, handleClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    driverLicense: "",
    vehicleType: "",
    licenseType: "",
    licenseNumber: "",
    stateOfIssuance: "",
    licenseExpirationDate: "",
    previousEmployer: "",
    truckMakeModel: "",
    licensePlateNumber: "",
    dotMedicalCard: false,
    consentForDrugAlcoholScreening: false,
    consentForBackgroundCheck: false,
    preferredFreightType: "",
    availability: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle phone number click for "Get Started" button
  const handlePhoneCall = () => {
    // Replace with your desired phone number (e.g., "tel:+1234567890")
    window.location.href = "tel:+1234567890"; // This will open the dialer with the given number
    handleClose(); // Close the modal after clicking
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ textAlign: "center", color: "#333" }}>Get Started with Harvest Dispatch</DialogTitle>
      <DialogContent>
        <Box sx={{ backgroundColor: "#ffffff", p: 4, borderRadius: 1, boxShadow: 3 }}>
          <TextField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            fullWidth
            required
            sx={{
              mb: 2,
              backgroundColor: "#f4f4f4", // Light background for input fields
              "& .MuiInputBase-root": {
                borderRadius: "8px", // Rounded corners for inputs
                color: "#000", // Set text color to black
              },
            }}
          />
          {/* Other form fields ... */}

          {/* Health & Safety (CheckBox section kept for DOT Medical Card and other consents) */}
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.dotMedicalCard}
                onChange={handleChange}
                name="dotMedicalCard"
              />
            }
            label="DOT Medical Card"
            sx={{ color: "#333" }} // Set label color to black
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
            sx={{ color: "#333" }} // Set label color to black
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
            sx={{ color: "#333" }} // Set label color to black
          />

          {/* Driving Preferences */}
          {/* Other form fields ... */}
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
          onClick={handlePhoneCall} // This will initiate a phone call
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
          Get Started
        </Button>
      </DialogActions>
    </Dialog>
  );
}
