import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

const JobDescriptionForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/job-descriptions/', { title, description });
      alert('Job Description Added Successfully!');
      setTitle('');
      setDescription('');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>Add Job Description</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Job Title"
          variant="outlined"
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
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
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Paper>
  );
};

export default JobDescriptionForm;