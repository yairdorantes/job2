# Generated by Django 4.1.1 on 2023-11-14 03:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_musicians_phone'),
    ]

    operations = [
        migrations.CreateModel(
            name='Colaborators',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Name')),
            ],
        ),
    ]
