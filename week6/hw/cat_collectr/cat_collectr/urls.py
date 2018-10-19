# CatCollectr/CatCollectr/urls.py
from django.urls import path
from django.contrib import admin
from cat_collectr import views

urlpatterns = [
	path('admin/', admin.site.urls),
	# add the line below to your urlpatterns array
	path('', views.index, name='index')
]
