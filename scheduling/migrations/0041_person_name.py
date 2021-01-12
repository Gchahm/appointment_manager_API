# Generated by Django 3.0.7 on 2020-12-16 08:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scheduling', '0040_auto_20201202_1645'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.RunSQL("update scheduling_person SET name = concat(first_name, ' ', last_name)")
    ]