// frontend/src/components/JobForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Box, Typography, Paper } from '@mui/material';

const JobForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8000/api/jobs/', { title, description });
    alert('Job Posted Successfully!');
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, maxWidth: 600, margin: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>Post a New Job</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Job Title"
          variant="outlined"
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          fullWidth
          label="Job Description"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Post Job
        </Button>
      </Box>
    </Paper>
  );
};

export default JobForm;