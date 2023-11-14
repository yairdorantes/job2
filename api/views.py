# Create your views here.
from django.views import View
import json
from django.http import JsonResponse, HttpResponse
from .models import Colaborators


# from django.contrib.auth import authenticate


class ColaboratorsView(View):
    def get(self, request):
        colaborators = list(Colaborators.objects.values())
        return JsonResponse({"colabs": colaborators})

    def post(self, request):
        jd = json.loads(request.body)
        colaborator = Colaborators.objects.create(
            employee=jd["employee"], name=jd["name"], lastname=jd["lastname"]
        )
        return HttpResponse("oki", 200)
