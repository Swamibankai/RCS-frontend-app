
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Test() {
  const [testInfo, setTestInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/test');
        const data = await response.json();
        if (data.success) {
          setTestInfo(data.data);
        } else {
          setError(data.message || 'Failed to fetch test information');
        }
      } catch (err) {
        setError('Network error or server not reachable');
      } finally {
        setLoading(false);
      }
    };

    fetchTestInfo();
  }, []);

  if (loading) {
    return <Typography>Loading test information...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Test
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          This section is for testing various functionalities of your RCS agent.
          You can run test cases, simulate scenarios, and verify agent behavior.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Last Test Run: {testInfo.lastTestRun}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Test Results: {testInfo.testResults}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Test Cases:
          <ul>
            {testInfo.testCases.map(testCase => (
              <li key={testCase.id}>{testCase.name}: {testCase.status}</li>
            ))}
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
}
