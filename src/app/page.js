'use client';

import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Header from '../components/Header'; // Import Header component
import HeroSection from '../components/HeroSection'; // Import HeroSection component
import FeaturesSection from '../components/FeaturesSection'; // Import FeaturesSection component
import ModalCard from '../components/ModalCard'; // Import ModalCard component
import PortalOverviewSection from '../components/PortalOverviewSection'; // Import PortalOverviewSection component
import BottomCTA from '../components/BottomCTA'; // Import BottomCTA component
import Footer from '../components/Footer'; // Import Footer component
import DriverForm from '../components/DriverForm'; // Import DriverForm component

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });

  // Function to open the DriverForm modal
  const handleOpenForm = () => {
    setOpen(true);
  };

  // Function to close the DriverForm modal
  const handleCloseForm = () => {
    setOpen(false);
  };

  // Function to open the feature details modal
  const handleOpenModal = (title, description) => {
    setModalContent({ title, description });
    setModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {/* Header Component */}
  

      {/* Hero Section */}
      <HeroSection />

    

      {/* Features Section */}
      <FeaturesSection />

      {/* Modal for displaying detailed information about features */}
      <ModalCard
        open={modalOpen}
        onClose={handleCloseModal}
        title={modalContent.title}
        description={modalContent.description}
      />

      {/* Portal Overview Section */}
      <PortalOverviewSection />

      {/* Bottom Call-to-Action Section */}
      <BottomCTA />

     

      {/* Modal for DriverForm */}
      <Dialog open={open} onClose={handleCloseForm} fullWidth>
        <DialogTitle>Driver Application Form</DialogTitle>
        <DialogContent>
          <DriverForm /> {/* This is the DriverForm component */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
