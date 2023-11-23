from django.urls import path
from .views import ColaboratorsView, WhatsAppView, HandleCsvData
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path("colabs", csrf_exempt(ColaboratorsView.as_view()), name="colabs"),
    path(
        "colabs/<int:location>", csrf_exempt(ColaboratorsView.as_view()), name="colabs"
    ),
    path("wa", csrf_exempt(WhatsAppView.as_view()), name="WA"),
    path("csv", csrf_exempt(HandleCsvData.as_view()), name="csv"),
]
