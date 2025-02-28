import React, { useState } from 'react';
import { TextField, Box, Typography, Paper } from '@mui/material';

const ColorConverter = () => {
  const [hex, setHex] = useState('');
  const [rgb, setRgb] = useState('');

  const handleHexChange = (e) => {
    const value = e.target.value;
    setHex(value);
    if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(value)) {
      const hexToRgb = (hex) => {
        let r = 0, g = 0, b = 0;
        if (hex.length === 4) {
          r = parseInt(hex[1] + hex[1], 16);
          g = parseInt(hex[2] + hex[2], 16);
          b = parseInt(hex[3] + hex[3], 16);
        } else if (hex.length === 7) {
          r = parseInt(hex[1] + hex[2], 16);
          g = parseInt(hex[3] + hex[4], 16);
          b = parseInt(hex[5] + hex[6], 16);
        }
        return `rgb(${r}, ${g}, ${b})`;
      };
      setRgb(hexToRgb(value));
    } else {
      setRgb('Invalid HEX');
    }
  };

  const handleRgbChange = (e) => {
    const value = e.target.value;
    setRgb(value);
    if (/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/.test(value)) {
      const rgbToHex = (rgb) => {
        const [r, g, b] = rgb.match(/\d+/g).map(Number);
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
      };
      setHex(rgbToHex(value));
    } else {
      setHex('Invalid RGB');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, width: 300 }}>
        <Typography variant="h5" gutterBottom>
          Color Converter
        </Typography>
        <TextField
          label="HEX"
          variant="outlined"
          fullWidth
          value={hex}
          onChange={handleHexChange}
          margin="normal"
        />
        <TextField
          label="RGB"
          variant="outlined"
          fullWidth
          value={rgb}
          onChange={handleRgbChange}
          margin="normal"
        />
        <Box
          sx={{
            width: '100%',
            height: 50,
            backgroundColor: rgb.startsWith('rgb') ? rgb : '#fff',
            mt: 2,
            border: '1px solid #ccc',
          }}
        />
      </Paper>
    </Box>
  );
};

export default ColorConverter;