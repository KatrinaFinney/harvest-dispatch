"use client";

import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from "@mui/material"; // <-- Import Typography here
import { useState } from "react";

export default function ModalCard({ title, description, open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Typography variant="body1">{description}</Typography> {/* Now Typography is properly imported */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
