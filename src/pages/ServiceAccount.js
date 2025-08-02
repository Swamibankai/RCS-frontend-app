
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

// Placeholder function to simulate generating an API key
const generateApiKey = () => {
  return 'RCS-KEY-' + Math.random().toString(36).substr(2, 16).toUpperCase();
};

export default function ServiceAccount() {
  const [apiKey, setApiKey] = useState('');

  const handleGenerateKey = () => {
    const newKey = generateApiKey();
    setApiKey(newKey);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(apiKey);
    alert('API Key copied to clipboard!');
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Service Account
      </Typography>
      <Typography variant="body1" gutterBottom>
        Generate an API key to integrate with your services.
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Button variant="contained" onClick={handleGenerateKey}>
          Generate API Key
        </Button>
      </Box>
      {apiKey && (
        <Box sx={{ mt: 3, maxWidth: 600 }}>
          <Typography variant="h6" gutterBottom>
            Your New API Key:
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={apiKey}
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleCopyToClipboard} edge="end">
                    <FileCopyIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Typography variant="caption" display="block" sx={{ mt: 1 }}>
            Please save this key securely. You will not be able to see it again.
          </Typography>
        </Box>
      )}
    </Box>
  );
}
