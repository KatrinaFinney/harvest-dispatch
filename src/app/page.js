'use client';

import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import DriverForm from '../components/DriverForm'; // Ensure the import path is correct

export default function HomePage() {
  const [open, setOpen] = useState(false);

  // Function to open the modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* "Get Started" Button */}
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Get Started
      </Button>

      {/* Modal for the DriverForm */}
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Driver Application Form</DialogTitle>
        <DialogContent>
          <DriverForm /> {/* This is the form we created earlier */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
