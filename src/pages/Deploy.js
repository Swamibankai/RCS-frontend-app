
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export default function Deploy() {
  const [deploymentStatus, setDeploymentStatus] = useState('Not Started');
  const [lastDeploymentTime, setLastDeploymentTime] = useState('N/A');
  const [loading, setLoading] = useState(false);

  const handleDeploy = async () => {
    setLoading(true);
    setDeploymentStatus('Deploying...');
    try {
      const response = await fetch('http://localhost:5000/api/deploy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.success) {
        setDeploymentStatus(data.status);
        setLastDeploymentTime(new Date(data.timestamp).toLocaleString());
        alert(data.message);
      } else {
        setDeploymentStatus(data.status);
        alert(data.message || 'Deployment failed');
      }
    } catch (error) {
      console.error('Error during deployment:', error);
      setDeploymentStatus('Failed (Network Error)');
      alert('An error occurred during deployment. Please check the backend server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Deploy
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          This section is for deploying your RCS agent to various environments.
          You can manage deployment configurations and initiate deployments here.
        </Typography>
        <Box sx={{ mt: 3, mb: 2 }}>
          <Button
            variant="contained"
            onClick={handleDeploy}
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
          >
            {loading ? 'Deploying...' : 'Initiate Deployment'}
          </Button>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Last Deployment: {lastDeploymentTime}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Deployment Status: {deploymentStatus}
        </Typography>
      </Paper>
    </Box>
  );
}
