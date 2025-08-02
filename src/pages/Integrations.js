
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Integrations() {
  const [integrationsInfo, setIntegrationsInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIntegrationsInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/integrations');
        const data = await response.json();
        if (data.success) {
          setIntegrationsInfo(data.data);
        } else {
          setError(data.message || 'Failed to fetch integrations information');
        }
      } catch (err) {
        setError('Network error or server not reachable');
      } finally {
        setLoading(false);
      }
    };

    fetchIntegrationsInfo();
  }, []);

  if (loading) {
    return <Typography>Loading integrations information...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Integrations
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          This section will allow you to manage various integrations for your RCS agent.
          You can connect to different platforms, CRMs, or other third-party services here.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Current Integrations: {integrationsInfo.currentIntegrations.join(', ') || 'None'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Available Integrations: {integrationsInfo.availableIntegrations.join(', ') || 'None'}
        </Typography>
      </Paper>
    </Box>
  );
}
