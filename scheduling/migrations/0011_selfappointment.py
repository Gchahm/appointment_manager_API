# Generated by Django 2.2.3 on 2019-09-06 00:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('scheduling', '0010_baseappointment_end'),
    ]

    operations = [
        migrations.CreateModel(
            name='SelfAppointment',
            fields=[
                ('baseappointment_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='scheduling.BaseAppointment')),
                ('reason', models.TextField(blank=True, max_length=255, null=True)),
            ],
            bases=('scheduling.baseappointment',),
        ),
    ]