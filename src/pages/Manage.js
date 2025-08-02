
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Manage() {
  const [manageInfo, setManageInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchManageInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/manage');
        const data = await response.json();
        if (data.success) {
          setManageInfo(data.data);
        } else {
          setError(data.message || 'Failed to fetch manage information');
        }
      } catch (err) {
        setError('Network error or server not reachable');
      } finally {
        setLoading(false);
      }
    };

    fetchManageInfo();
  }, []);

  if (loading) {
    return <Typography>Loading manage information...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Manage
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          This section allows you to manage various aspects of your RCS agent.
          You can view and modify agent configurations, settings, and resources.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Agent Status: {manageInfo.agentStatus}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last Updated: {manageInfo.lastUpdated}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Configurations:
          <ul>
            {manageInfo.configurations.map(config => (
              <li key={config.name}>{config.name}: {config.value}</li>
            ))}
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
}
