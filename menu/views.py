from django.http import HttpResponse
from django.template import loader


def index(request):
    template = loader.get_template('menu/templates/menu/index.html')
    return HttpResponse(template.render(None, request))
