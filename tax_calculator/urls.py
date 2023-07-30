from django.urls import path
from . import views

urlpatterns = [
    path('calculate-tax/', views.CalculateTaxView.as_view(), name='calculate-tax'),
]