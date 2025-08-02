
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function TermsOfService() {
  const [termsInfo, setTermsInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTermsInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/terms-of-service');
        const data = await response.json();
        if (data.success) {
          setTermsInfo(data.data);
        } else {
          setError(data.message || 'Failed to fetch terms of service information');
        }
      } catch (err) {
        setError('Network error or server not reachable');
      } finally {
        setLoading(false);
      }
    };

    fetchTermsInfo();
  }, []);

  if (loading) {
    return <Typography>Loading terms of service...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Terms of Service
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          {termsInfo.content}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Last Updated: {termsInfo.lastUpdated}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Version: {termsInfo.version}
        </Typography>
      </Paper>
    </Box>
  );
}
