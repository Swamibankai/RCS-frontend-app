
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function TermsOfService() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Terms of Service
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          This section outlines the terms and conditions for using the RCS Business Messaging platform.
          Please review them carefully.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Last Updated: [Date]
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Version: [Version Number]
        </Typography>
      </Paper>
    </Box>
  );
}
