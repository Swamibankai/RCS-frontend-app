
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Webhook() {
  const [webhookInfo, setWebhookInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWebhookInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/webhook');
        const data = await response.json();
        if (data.success) {
          setWebhookInfo(data.data);
        } else {
          setError(data.message || 'Failed to fetch webhook information');
        }
      } catch (err) {
        setError('Network error or server not reachable');
      } finally {
        setLoading(false);
      }
    };

    fetchWebhookInfo();
  }, []);

  if (loading) {
    return <Typography>Loading webhook information...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

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
          Webhook URL: {webhookInfo.webhookUrl}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: {webhookInfo.status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last Event Received: {webhookInfo.lastEventReceived}
        </Typography>
      </Paper>
    </Box>
  );
}
