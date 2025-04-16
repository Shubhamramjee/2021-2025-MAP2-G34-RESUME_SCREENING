
from rest_framework import viewsets # type: ignore
from .models import JobDescription, Resume
from .serializers import JobDescriptionSerializer, ResumeSerializer

class JobDescriptionViewSet(viewsets.ModelViewSet):
    queryset = JobDescription.objects.all()
    serializer_class = JobDescriptionSerializer

class ResumeViewSet(viewsets.ModelViewSet):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer

