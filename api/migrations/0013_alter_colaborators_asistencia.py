# Generated by Django 4.1.1 on 2023-11-16 22:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_alter_colaborators_asistencia'),
    ]

    operations = [
        migrations.AlterField(
            model_name='colaborators',
            name='asistencia',
            field=models.IntegerField(default=0, verbose_name='Asistencia'),
        ),
    ]
