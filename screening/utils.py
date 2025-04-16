# screening/utils.py
import google.generativeai as genai # type: ignore
import os
from sklearn.metrics.pairwise import cosine_similarity # type: ignore
from django.conf import settings
import numpy as np # type: ignore

API_KEY = os.getenv('GEMINI_API_KEY') or getattr(settings, 'GEMINI_API_KEY', None)

if not API_KEY:
    raise ValueError("Gemini API key not found. Set GOOGLE_API_KEY in .env or settings.py.")

genai.configure(api_key=API_KEY)  # Configure Gemini


def get_embedding(text):
    model = 'models/embedding-001'
    result = genai.embed_content(model=model, content=text, task_type="retrieval_document")
    return result['embedding']

def calculate_similarity(job_desc, resume_text):
    job_embedding = np.array(get_embedding(job_desc)).reshape(1, -1)
    resume_embedding = np.array(get_embedding(resume_text)).reshape(1, -1)
    return cosine_similarity(job_embedding, resume_embedding)[0][0]

# screening/utils.py
import docx # type: ignore
from pdfminer.high_level import extract_text # type: ignore

def extract_text_from_file(file):
    if file.name.endswith('.pdf'):
        return extract_text(file)
    elif file.name.endswith('.docx'):
        doc = docx.Document(file)
        return "\n".join([para.text for para in doc.paragraphs])
    else:
        raise ValueError("Unsupported file format. Use PDF or DOCX.")