import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const Dot = styled('div')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'inline-block',
  margin: '0 5px',
  animation: 'blink 1.5s infinite step-start',
}));

const BlinkingDots = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', height: '1rem' }}>
    <Dot sx={{ background: '#686868' }} />
    <Dot sx={{ animationDelay: '0.3s', background: '#686868' }} />
    <Dot sx={{ animationDelay: '0.6s', background: '#686868' }} />
    <style>
      {`
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}
    </style>
  </Box>
);

export default BlinkingDots;
