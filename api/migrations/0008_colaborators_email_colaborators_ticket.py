# Generated by Django 4.1.1 on 2023-11-16 19:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_colaborators_asistencia'),
    ]

    operations = [
        migrations.AddField(
            model_name='colaborators',
            name='email',
            field=models.EmailField(default='example@example.com', max_length=254, verbose_name='Email'),
        ),
        migrations.AddField(
            model_name='colaborators',
            name='ticket',
            field=models.TextField(blank=True, null=True, verbose_name='Ticket'),
        ),
    ]
