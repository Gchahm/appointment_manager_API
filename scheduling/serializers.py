from rest_framework import serializers
from rest_framework.exceptions import PermissionDenied

from scheduling.customException import ModelCreationFailedException
from scheduling.customer.serializers import CustomerSerializer
from scheduling.models import Service, Employee, Appointment


class ServiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Service
        fields = '__all__'


class EmployeeSerializer(serializers.ModelSerializer):
    services = ServiceSerializer(many=True, read_only=True)

    class Meta:
        model = Employee
        fields = ('id', 'name', 'instagram', 'email', 'phone', 'services')


class AppointmentReadSerializer(serializers.ModelSerializer):

    customer = CustomerSerializer(read_only=True)
    employee = EmployeeSerializer(read_only=True)
    service = ServiceSerializer(read_only=True)

    class Meta:
        model = Appointment
        fields = ('start', 'end', 'employee', 'service', 'customer')


class AppointmentWriteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Appointment
        fields = ('start', 'end', 'employee', 'service', 'customer')

    def create(self, validated_data):
        try:
            appoint = Appointment.objects.create(**validated_data)
            return appoint
        except ModelCreationFailedException as e:
            raise PermissionDenied({"message": str(e)})
