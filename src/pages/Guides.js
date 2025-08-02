
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Guides() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Guides
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          This section provides step-by-step guides and tutorials for using RCS Business Messaging.
          You can find instructions on setting up agents, sending messages, and more.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Number of Guides: [Placeholder Number]
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Popular Guides: [List of popular guides]
        </Typography>
      </Paper>
    </Box>
  );
}
