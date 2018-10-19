from django.urls import path
from . import views

urlpatterns = [
    path('', views.contacts_list, name='contacts_list'),
    path('<int:pk>/', views.contacts_show, name='contacts_show'),
]
