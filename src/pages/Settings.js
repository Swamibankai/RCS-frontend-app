
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Settings() {
  const [settingsInfo, setSettingsInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSettingsInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/settings');
        const data = await response.json();
        if (data.success) {
          setSettingsInfo(data.data);
        } else {
          setError(data.message || 'Failed to fetch settings information');
        }
      } catch (err) {
        setError('Network error or server not reachable');
      } finally {
        setLoading(false);
      }
    };

    fetchSettingsInfo();
  }, []);

  if (loading) {
    return <Typography>Loading settings...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

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
          Language: {settingsInfo.language}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Timezone: {settingsInfo.timezone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Notifications: {settingsInfo.notifications}
        </Typography>
      </Paper>
    </Box>
  );
}
