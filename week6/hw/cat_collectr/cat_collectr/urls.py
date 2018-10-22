from django.urls import path
from . import views

urlpatterns = [
    path('', views.cats, name='cats'),
    path('my_cats', views.my_cats, name='my_cats'),
    path('add_cat', views.add_cat, name='add_cat')
]
