
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Reference() {
  const [referenceInfo, setReferenceInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReferenceInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/reference');
        const data = await response.json();
        if (data.success) {
          setReferenceInfo(data.data);
        } else {
          setError(data.message || 'Failed to fetch reference information');
        }
      } catch (err) {
        setError('Network error or server not reachable');
      } finally {
        setLoading(false);
      }
    };

    fetchReferenceInfo();
  }, []);

  if (loading) {
    return <Typography>Loading reference...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Reference
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          This section provides comprehensive reference materials for RCS Business Messaging APIs and concepts.
          You can find detailed specifications and definitions here.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          API Version: {referenceInfo.apiVersion}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last Updated: {referenceInfo.lastUpdated}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          API Sections:
          <ul>
            {referenceInfo.apiSections.map(section => (
              <li key={section.name}><strong>{section.name}</strong>: {section.description}</li>
            ))}
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
}
