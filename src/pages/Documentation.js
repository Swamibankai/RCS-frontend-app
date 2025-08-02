
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Documentation() {
  const [docInfo, setDocInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/documentation');
        const data = await response.json();
        if (data.success) {
          setDocInfo(data.data);
        } else {
          setError(data.message || 'Failed to fetch documentation information');
        }
      } catch (err) {
        setError('Network error or server not reachable');
      } finally {
        setLoading(false);
      }
    };

    fetchDocInfo();
  }, []);

  if (loading) {
    return <Typography>Loading documentation...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Documentation
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          This section provides access to comprehensive documentation for RCS Business Messaging.
          You can find API references, guides, and technical specifications here.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Latest Version: {docInfo.latestVersion}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last Updated: {docInfo.lastUpdated}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sections:
          <ul>
            {docInfo.sections.map(section => (
              <li key={section.title}><strong>{section.title}</strong>: {section.description}</li>
            ))}
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
}
