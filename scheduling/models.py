from cloudinary.models import CloudinaryField
from django.db.models import Q

from scheduling.managers import *


class Company(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class TimeFrame(models.Model):
    start = models.TimeField()
    end = models.TimeField()
    shift = models.ForeignKey('Shift', on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id) + ' start: ' + self.start.__str__() + ', end: ' + self.end.__str__()


class Shift(models.Model):
    owner = models.ForeignKey(Company, on_delete=models.CASCADE)
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name


class Schedule(models.Model):
    owner = models.ForeignKey(Company, on_delete=models.CASCADE)
    name = models.CharField(max_length=20)
    mon = models.ForeignKey(Shift, on_delete=models.SET_NULL, null=True, blank=True, related_name='mon')
    tue = models.ForeignKey(Shift, on_delete=models.SET_NULL, null=True, blank=True, related_name='tue')
    wed = models.ForeignKey(Shift, on_delete=models.SET_NULL, null=True, blank=True, related_name='wed')
    thu = models.ForeignKey(Shift, on_delete=models.SET_NULL, null=True, blank=True, related_name='thu')
    fri = models.ForeignKey(Shift, on_delete=models.SET_NULL, null=True, blank=True, related_name='fri')
    sat = models.ForeignKey(Shift, on_delete=models.SET_NULL, null=True, blank=True, related_name='sat')
    sun = models.ForeignKey(Shift, on_delete=models.SET_NULL, null=True, blank=True, related_name='sun')

    # returns a tupple with the shifts in the order of date.weekday to make it easy to access
    def get_week(self):
        return self.mon, self.tue, self.wed, self.thu, self.fri, self.sat, self.sun

    def get_availability(self, date):
        shift = self.get_week()[date.weekday()]
        return [] if shift is None else shift.timeframe_set.all()

    def __str__(self):
        return self.name


# TODO: Add color field to allow services to be color coded
class Service(models.Model):
    owner = models.ForeignKey(Company, on_delete=models.CASCADE)
    name = models.CharField(max_length=120)
    duration = models.TimeField()
    color = models.CharField(max_length=7, default='#FFFFFF')
    description = models.CharField(max_length=255, blank=True, null=True)

    def duration_delta(self):
        return datetime.datetime.combine(datetime.datetime.min, self.duration) - datetime.datetime.min

    def __str__(self):
        return self.name


class Person(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    email = models.EmailField()

    def name(self):
        return self.first_name + ' ' + self.last_name

    def __str__(self):
        return self.name()


class Employee(Person):
    owner = models.ForeignKey(Company, on_delete=models.CASCADE)
    schedule = models.ForeignKey(Schedule, on_delete=models.SET_NULL, null=True, blank=True)
    services = models.ManyToManyField(Service)
    instagram = models.CharField(max_length=200, null=True)
    profile_img = CloudinaryField('image', null=True, blank=True)
    bio = models.TextField(max_length=600, null=True, blank=True)

    def email(self):
        return self.user.email

    def provides_service(self, service):
        return self.services.filter(id=service.id).first() is not None

    def get_availability(self, date):
        if self.schedule is None:
            return []
        return self.schedule.get_availability(date)

    def confirmed_appointments(self, start, end):
        appointments = self.service_provided.filter(start__gte=start, start__lte=end)
        return list(filter(lambda x: x.is_active(), appointments))

    # To be available the times must fit inside a frame and not overlap existing appointments
    def is_available(self, start, end):
        return self.__has_availability__(start, end) and not self.__is_overlapping__(start, end)

    # Check id the appointment fits inside a frame
    def __has_availability__(self, start, end):
        availability = self.get_availability(start.date())
        for frame in availability:
            if start.time() >= frame.start and end.time() <= frame.end:
                return True
        return False

    # Check if the appointment overlaps with any other appointment already booked.
    def __is_overlapping__(self, start, end):
        starts_or_ends_between = self.service_provided.filter(Q(start__gte=start, start__lt=end)
                                                              | Q(end__gt=start, end__lte=end))
        return len(list(filter(lambda x: x.is_active(), starts_or_ends_between))) > 0


class Customer(Person):
    owner = models.ForeignKey(Company, on_delete=models.CASCADE)


class Appointment(models.Model):
    PENDING = 'P'
    ACCEPTED = 'A'
    REJECTED = 'R'

    STATUS_CHOICES = [
        (PENDING, 'Pending'),
        (ACCEPTED, 'Accepted'),
        (REJECTED, 'Rejected'),
    ]

    start = models.DateTimeField()
    end = models.DateTimeField()
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='service_provided')
    customer = models.ForeignKey(Person, on_delete=models.CASCADE, related_name='service_received')
    service = models.ForeignKey(Service, on_delete=models.CASCADE, null=True)
    status = models.CharField(max_length=1, choices=STATUS_CHOICES, default=PENDING)
    customer_notes = models.TextField(max_length=255, null=True, blank=True)

    objects = AppointmentManager()

    def is_active(self):
        return self.status != Appointment.REJECTED

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None):
        if self.service:
            self.end = self.start + self.service.duration_delta()
        super().save(force_insert, force_update, using, update_fields)

    def __str__(self):
        return "{customer} on {date} from {start} to {end} {service} with {emp}. {status}".format(
            customer=self.customer,
            date=self.start.date(),
            start=self.start.time(),
            end=self.end.time(),
            service=self.service,
            emp=self.employee,
            status=self.status
        )
