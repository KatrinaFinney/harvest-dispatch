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
    dotMedicalCard: false, // Keeping this for the checkbox
    consentForDrugAlcoholScreening: false, // Keeping this for the checkbox
    consentForBackgroundCheck: false, // Keeping this for the checkbox
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

  // Submit form and send data to the backend
  const handleSubmit = async () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.licenseType ||
      !formData.licenseNumber ||
      !formData.stateOfIssuance ||
      !formData.licenseExpirationDate
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Form submitted successfully:", result);
        handleClose(); // Close the modal if submission is successful
      } else {
        console.error("Failed to submit form:", result.message);
      }
    } catch (error) {
      console.error("Error while submitting form:", error);
    }
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
              },
            }}
          />
          <TextField
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            required
            sx={{
              mb: 2,
              backgroundColor: "#f4f4f4",
              "& .MuiInputBase-root": {
                borderRadius: "8px",
              },
            }}
          />
          <TextField
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            sx={{
              mb: 2,
              backgroundColor: "#f4f4f4",
              "& .MuiInputBase-root": {
                borderRadius: "8px",
              },
            }}
          />

          {/* Driver’s License Information */}
          <TextField
            label="License Type"
            name="licenseType"
            value={formData.licenseType}
            onChange={handleChange}
            fullWidth
            required
            sx={{
              mb: 2,
              backgroundColor: "#f4f4f4",
              "& .MuiInputBase-root": {
                borderRadius: "8px",
              },
            }}
          />
          <TextField
            label="License Number"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleChange}
            fullWidth
            required
            sx={{
              mb: 2,
              backgroundColor: "#f4f4f4",
              "& .MuiInputBase-root": {
                borderRadius: "8px",
              },
            }}
          />
          <TextField
            label="State of Issuance"
            name="stateOfIssuance"
            value={formData.stateOfIssuance}
            onChange={handleChange}
            fullWidth
            required
            sx={{
              mb: 2,
              backgroundColor: "#f4f4f4",
              "& .MuiInputBase-root": {
                borderRadius: "8px",
              },
            }}
          />
          <TextField
            label="License Expiration Date"
            name="licenseExpirationDate"
            type="date"
            value={formData.licenseExpirationDate}
            onChange={handleChange}
            fullWidth
            required
            sx={{
              mb: 2,
              backgroundColor: "#f4f4f4",
              "& .MuiInputBase-root": {
                borderRadius: "8px",
              },
            }}
          />

          {/* Employment History */}
          <TextField
            label="Previous Employer/Driving Experience"
            name="previousEmployer"
            value={formData.previousEmployer}
            onChange={handleChange}
            fullWidth
            sx={{
              mb: 2,
              backgroundColor: "#f4f4f4",
              "& .MuiInputBase-root": {
                borderRadius: "8px",
              },
            }}
          />

          {/* Vehicle Information */}
          <TextField
            label="Truck Make & Model"
            name="truckMakeModel"
            value={formData.truckMakeModel}
            onChange={handleChange}
            fullWidth
            sx={{
              mb: 2,
              backgroundColor: "#f4f4f4",
              "& .MuiInputBase-root": {
                borderRadius: "8px",
              },
            }}
          />
          <TextField
            label="License Plate Number"
            name="licensePlateNumber"
            value={formData.licensePlateNumber}
            onChange={handleChange}
            fullWidth
            sx={{
              mb: 2,
              backgroundColor: "#f4f4f4",
              "& .MuiInputBase-root": {
                borderRadius: "8px",
              },
            }}
          />

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
            sx={{ color: "#333" }} // Set text color to black
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
            sx={{ color: "#333" }} // Set text color to black
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
            sx={{ color: "#333" }} // Set text color to black
          />

          {/* Driving Preferences */}
          <TextField
            label="Preferred Freight Type"
            name="preferredFreightType"
            value={formData.preferredFreightType}
            onChange={handleChange}
            fullWidth
            sx={{
              mb: 2,
              backgroundColor: "#f4f4f4",
              "& .MuiInputBase-root": {
                borderRadius: "8px",
              },
            }}
          />
          <TextField
            label="Availability"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            fullWidth
            sx={{
              mb: 2,
              backgroundColor: "#f4f4f4",
              "& .MuiInputBase-root": {
                borderRadius: "8px",
              },
            }}
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
