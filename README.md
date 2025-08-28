# Smart Resume Matcher

A web-based application that leverages **NLP (Natural Language Processing) and Machine Learning** to intelligently match resumes against job descriptions. The system automates candidate shortlisting by analyzing semantic similarity between job postings and applicant resumes.

## 🚀 Features

* Upload and parse resumes in structured format.
* Extract key skills, education, and experience using NLP.
* Match resumes to job descriptions with similarity scoring.
* Interactive frontend powered by **React + Vite**.
* Scalable backend with **Node.js + Express**.
* ML pipeline built with **Python (scikit-learn / transformers)**.

## 📂 Project Structure

```
Smart-Resume-Matcher/
│── backend/        # Node.js + Express backend
│── frontend/       # React + Vite frontend
└── README.md
```

## 🛠️ Tech Stack

* **Frontend:** React, Vite, Axios, TailwindCSS
* **Backend:** Node.js, Express, REST API
* **Machine Learning:** Python, NLP libraries (spaCy / scikit-learn / HuggingFace)

## ⚡ Installation & Setup

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### ML/AI Environment

```bash
cd scripts
pip install -r requirements.txt
```

## 📊 Workflow

1. Job description is uploaded or pasted.
2. Candidate resumes are uploaded in PDF/Docx format.
3. NLP pipeline extracts features from both.
4. Matching algorithm computes similarity score.
5. Results displayed on frontend with ranked candidates.

## 🎯 Future Enhancements

* Add support for multi-language resumes.
* Integration with LinkedIn or job portals.
* Advanced ML models for contextual similarity.
* Admin dashboard for analytics.
