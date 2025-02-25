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
      <DialogTitle sx={{ textAlign: "center" }}>Get Started with Harvest Dispatch</DialogTitle>
      <DialogContent>
        {/* Updated background color for better contrast */}
        <Box sx={{ backgroundColor: "#ffffff", p: 4, borderRadius: 1, boxShadow: 3 }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#f7f7f7", // Light gray background for inputs
                borderColor: "#ccc", // Lighter border
              },
              "& .MuiOutlinedInput-root.Mui-focused": {
                borderColor: "#2196F3", // Blue focus border for better visibility
              },
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#f7f7f7", // Light gray background for inputs
                borderColor: "#ccc", // Lighter border
              },
              "& .MuiOutlinedInput-root.Mui-focused": {
                borderColor: "#2196F3", // Blue focus border for better visibility
              },
            }}
          />
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#f7f7f7", // Light gray background for inputs
                borderColor: "#ccc", // Lighter border
              },
              "& .MuiOutlinedInput-root.Mui-focused": {
                borderColor: "#2196F3", // Blue focus border for better visibility
              },
            }}
          />
          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#f7f7f7", // Light gray background for inputs
                borderColor: "#ccc", // Lighter border
              },
              "& .MuiOutlinedInput-root.Mui-focused": {
                borderColor: "#2196F3", // Blue focus border for better visibility
              },
            }}
          />
          <TextField
            label="Driver License Number"
            variant="outlined"
            fullWidth
            name="driverLicense"
            value={formData.driverLicense}
            onChange={handleChange}
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#f7f7f7", // Light gray background for inputs
                borderColor: "#ccc", // Lighter border
              },
              "& .MuiOutlinedInput-root.Mui-focused": {
                borderColor: "#2196F3", // Blue focus border for better visibility
              },
            }}
          />
          <TextField
            label="Vehicle Type"
            variant="outlined"
            fullWidth
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#f7f7f7", // Light gray background for inputs
                borderColor: "#ccc", // Lighter border
              },
              "& .MuiOutlinedInput-root.Mui-focused": {
                borderColor: "#2196F3", // Blue focus border for better visibility
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
            backgroundColor: "#2196F3", // Blue color for close button
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
            backgroundColor: "#4CAF50", // Green color for submit button
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
