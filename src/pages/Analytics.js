
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Analytics() {
  const [analyticsInfo, setAnalyticsInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnalyticsInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/analytics');
        const data = await response.json();
        if (data.success) {
          setAnalyticsInfo(data.data);
        } else {
          setError(data.message || 'Failed to fetch analytics information');
        }
      } catch (err) {
        setError('Network error or server not reachable');
      } finally {
        setLoading(false);
      }
    };

    fetchAnalyticsInfo();
  }, []);

  if (loading) {
    return <Typography>Loading analytics...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Analytics
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          This section provides insights and data analytics for your RCS agent's performance.
          You can view metrics, trends, and reports here.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Total Messages Sent: {analyticsInfo.totalMessagesSent}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Active Users: {analyticsInfo.activeUsers}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Message Trends:
          <ul>
            {analyticsInfo.messageTrends.map(trend => (
              <li key={trend.month}>{trend.month}: {trend.messages} messages</li>
            ))}
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
}
