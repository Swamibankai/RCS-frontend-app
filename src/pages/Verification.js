
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export default function Verification() {
  const [verificationStatus, setVerificationStatus] = useState('Not Started');
  const [lastAttemptTime, setLastAttemptTime] = useState('N/A');
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    setLoading(true);
    setVerificationStatus('Verifying...');
    try {
      const response = await fetch('http://localhost:5000/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.success) {
        setVerificationStatus(data.status);
        setLastAttemptTime(new Date(data.timestamp).toLocaleString());
        alert(data.message);
      } else {
        setVerificationStatus(data.status);
        alert(data.message || 'Verification failed');
      }
    } catch (error) {
      console.error('Error during verification:', error);
      setVerificationStatus('Failed (Network Error)');
      alert('An error occurred during verification. Please check the backend server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Verification
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          This section handles the verification process for your RCS agent.
          You can initiate and monitor the verification status here.
        </Typography>
        <Box sx={{ mt: 3, mb: 2 }}>
          <Button
            variant="contained"
            onClick={handleVerify}
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
          >
            {loading ? 'Verifying...' : 'Initiate Verification'}
          </Button>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Verification Status: {verificationStatus}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last Attempt: {lastAttemptTime}
        </Typography>
      </Paper>
    </Box>
  );
}
