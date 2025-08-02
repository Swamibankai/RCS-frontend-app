
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Support() {
  const [supportInfo, setSupportInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSupportInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/support');
        const data = await response.json();
        if (data.success) {
          setSupportInfo(data.data);
        } else {
          setError(data.message || 'Failed to fetch support information');
        }
      } catch (err) {
        setError('Network error or server not reachable');
      } finally {
        setLoading(false);
      }
    };

    fetchSupportInfo();
  }, []);

  if (loading) {
    return <Typography>Loading support information...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Support
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          This section provides resources for support and assistance with RCS Business Messaging.
          You can find FAQs, contact information, and troubleshooting guides here.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Support Email: {supportInfo.supportEmail}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Support Phone: {supportInfo.supportPhone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          FAQ Link: <a href={supportInfo.faqLink} target="_blank" rel="noopener noreferrer">{supportInfo.faqLink}</a>
        </Typography>
      </Paper>
    </Box>
  );
}
