from django.contrib import admin
from .models import Colaborators, WhatsDetails


from django.contrib import admin
from .models import Colaborators, WhatsDetails


class ColaboratorsAdmin(admin.ModelAdmin):
    search_fields = ["name", "employee", "Noi"]


admin.site.register(Colaborators, ColaboratorsAdmin)
admin.site.register(WhatsDetails)
