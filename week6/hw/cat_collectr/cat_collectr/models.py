from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Cat(models.Model):
    name = models.CharField(max_length=100)
    breed = models.CharField(max_length=100)
    age = models.PositiveIntegerField()
    image = models.TextField()
    cat_parent = models.ForeignKey(User, on_delete = models.CASCADE, related_name='cats')
