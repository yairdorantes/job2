# Generated by Django 4.1.1 on 2023-02-04 00:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='musicians',
            name='phone',
            field=models.CharField(max_length=15, verbose_name='Numero telefonico'),
        ),
    ]