# Generated by Django 4.1.1 on 2023-11-23 04:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_alter_colaborators_employee'),
    ]

    operations = [
        migrations.AddField(
            model_name='colaborators',
            name='NOI',
            field=models.CharField(blank=True, default='', max_length=100, null=True, verbose_name='NOI'),
        ),
        migrations.AlterField(
            model_name='colaborators',
            name='employee',
            field=models.CharField(blank=True, default='', max_length=100, null=True, verbose_name='WEB'),
        ),
    ]