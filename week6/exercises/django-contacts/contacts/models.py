from django.db import models

# Python Datetime
from datetime import datetime

# Associate User to Contacts
from django.contrib.auth.models import User

# Create your models here.
class Contact(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name = 'contacts')
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    cell_phone = models.CharField(max_length=25)
    home_phone = models.CharField(max_length=25)
    work_phone = models.CharField(max_length=25)
    email = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    zipcode = models.CharField(max_length=50)
    date_added = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
