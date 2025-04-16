import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AI Resume Screening
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/add-job">Add Job</Button>
        <Button color="inherit" component={Link} to="/upload-resume">Upload Resume</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;