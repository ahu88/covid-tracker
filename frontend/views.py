from django.shortcuts import render

# Create your views here.

# render index template and let React take over it
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')