# Generated by Django 3.0.7 on 2020-06-26 19:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scheduling', '0013_config'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='is_from',
            field=models.BooleanField(default=False),
        ),
    ]