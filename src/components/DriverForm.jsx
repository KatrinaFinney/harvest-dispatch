// components/DriverForm.jsx

import React from 'react';
import { TextField, Button, Grid, Box, Typography } from '@mui/material';
import { Checkbox, FormControlLabel } from '@mui/material';  // <-- Add this import


const DriverForm = () => {
  return (
    <Box sx={{ backgroundColor: '#fff', padding: 3, borderRadius: '8px', width: '100%', boxShadow: 3 }}>
      <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
        Driver Application Form
      </Typography>
      
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              required
              sx={{
                backgroundColor: '#f3f3f3',
                '& .MuiInputBase-root': {
                  borderRadius: '4px',
                  fontSize: '1rem',
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              required
              sx={{
                backgroundColor: '#f3f3f3',
                '& .MuiInputBase-root': {
                  borderRadius: '4px',
                  fontSize: '1rem',
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              required
              sx={{
                backgroundColor: '#f3f3f3',
                '& .MuiInputBase-root': {
                  borderRadius: '4px',
                  fontSize: '1rem',
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="License Type"
              variant="outlined"
              fullWidth
              required
              sx={{
                backgroundColor: '#f3f3f3',
                '& .MuiInputBase-root': {
                  borderRadius: '4px',
                  fontSize: '1rem',
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="License Number"
              variant="outlined"
              fullWidth
              required
              sx={{
                backgroundColor: '#f3f3f3',
                '& .MuiInputBase-root': {
                  borderRadius: '4px',
                  fontSize: '1rem',
                },
              }}
            />
          </Grid>

          {/* Add more fields as needed, following the pattern above */}

          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default DriverForm;
