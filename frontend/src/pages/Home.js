import React from 'react';
import { Box, Typography } from '@mui/material';
import ResumeList from '../components/ResumeList';

const Home = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>AI Resume Screening Dashboard</Typography>
      <ResumeList />
    </Box>
  );
};

export default Home;