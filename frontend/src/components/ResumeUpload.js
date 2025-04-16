import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, Paper, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const ResumeUpload = () => {
  const [file, setFile] = useState(null);
  const [jobId, setJobId] = useState('');
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get('http://localhost:8000/api/job-descriptions/');
      setJobs(response.data);
    };
    fetchJobs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('job', jobId);

    try {
      await axios.post('http://localhost:8000/api/resumes/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Resume Uploaded Successfully!');
      setFile(null);
      setJobId('');
    } catch (error) {
      alert('Error uploading resume!');
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>Upload Resume</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel>Select Job</InputLabel>
          <Select
            value={jobId}
            onChange={(e) => setJobId(e.target.value)}
            required
          >
            {jobs.map((job) => (
              <MenuItem key={job.id} value={job.id}>{job.title}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          component="label"
          fullWidth
          sx={{ mt: 2, mb: 2 }}
        >
          Upload Resume
          <input
            type="file"
            hidden
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </Button>
        {file && <Typography variant="body2">Selected: {file.name}</Typography>}
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Paper>
  );
};

export default ResumeUpload;