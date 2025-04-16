from django.apps import AppConfig # type: ignore


class ScreeningConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'screening'



    def ready(self):
        import screening.signals