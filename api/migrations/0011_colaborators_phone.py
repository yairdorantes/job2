# Generated by Django 4.1.1 on 2023-11-16 21:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_alter_colaborators_area_alter_colaborators_employee_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='colaborators',
            name='phone',
            field=models.IntegerField(default=0, verbose_name='Celular'),
        ),
    ]
