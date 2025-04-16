import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ResumeList = () => {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/resumes/");
        setResumes(response.data);
      } catch (error) {
        console.log(error);
        //TODO Add error showing Functionalty.
      }
    };
    fetchResumes();
  }, []);

  return (
    <Paper elevation={3} sx={{ padding: 3, margin: "auto", maxWidth: 800 }}>
      <Typography variant="h5" gutterBottom>
        Resume Rankings
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Job Title</TableCell>
              <TableCell>Resume File</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resumes?.map((resume) => (
              <TableRow key={resume.id}>
                <TableCell>{resume.job.title}</TableCell>
                <TableCell>{resume.file.split("/").pop()}</TableCell>
                <TableCell>{resume.score.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ResumeList;
