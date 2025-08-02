
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Users() {
  const [usersInfo, setUsersInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsersInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users');
        const data = await response.json();
        if (data.success) {
          setUsersInfo(data.data);
        } else {
          setError(data.message || 'Failed to fetch users information');
        }
      } catch (err) {
        setError('Network error or server not reachable');
      } finally {
        setLoading(false);
      }
    };

    fetchUsersInfo();
  }, []);

  if (loading) {
    return <Typography>Loading users...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          Manage user accounts and their permissions within the RCS console.
          You can add new users, modify roles, or remove access.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Total Users: {usersInfo.totalUsers}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Active Users: {usersInfo.activeUsers}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          User List: {usersInfo.userList.map(user => user.name).join(', ')}
        </Typography>
      </Paper>
    </Box>
  );
}
