import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobDescriptionForm from './components/JobDescriptionForm';
import ResumeUpload from './components/ResumeUpload';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddJob from './pages/AddJob';
import UploadResume from './pages/UploadResume';
import JobForm from './components/JobForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/upload-resume" element={<UploadResume />} />
      </Routes>
    </Router>
  );
}

export default App;