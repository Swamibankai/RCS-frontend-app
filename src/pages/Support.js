
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Support() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Support
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          This section provides resources for support and assistance with RCS Business Messaging.
          You can find FAQs, contact information, and troubleshooting guides here.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Support Email: support@example.com
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Support Phone: +1-800-123-4567
        </Typography>
      </Paper>
    </Box>
  );
}
