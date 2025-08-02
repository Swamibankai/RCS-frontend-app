
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Brands() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Brands
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          Manage the brands associated with your RCS Business Messaging account.
          You can add, edit, or remove brand profiles here.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Registered Brands: [List of registered brands]
        </Typography>
      </Paper>
    </Box>
  );
}
