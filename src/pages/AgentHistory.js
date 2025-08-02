
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function AgentHistory() {
  const [historyInfo, setHistoryInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistoryInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/agent-history');
        const data = await response.json();
        if (data.success) {
          setHistoryInfo(data.data);
        } else {
          setError(data.message || 'Failed to fetch agent history information');
        }
      } catch (err) {
        setError('Network error or server not reachable');
      } finally {
        setLoading(false);
      }
    };

    fetchHistoryInfo();
  }, []);

  if (loading) {
    return <Typography>Loading agent history...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

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
          Last Activity: {historyInfo.lastActivity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Event Log:
          <ul>
            {historyInfo.eventLog.map(event => (
              <li key={event.id}>{event.timestamp}: {event.event}</li>
            ))}
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
}
