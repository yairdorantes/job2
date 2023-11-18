# Create your views here.
from curses.ascii import HT
from django.views import View
import json
from django.http import JsonResponse, HttpResponse
from .models import Colaborators
from django.db.models import Q
import requests


class WhatsAppView(View):
    def post(self, request):
        jd = json.loads(request.body)
        employee = jd["employee"]
        phone = jd["phone"]
        ticketQR = jd["ticket"]
        url = "http://ec2-18-205-238-236.compute-1.amazonaws.com:80/message/7222"
        # Data to be sent in the POST request body
        data = {"imageBase64": "value2765"}

        try:
            response = requests.post(url, json=data)
            print(response.status_code)
            if response.status_code == 200:
                response_json = response.json()
                print(response_json)
            else:
                print(f"Error: {response.status_code} - {response.text}")
        except requests.exceptions.RequestException as e:
            print(f"Request failed: {str(e)}")
        return HttpResponse("oki", 200)


class ColaboratorsView(View):
    def get(self, request):
        colaborators = Colaborators.objects.values().order_by("-asistencia")
        return JsonResponse({"colabs": list(colaborators)})

    def post(self, request):
        jd = json.loads(request.body)
        employee = jd["employee"]
        phone = jd["phone"]
        ticketQR = jd["ticket"]
        colaborator = Colaborators.objects.filter(
            Q(employee=employee) | Q(phone=phone)
        ).first()
        if colaborator:
            if colaborator.ticket == "":
                colaborator.ticket = ticketQR
                colaborator.asistencia = 1
                colaborator.save()
                return HttpResponse("ok", status=200)
            else:
                return HttpResponse("forbidden gfgdgdg", status=403)
        else:
            Colaborators.objects.create(
                employee=jd["employee"],
                name=jd["name"],
                phone=jd["phone"],
                ticket=jd["ticket"],
                email=jd["email"],
                asistencia=1,
            )
            return HttpResponse("ok", status=200)

    def put(self, request):
        jd = json.loads(request.body)
        employee = jd["employee"]
        colaborator = Colaborators.objects.filter(Q(employee=employee)).first()
        if colaborator:
            colaborator.asistencia = 2
            colaborator.save()
            return HttpResponse("ok", status=200)
        else:
            return HttpResponse("employee not found", status=404)


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

# return HttpResponse("oki", 200)
