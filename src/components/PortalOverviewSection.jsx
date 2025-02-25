"use client";

import { Box, Typography, Grid, Paper, CardActionArea } from "@mui/material";
import { useState } from "react";
import ModalCard from "./ModalCard"; // Import the ModalCard component

const portalData = [
  {
    title: "Driver Management",
    description: "Create and manage driver profiles, statuses, and logs in a single dashboard.",
    modalContent: "This feature allows you to manage and track driver information in real time.",
  },
  {
    title: "Load & Dispatch Management",
    description: "Assign loads to drivers, track routes, and monitor progress in real time.",
    modalContent: "Our system lets you efficiently assign and track loads for your fleet.",
  },
  {
    title: "Communication Hub",
    description: "Coordinate with drivers via in-app messaging or handle emergencies quickly.",
    modalContent: "This hub ensures seamless communication with your drivers.",
  },
  {
    title: "Analytics Dashboard",
    description: "Analyze on-time deliveries, mileage, and driver utilization with custom reports.",
    modalContent: "Our analytics dashboard provides you with real-time insights into your fleet’s performance.",
  },
];

export default function PortalOverviewSection() {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleOpenModal = (data) => {
    setModalData(data);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 6 }, backgroundColor: "#1E2B44" }}>
      {/* Updated Typography for Responsiveness */}
      <Typography 
        variant="h2" 
        align="center" 
        sx={{
          mb: 4,
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
          textAlign: "center",
          px: 2, // Added padding to avoid text being too close to edges on small screens
        }}
      >
        The Business Management Portal
      </Typography>

      <Grid container spacing={4}>
        {portalData.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.title}>
            <CardActionArea onClick={() => handleOpenModal(item)}>
              <Paper sx={{ p: 3, height: "100%", textAlign: "center" }} elevation={3}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1">{item.description}</Typography>
              </Paper>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>

      <ModalCard
        title={modalData.title}
        description={modalData.modalContent}
        open={openModal}
        onClose={handleCloseModal}
      />
    </Box>
  );
}
