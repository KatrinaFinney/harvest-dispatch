"use client";

import { Box, Typography, Button, Grid } from "@mui/material";

export default function BottomCTA() {
  const handleCallUs = () => {
    window.location.href = "tel:+1234567890"; // Replace with your business number
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 6,
        px: 2,
        background: "linear-gradient(135deg, #001F3F, #0A1C2C)",
        color: "#fff",
      }}
    >
      <Typography variant="h3" sx={{ mb: 2 }}>
        Ready to Optimize Your Fleet?
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Experience the power of Harvest Dispatch and start saving time and money today.
      </Typography>

      {/* Using Grid to stack buttons on smaller screens */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md="auto">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              boxShadow: 3,
              width: "100%", // Full width on mobile
            }}
            onClick={() => alert("Sign Up Now")}
          >
            Sign Up Now
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md="auto">
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              boxShadow: 3,
              width: "100%", // Full width on mobile
            }}
            onClick={handleCallUs} // Calls the business number
          >
            Call Us
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
