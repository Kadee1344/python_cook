from django.http import HttpResponse
from django.template import loader


def index(request):
    template = loader.get_template('mysite/templates/index.html')
    print(loader)
    return HttpResponse(template.render(None, request))
