from django.db import models


# Create your models here.


class Colaborators(models.Model):
    # TODO THIS IS FOR LERMA
    employee = models.IntegerField(verbose_name="Employee ID", default=0)
    name = models.CharField(verbose_name="Name", max_length=200)
    lastname = models.CharField(verbose_name="Last Name", max_length=200, default="")

    def __str__(self):
        return self.name
