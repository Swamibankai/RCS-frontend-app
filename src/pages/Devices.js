
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// Function to send a test message via the mock backend
const sendTestRcsMessage = async (device, message) => {
  try {
    const response = await fetch('http://localhost:5000/api/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ device, message }),
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
    } else {
      alert(data.message || 'Failed to send message');
    }
  } catch (error) {
    console.error('Error sending message:', error);
    alert('An error occurred while sending the message. Please check the backend server.');
  }
};

export default function Devices() {
  const [device, setDevice] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (device && message) {
      sendTestRcsMessage(device, message);
      setDevice('');
      setMessage('');
    } else {
      alert('Please enter a device and a message.');
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Test Devices
      </Typography>
      <Typography variant="body1" gutterBottom>
        Send a test message to a device.
      </Typography>
      <Box sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Device MSISDN"
          variant="outlined"
          value={device}
          onChange={(e) => setDevice(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleSend}>
          Send Test Message
        </Button>
      </Box>
    </Box>
  );
}
