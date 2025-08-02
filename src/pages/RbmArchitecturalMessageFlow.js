
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function RbmArchitecturalMessageFlow() {
  const [flowInfo, setFlowInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlowInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/rbm-architectural-message-flow');
        const data = await response.json();
        if (data.success) {
          setFlowInfo(data.data);
        } else {
          setError(data.message || 'Failed to fetch RBM architectural message flow information');
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
    return <Typography>Loading RBM architectural message flow...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        RBM Architectural Message Flow
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          This section provides a high-level overview of the architectural message flow within the RBM platform.
          It illustrates the components involved and how messages traverse the system.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Architecture Diagram: {flowInfo.architectureDiagram}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Key Components: {flowInfo.keyComponents.join(', ')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Data Flow: {flowInfo.dataFlow}
        </Typography>
      </Paper>
    </Box>
  );
}
