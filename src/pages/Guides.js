
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Guides() {
  const [guidesInfo, setGuidesInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGuidesInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/guides');
        const data = await response.json();
        if (data.success) {
          setGuidesInfo(data.data);
        } else {
          setError(data.message || 'Failed to fetch guides information');
        }
      } catch (err) {
        setError('Network error or server not reachable');
      } finally {
        setLoading(false);
      }
    };

    fetchGuidesInfo();
  }, []);

  if (loading) {
    return <Typography>Loading guides...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Guides
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          This section provides step-by-step guides and tutorials for using RCS Business Messaging.
          You can find instructions on setting up agents, sending messages, and more.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Number of Guides: {guidesInfo.numberOfGuides}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Popular Guides: {guidesInfo.popularGuides.join(', ')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Guide List:
          <ul>
            {guidesInfo.guideList.map(guide => (
              <li key={guide.id}>{guide.title} ({guide.category})</li>
            ))}
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
}
