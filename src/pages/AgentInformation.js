
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function AgentInformation() {
  const [agentInfo, setAgentInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAgentInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/agent-info');
        const data = await response.json();
        if (data.success) {
          setAgentInfo(data.data);
        } else {
          setError(data.message || 'Failed to fetch agent information');
        }
      } catch (err) {
        setError('Network error or server not reachable');
      } finally {
        setLoading(false);
      }
    };

    fetchAgentInfo();
  }, []);

  if (loading) {
    return <Typography>Loading agent information...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

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
          This section displays detailed information about your RCS agent.
          You can manage agent name, description, logo, and other configurations here.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Agent ID: {agentInfo.agentId}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Agent Name: {agentInfo.agentName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: {agentInfo.status}
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
          Webhook URL: {agentInfo.webhookUrl}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          API Status: {agentInfo.apiStatus}
        </Typography>
      </Paper>
    </Box>
  );
}
