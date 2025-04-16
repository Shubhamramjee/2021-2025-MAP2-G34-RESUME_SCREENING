from django.db import models # type: ignore

class JobDescription(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()

class Resume(models.Model):
    job = models.ForeignKey(JobDescription, on_delete=models.CASCADE)
    file = models.FileField(upload_to='resumes/')
    score = models.FloatField(default=0.0)