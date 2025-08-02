
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function AgentHistory() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Agent History
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          This section displays the historical activity and changes related to your RCS agent.
          You can review past events, deployments, and modifications.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Last Activity: [Date and Time]
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Event Log: [List of recent events]
        </Typography>
      </Paper>
    </Box>
  );
}
