
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Settings() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          This section allows you to configure various application settings.
          You can manage preferences, notifications, and other global options here.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Language: English
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Timezone: UTC
        </Typography>
      </Paper>
    </Box>
  );
}
