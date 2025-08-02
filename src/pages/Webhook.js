
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Webhook() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Webhook
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          This section allows you to configure and manage webhooks for your RCS agent.
          Webhooks are used to receive incoming messages and events from the RCS platform.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Webhook URL: [Placeholder Webhook URL]
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: Active
        </Typography>
      </Paper>
    </Box>
  );
}
