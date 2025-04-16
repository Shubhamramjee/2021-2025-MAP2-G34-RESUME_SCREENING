# screening/signals.py
from django.db.models.signals import post_save # type: ignore
from django.dispatch import receiver # type: ignore
from .models import Resume
from .utils import calculate_similarity, extract_text_from_file
import PyPDF2

@receiver(post_save, sender=Resume)
def update_resume_score(sender, instance, **kwargs):
    try:
        job_desc = instance.job.description
        resume_file = instance.file  # This is a FieldFile object

        # Read PDF file
        if resume_file.name.endswith('.pdf'):
            pdf_reader = PyPDF2.PdfReader(resume_file)
            resume_text = ""
            for page in pdf_reader.pages:
                resume_text += page.extract_text()
        else:
            # Handle .txt or other formats
            resume_text = resume_file.read().decode('utf-8')

        # Calculate similarity
        similarity_score = calculate_similarity(job_desc, resume_text)
        instance.score = similarity_score
        instance.save()  # Update score without recursion
    except Exception as e:
        print(f"Error processing file: {e}")