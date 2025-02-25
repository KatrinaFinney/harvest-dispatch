"use client";

import { Box, Typography, Grid, Paper, CardActionArea } from "@mui/material";
import { useState } from "react";
import ModalCard from "./ModalCard"; // Import the ModalCard component

const featuresData = [
  {
    title: "Real-Time Tracking",
    description:
      "Keep tabs on every load with live route updates and ETA notifications.",
    modalContent: "Track every load in real time with dynamic updates for routes and ETAs.",
  },
  {
    title: "Efficient Dispatching",
    description:
      "Assign loads, schedule routes, and optimize dispatch from a central portal.",
    modalContent: "Efficiently manage your fleet by assigning and optimizing routes directly from the portal.",
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Analyze route performance, fuel costs, and driver logs for continuous improvements.",
    modalContent: "Make informed decisions based on real-time data, improving cost efficiency and fleet management.",
  },
];

export default function FeaturesSection() {
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
    <Box sx={{ py: 6, px: { xs: 2, md: 6 } }}>
      <Typography variant="h2" align="center" sx={{ mb: 4 }}>
        Key Features
      </Typography>

      <Grid container spacing={4}>
        {featuresData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.title}>
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
