import requests
from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
# Purpose of views.py is to take incoming web request and return a response
# where we write all our endpoints

# for specific country: https://disease.sh/v3/covid-19/countries/Canada?strict=true
# for all countries: https://disease.sh/v3/covid-19/countries

# url: http://127.0.0.1:8000/api/getCountry?country={}
@api_view()
def getCountry(request): 
    url = "https://disease.sh/v3/covid-19/countries/{}?strict=true"
    print(request.query_params.get('country'))
    country = request.query_params.get('country')

    # response from the disease covid 19 API
    r = requests.get(url.format(country)).json()
    
    # print(request.data)
    # print(request.data['country'])

    # data that is needed
    country_data = {
        'cases': r['cases'],
        'deaths': r['deaths'],
        'recovered': r['recovered'],
        'country': r['country'],
        'flag': r['countryInfo']['flag']
    }

    return Response(country_data)

@api_view()
def getAllCountries(request):
    url = "https://disease.sh/v3/covid-19/countries"

    r = requests.get(url).json()

    return Response(r)