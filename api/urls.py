from django.urls import path
from .views import ColaboratorsView, WhatsAppView, HandleCsvData, HandleAdminActions
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path("colabs", csrf_exempt(ColaboratorsView.as_view()), name="colabs"),
    path(
        "colabs/<int:location>", csrf_exempt(ColaboratorsView.as_view()), name="colabs"
    ),
    path("panel", csrf_exempt(HandleAdminActions.as_view()), name="panel"),
    path(
        "panel/<int:id_employee>",
        csrf_exempt(HandleAdminActions.as_view()),
        name="panel",
    ),
    path("wa", csrf_exempt(WhatsAppView.as_view()), name="WA"),
    path("csv", csrf_exempt(HandleCsvData.as_view()), name="csv"),
]
