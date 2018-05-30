from django.shortcuts import render, render_to_response
from django.http import HttpResponse
import datetime


# Create your views here.
def hello(request):
    return HttpResponse("这是俺的第一个Python网页")


def current_datetime(request):
    now = datetime.datetime.now()
    html = "<html><body>It is now %s.</body></html>" % now
    return HttpResponse(html)


def hours(request, offset):
    offset = int(offset)
    dt = datetime.datetime.now() + datetime.timedelta(hours=offset)
    html = "<html><body>In %s hour(s), it will be %s.</body></html>" % (offset, dt)
    return HttpResponse(html)


def index(request):
    return render_to_response('index.html')


def blog_index(request):
    return render_to_response('blogs/blog_index.html')


def life_index(request):
    return render_to_response('lifes/life_index.html')


def other_index(request):
    return render_to_response('other/other_index.html')
