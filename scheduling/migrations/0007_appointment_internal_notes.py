# Generated by Django 3.0.5 on 2020-06-05 21:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scheduling', '0006_service_cost'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='internal_notes',
            field=models.TextField(blank=True, max_length=255, null=True),
        ),
    ]