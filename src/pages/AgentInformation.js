
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function AgentInformation() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Agent Information
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Agent Details
        </Typography>
        <Typography variant="body1" gutterBottom>
          This section will display detailed information about your RCS agent.
          You can manage agent name, description, logo, and other configurations here.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Agent ID: [Placeholder Agent ID]
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Agent Name: [Placeholder Agent Name]
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: Active
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Integration Status
        </Typography>
        <Typography variant="body1" gutterBottom>
          Overview of your agent's integration with various platforms and services.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Webhook URL: [Placeholder Webhook URL]
        </Typography>
        <Typography variant="body2" color="text.secondary">
          API Status: Connected
        </Typography>
      </Paper>
    </Box>
  );
}
