# Create your views here.
from django.views import View
import json
from django.http import JsonResponse, HttpResponse
from .models import Colaborators


# from django.contrib.auth import authenticate


class ColaboratorsView(View):
    def get(self, request):
        colaborators = Colaborators.objects.values().order_by("-asistencia")
        return JsonResponse({"colabs": list(colaborators)})

    def post(self, request):
        jd = json.loads(request.body)

        employee = jd["employee"]
        colaborator = Colaborators.objects.filter(employee=employee)
        if colaborator:
            print(colaborator)

        else:
            print("no")
        return HttpResponse("ok", 200)

        # colaborator = Colaborators.objects.create(
        #     employee=jd["employee"],
        #     name=jd["name"],
        #     phone=jd["phone"],
        #     ticket=jd["ticket"],
        #     email=jd["email"],
        # )
        # colaborator = Colaborators.objects.create(
        #     employee=jd["employee"],
        #     name=jd["name"],
        #     area=jd["area"],
        #     position=jd["position"],
        # )
        # print(jd)

        return HttpResponse("oki", 200)
