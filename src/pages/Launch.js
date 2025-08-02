
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export default function Launch() {
  const [launchStatus, setLaunchStatus] = useState('Not Started');
  const [launchDate, setLaunchDate] = useState('N/A');
  const [loading, setLoading] = useState(false);

  const handleLaunch = async () => {
    setLoading(true);
    setLaunchStatus('Launching...');
    try {
      const response = await fetch('http://localhost:5000/api/launch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.success) {
        setLaunchStatus(data.status);
        setLaunchDate(new Date(data.timestamp).toLocaleString());
        alert(data.message);
      } else {
        setLaunchStatus(data.status);
        alert(data.message || 'Launch failed');
      }
    } catch (error) {
      console.error('Error during launch:', error);
      setLaunchStatus('Failed (Network Error)');
      alert('An error occurred during launch. Please check the backend server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Launch
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          This section is for launching your RCS agent to production.
          You can review final checks and initiate the launch process here.
        </Typography>
        <Box sx={{ mt: 3, mb: 2 }}>
          <Button
            variant="contained"
            onClick={handleLaunch}
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
          >
            {loading ? 'Launching...' : 'Initiate Launch'}
          </Button>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Launch Status: {launchStatus}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Launch Date: {launchDate}
        </Typography>
      </Paper>
    </Box>
  );
}
