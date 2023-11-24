from django.db import models


# Create your models here.
class Colaborators(models.Model):
    # TODO THIS IS FOR LERMA
    employee = models.CharField(
        verbose_name="WEB", default="", blank=True, null=True, max_length=100
    )
    Noi = models.CharField(
        verbose_name="NOI", default="", blank=True, null=True, max_length=100
    )
    name = models.CharField(verbose_name="Name", max_length=200, blank=True, null=True)
    # lastname = models.CharField(verbose_name="Last Name", max_length=200, default="")
    area = models.CharField(
        max_length=200, verbose_name="Area", default="", blank=True, null=True
    )
    position = models.CharField(
        max_length=200, verbose_name="Puesto", default="", blank=True, null=True
    )
    location = models.IntegerField(
        verbose_name="Planta", default=0, blank=True, null=True
    )

    phone = models.IntegerField(verbose_name="Celular", default=0)
    asistencia = models.IntegerField(default=0, verbose_name="Asistencia")
    email = models.EmailField(default="example@example.com", verbose_name="Email")
    ticket = models.TextField(verbose_name="Ticket", blank=True, null=True)
    known = models.BooleanField(verbose_name="Known", default=False)
    taxi = models.BooleanField(verbose_name="Taxi", default=False)
    # clients_ip=cha

    def __str__(self):
        return self.name

    """
    location:
    1 lerma
    2 santiago
    3 cadereyta
    4 FX
    """


class WhatsDetails(models.Model):
    phone = models.IntegerField(verbose_name="Celular", default=0)
    employee = models.IntegerField(
        verbose_name="Employee ID", default=0, blank=True, null=True
    )
    ticket = models.TextField(verbose_name="Ticket", blank=True, null=True)

    def __str__(self):
        return str(self.phone)
