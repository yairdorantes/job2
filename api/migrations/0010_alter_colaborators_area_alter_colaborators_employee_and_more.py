# Generated by Django 4.1.1 on 2023-11-16 20:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_remove_colaborators_lastname'),
    ]

    operations = [
        migrations.AlterField(
            model_name='colaborators',
            name='area',
            field=models.CharField(blank=True, default='', max_length=200, null=True, verbose_name='Area'),
        ),
        migrations.AlterField(
            model_name='colaborators',
            name='employee',
            field=models.IntegerField(blank=True, default=0, null=True, verbose_name='Employee ID'),
        ),
        migrations.AlterField(
            model_name='colaborators',
            name='location',
            field=models.CharField(blank=True, default='', max_length=200, null=True, verbose_name='Planta'),
        ),
        migrations.AlterField(
            model_name='colaborators',
            name='name',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Name'),
        ),
        migrations.AlterField(
            model_name='colaborators',
            name='position',
            field=models.CharField(blank=True, default='', max_length=200, null=True, verbose_name='Puesto'),
        ),
    ]