
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Samples() {
  const [samplesInfo, setSamplesInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSamplesInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/samples');
        const data = await response.json();
        if (data.success) {
          setSamplesInfo(data.data);
        } else {
          setError(data.message || 'Failed to fetch samples information');
        }
      } catch (err) {
        setError('Network error or server not reachable');
      } finally {
        setLoading(false);
      }
    };

    fetchSamplesInfo();
  }, []);

  if (loading) {
    return <Typography>Loading samples...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Samples
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          This section provides code samples and examples for implementing RCS Business Messaging features.
          You can find snippets for various use cases and programming languages.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Number of Samples: {samplesInfo.numberOfSamples}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Popular Samples: {samplesInfo.popularSamples.join(', ')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sample List:
          <ul>
            {samplesInfo.sampleList.map(sample => (
              <li key={sample.id}>{sample.title} ({sample.language})</li>
            ))}
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
}
