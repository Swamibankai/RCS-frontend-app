
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Authentication() {
  const [authInfo, setAuthInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuthInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/authentication');
        const data = await response.json();
        if (data.success) {
          setAuthInfo(data.data);
        } else {
          setError(data.message || 'Failed to fetch authentication information');
        }
      } catch (err) {
        setError('Network error or server not reachable');
      } finally {
        setLoading(false);
      }
    };

    fetchAuthInfo();
  }, []);

  if (loading) {
    return <Typography>Loading authentication information...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Authentication
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          This section provides information about authentication methods and configurations for the RCS console.
          You can manage API keys, OAuth settings, and other security-related options here.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Authentication Method: {authInfo.authenticationMethod}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last Security Audit: {authInfo.lastSecurityAudit}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          API Keys Managed: {authInfo.apiKeysManaged}
        </Typography>
      </Paper>
    </Box>
  );
}
