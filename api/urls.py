# store all urls local to this app (Api)

from django.urls import path
from .views import getCountry, getAllCountries # import endpoints from view.py

urlpatterns = [
    path('getCountry', getCountry), # call getCountry (from views.py)
    path('getAllCountries', getAllCountries)
]

# ***** 01/06/2022 -> 16:26