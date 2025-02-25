"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Box, Typography, Button } from "@mui/material";
import IntakeForm from "./IntakeForm"; // Import IntakeForm component

export default function HeroSection() {
  const heroRef = useRef(null);
  const [openForm, setOpenForm] = useState(false); // Control modal visibility

  useEffect(() => {
    const ctx = gsap.context((self) => {
      gsap.from(self.selector(".hero-content"), {
        duration: 1,
        y: 40,
        opacity: 0,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Open Intake Form Modal
  const handleOpenForm = () => {
    setOpenForm(true);
  };

  // Close Intake Form Modal
  const handleCloseForm = () => {
    setOpenForm(false);
  };

  return (
    <Box
      ref={heroRef}
      sx={{
        position: "relative",
        width: "100%",
        height: "80vh",
        backgroundImage: `url('/images/truck-hero.jpg')`, // Your background image
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        color: "#fff",
        px: 4,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(10, 28, 44, 0.8), rgba(10, 28, 44, 0.8))", // Gradient overlay
          zIndex: 1,
        }}
      />
      <Box
        className="hero-content"
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: "90vw",
        }}
      >
        {/* First line */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            lineHeight: 1.2,
            mb: 1,
          }}
        >
          WITH{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(to right, #FFB800, #FFD700, #FF6A00)", // Bold gradient for the text
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            HARVEST DISPATCH
          </Box>
          ,
        </Typography>

        {/* Second line */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem" },
            lineHeight: 1.2,
            mb: 3,
          }}
        >
          YOUR BUSINESS IS ALWAYS OPTIMIZED
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            boxShadow: 3,
          }}
          onClick={handleOpenForm} // Open the intake form when clicked
        >
          Get Started
        </Button>
      </Box>

      {/* The Intake Form Modal */}
      {openForm && <IntakeForm open={openForm} handleClose={handleCloseForm} />}
    </Box>
  );
}
