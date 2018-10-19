# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import HttpResponse
from django.shortcuts import render



class Cat:
	def __init__(self, name, breed, description, age):
		self.name = name
		self.breed = breed
		self.description = description
		self.age = age

cats = [
	Cat('Lolo', 'tabby', 'foul little demon', 3),
	Cat('Sachi', 'tortoise shell', 'diluted tortoise shell', 0),
    Cat('Raven', 'black tripod', '3 legged cat', 4)
]

def index(request):
	return render(request, 'cat_collectr/index.html', {'cats': cats})
