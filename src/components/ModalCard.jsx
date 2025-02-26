// components/ModalCard.jsx

import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

export default function ModalCard({ open, onClose, title, description }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Typography variant="body1">{description}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{ color: '#fff' }}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
