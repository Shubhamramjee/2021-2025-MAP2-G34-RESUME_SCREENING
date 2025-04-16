from django.urls import path, include # type: ignore
from rest_framework.routers import DefaultRouter # type: ignore
from .views import JobDescriptionViewSet, ResumeViewSet

router = DefaultRouter()
router.register(r'job-descriptions', JobDescriptionViewSet)
router.register(r'resumes', ResumeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]