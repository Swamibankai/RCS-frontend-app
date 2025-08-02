
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Brands() {
  const [brandsInfo, setBrandsInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBrandsInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/brands');
        const data = await response.json();
        if (data.success) {
          setBrandsInfo(data.data);
        } else {
          setError(data.message || 'Failed to fetch brands information');
        }
      } catch (err) {
        setError('Network error or server not reachable');
      } finally {
        setLoading(false);
      }
    };

    fetchBrandsInfo();
  }, []);

  if (loading) {
    return <Typography>Loading brands...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Brands
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" gutterBottom>
          Manage the brands associated with your RCS Business Messaging account.
          You can add, edit, or remove brand profiles here.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Registered Brands: {brandsInfo.registeredBrands.join(', ') || 'None'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Pending Brands: {brandsInfo.pendingBrands.join(', ') || 'None'}
        </Typography>
      </Paper>
    </Box>
  );
}
