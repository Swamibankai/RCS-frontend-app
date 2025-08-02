
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function RbmApiInteractionFlow() {
  const [flowInfo, setFlowInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlowInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/rbm-api-interaction-flow');
        const data = await response.json();
        if (data.success) {
          setFlowInfo(data.data);
        } else {
          setError(data.message || 'Failed to fetch RBM API interaction flow information');
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
    return <Typography>Loading RBM API interaction flow...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        RBM API Interaction Flow
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          This section visualizes the interaction flow with the RBM API.
          It demonstrates how your application communicates with the RBM platform.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Flow Diagram: {flowInfo.flowDiagram}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Key API Calls: {flowInfo.keyApiCalls.join(', ')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          API Call Volume: {flowInfo.apiCallVolume}
        </Typography>
      </Paper>
    </Box>
  );
}
