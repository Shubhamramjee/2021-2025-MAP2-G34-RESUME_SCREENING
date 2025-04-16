
# 📄 AI-Powered Resume Screening System

## 🚀 Project Overview

In today's competitive job market, recruiters are overwhelmed by a high volume of applications for every job opening. Traditional resume screening methods are often time-consuming, inconsistent, and susceptible to unconscious bias. To tackle these challenges, this project introduces an **AI-powered Resume Screening System** that automates the candidate evaluation process using **Natural Language Processing (NLP)** and **Machine Learning (ML)**.

## 🎯 Objective

The goal of this system is to streamline recruitment by accurately analyzing resumes and ranking candidates based on job-specific requirements. This leads to reduced screening time, unbiased evaluation, and improved hiring efficiency.

## 🧠 Key Features

- ✅ **Automated Resume Parsing**: Extracts key information such as skills, work experience, education, and contact details from resumes in various formats (PDF, DOCX, Images).
- 🧠 **NLP-Based Analysis**: Uses state-of-the-art models (e.g., BERT, XLM-RoBERTa) to understand resume content and job descriptions.
- 📊 **Resume Ranking**: Evaluates and ranks candidates based on their relevance to a specific job description.
- 🌐 **Multilingual Support**: Understands resumes written in different languages.
- 📈 **Visualization Dashboard**: Displays resume scores, keyword matches, and other insights to aid recruiter decision-making.
- 🛠️ **Admin/Recruiter Panel**: View uploaded resumes, job matching scores, and filter top candidates.
- 💾 **Database Integration**: Stores resumes and screening results in a structured database (MySQL/PostgreSQL).
- 🌐 **Web-Based UI**: Intuitive interface built using React and Django for seamless user interaction.

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Django (Python), REST API
- **NLP/ML**: Transformers (BERT/XLM-R), Scikit-learn, spaCy, NLTK
- **Database**: MySQL / PostgreSQL
- **Other Tools**: PyMuPDF, python-docx, Tesseract OCR (for image-based resumes)

## 📁 Project Structure

```
resume-screening/
├── backend/                # Django backend
│   ├── models/             # ORM models for resumes and jobs
│   ├── api/                # Resume processing and ranking APIs
│   ├── nlp/                # NLP models and job-resume matching logic
├── frontend/               # React-based user interface
│   ├── components/         # Reusable UI components
│   ├── pages/              # Application pages
├── media/                  # Uploaded resume files
├── docs/                   # Documentation and diagrams
├── requirements.txt
└── README.md
```

## 🔍 How It Works

1. **Resume Upload**: User uploads a resume via the frontend.
2. **Data Extraction**: Backend parses the resume and extracts key details.
3. **Job Matching**: NLP model compares the resume with job descriptions.
4. **Scoring & Ranking**: Each resume is assigned a relevance score.
5. **Result Visualization**: Recruiter sees a ranked list with detailed metrics.

## ✅ Benefits

- ⏱️ **Faster Screening**: Reduces manual review time by up to 80%.
- ⚖️ **Bias Reduction**: Promotes fair evaluation based on data.
- 📊 **Insightful Reports**: Helps recruiters make better hiring decisions.
- 🔁 **Scalable**: Easily adaptable for large-scale enterprise hiring.

## 🚧 Future Enhancements

- Add support for candidate feedback and interview scheduling.
- Integrate with Applicant Tracking Systems (ATS).
- Enable resume clustering for bulk applicant profiling.
- Incorporate sentiment and personality analysis using behavioral NLP.

## 📌 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/resume-screening.git
cd resume-screening
```

### 2. Set Up Backend
```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 3. Set Up Frontend
```bash
cd ../frontend
npm install
npm start
```

### 4. Access the Web App
Navigate to `http://localhost:3000` in your browser.

## 🤝 Contributing

Contributions are welcome! Please open issues or pull requests for suggestions, improvements, or bug fixes.
