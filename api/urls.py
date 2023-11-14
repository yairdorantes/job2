from django.urls import path
from .views import ColaboratorsView
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path("colabs", csrf_exempt(ColaboratorsView.as_view()), name="colabs"),
]
