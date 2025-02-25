"use client";

import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#222",
        color: "#fff",
        py: 3,
        textAlign: "center",
        mt: "auto",
      }}
    >
      <Typography variant="body2" sx={{ opacity: 0.7 }}>
        © {new Date().getFullYear()} Harvest Dispatching. All Rights Reserved.
      </Typography>
    </Box>
  );
}
