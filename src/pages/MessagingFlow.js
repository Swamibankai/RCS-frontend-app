
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function MessagingFlow() {
  const [flowInfo, setFlowInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlowInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/messaging-flow');
        const data = await response.json();
        if (data.success) {
          setFlowInfo(data.data);
        } else {
          setError(data.message || 'Failed to fetch messaging flow information');
        }
      } catch (err) {
        setError('Network error or server not reachable');
      } finally {
        setLoading(false);
      }
    };

    fetchFlowInfo();
  }, []);

  if (loading) {
    return <Typography>Loading messaging flow...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Messaging Flow
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          This section illustrates the end-to-end messaging flow within the RCS Business Messaging platform.
          You can visualize how messages are sent, received, and processed.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Flow Diagram: {flowInfo.flowDiagram}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Key Stages: {flowInfo.keyStages.join(', ')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Average Latency: {flowInfo.averageLatency}
        </Typography>
      </Paper>
    </Box>
  );
}
