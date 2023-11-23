import email
from django.views import View
import json
from django.http import JsonResponse, HttpResponse
from .models import Colaborators, WhatsDetails
from django.db.models import Q
import requests


def sendWats(ticketQR, phone):
    url = f"http://ec2-18-205-238-236.compute-1.amazonaws.com:80/message/{phone}"
    # url = f"http://localhost:7000/message/{phone}"
    data = {"imageBase64": ticketQR}
    try:
        response = requests.post(url, json=data)
        # print(response.status_code)
        if response.status_code == 200:
            # response_json = response.json()
            # print(response_json)
            return 200
        else:
            print(f"Error: {response.status_code} - {response.text}")
            return 500
    except requests.exceptions.RequestException as e:
        print(f"***********Request WHATSAPP failed:********")
        return 500


class WhatsAppView(View):
    def post(self, request):
        jd = json.loads(request.body)
        phone = jd["phone"]
        ticketQR = jd["ticket"]
        url = f"http://ec2-18-205-238-236.compute-1.amazonaws.com:80/message/{phone}"
        data = {"imageBase64": ticketQR}
        try:
            response = requests.post(url, json=data)
            # print(response.status_code)
            if response.status_code == 200:
                # response_json = response.json()
                # print(response_json)
                return HttpResponse("oki", status=200)
            else:
                print(f"Error: {response.status_code} - {response.text}")
                return HttpResponse("badass", status=500)
        except requests.exceptions.RequestException as e:
            print(f"Request failed: {str(e)}")
            return HttpResponse("badass2", status=500)


class HandleCsvData(View):
    def post(self, request):
        jd = json.loads(request.body)
        Colaborators.objects.create(
            employee=jd["employee"],
            Noi=jd["noi"],
            area=jd["area"],
            name=jd["name"],
            known=True,
            location=2,
        )
        return HttpResponse("ok", 200)


class ColaboratorsView(View):
    def get(self, request, location=0):
        if location > 0:
            colaborators = list(Colaborators.objects.filter(location=location).values())
            return JsonResponse({"colabs": list(colaborators)})
        else:
            colaborators = Colaborators.objects.values()
            print(list(colaborators)[0]["asistencia"])
            return JsonResponse({"colabs": list(colaborators)})

    def post(self, request):
        jd = json.loads(request.body)
        # employee = jd["employee"]
        phone = jd["phone"]
        ticketQR = jd["ticket"]
        colaborator = Colaborators.objects.filter(phone=phone).first()
        if colaborator:
            return HttpResponse("forbidden", status=403)
        else:
            Colaborators.objects.create(
                phone=phone,
                ticket=ticketQR,
                name=jd["name"],
                email=jd["email"],
                asistencia=1,
                location=jd["location"],
                taxi=jd["taxi"],
            )
            whats_result = sendWats(ticketQR, phone)
            if whats_result == 200:
                return HttpResponse("success", status=200)
            else:
                WhatsDetails.objects.create(phone=jd["phone"], ticket=ticketQR)
                return HttpResponse("ok", status=200)

    def delete(self, request):
        jd = json.loads(request.body)
        colabs = jd["list_colabs"]
        print(colabs, "***********************")
        for colab_id in colabs:
            Colaborators.objects.filter(id=colab_id).delete()
        return HttpResponse("success", status=200)

        # colaborators = Colaborators.objects.filter(
        #     Q(phone=phone) | Q(employee=employee) | Q(Noi=employee)
        # )
        # send_whats = False
        # whats_result = 0
        # if colaborators.exists():
        #     print("found***")
        #     for colab in colaborators:
        #         if colab.asistencia < 1:
        #             print("modified****")
        #             send_whats = True
        #             colab.name = jd["name"]
        #             colab.ticket = ticketQR
        #             # jaajk
        #             colab.asistencia = 1
        #             colab.phone = jd["phone"]
        #             colab.location = jd["location"]
        #             colab.save()
        #             whats_result = sendWats(ticketQR, phone)
        #             break
        #     if send_whats:
        #         print("whats send tried")
        #         if whats_result == 200:
        #             return HttpResponse("ok", status=200)
        #         else:
        #             WhatsDetails.objects.create(
        #                 employee=jd["employee"], phone=jd["phone"], ticket=ticketQR
        #             )
        #             return HttpResponse("whats_failure", status=200)
        #     else:
        #         print("no need to send whats ")
        #         return HttpResponse("already sent", status=200)
        # else:
        #     print("created")
        #     Colaborators.objects.create(
        #         employee=employee,
        #         name=jd["name"],
        #         phone=jd.get("phone", ""),
        #         ticket=jd["ticket"],
        #         email=jd.get("email", ""),
        #         asistencia=1,
        #         location=jd["location"],
        #         known=False,
        #     )
        #     whats_result = sendWats(ticketQR, phone)
        #     if whats_result == 200:
        #         return HttpResponse("ok", status=200)
        #     else:
        #         WhatsDetails.objects.create(
        #             employee=jd["employee"], phone=jd["phone"], ticket=ticketQR
        #         )
        #         return HttpResponse("ok", status=200)

    def put(self, request):
        jd = json.loads(request.body)
        employee = jd["employee"]
        colaborator = Colaborators.objects.filter(Q(phone=employee)).first()
        if colaborator:
            colaborator.asistencia = 2
            colaborator.save()
            return HttpResponse("ok", status=200)
        else:
            return HttpResponse("employee not found", status=404)


"""
    location:
    1 lerma
    2 santiago
    3 cadereyta
    4 FX
"""

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
