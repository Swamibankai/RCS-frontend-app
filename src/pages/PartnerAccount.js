
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function PartnerAccount() {
  const [partnerAccountInfo, setPartnerAccountInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPartnerAccountInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/partner-account');
        const data = await response.json();
        if (data.success) {
          setPartnerAccountInfo(data.data);
        } else {
          setError(data.message || 'Failed to fetch partner account information');
        }
      } catch (err) {
        setError('Network error or server not reachable');
      } finally {
        setLoading(false);
      }
    };

    fetchPartnerAccountInfo();
  }, []);

  if (loading) {
    return <Typography>Loading partner account information...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Partner Account
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          This section provides an overview of your partner account details.
          You can view your partner ID, associated agents, and other relevant information.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Partner ID: {partnerAccountInfo.partnerId}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Associated Agents: {partnerAccountInfo.associatedAgents.join(', ')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: {partnerAccountInfo.status}
        </Typography>
      </Paper>
    </Box>
  );
}
