from django.shortcuts import render
from django.template import Template, Context
from django.template.loader import get_template
# Create your views here.
# -- Fichero mi_tienda/views.py
from django.http import HttpResponse
from mi_tienda.models import Producto
from mi_tienda.models import Pedido

# -- Vista principal de mi tienda
# -- El nombre de la vista puede ser cualquiera. Nosotros lo hemos
# -- llamado index, pero se podría haber llamado pepito
def index(request):
    return render(request, 'tienda.html')
def Alimentacion(request):
    return render(request, 'Alimentacion.html')
def seca(request):
    return render(request, 'seca.html')
def mojada(request):
    return render(request, 'mojada.html')
def producto1(request):
    productos = Producto.objects.all()
    return render(request, 'producto1.html', {'precio':productos[0].precio,'nombre':productos[0].nombre,'stock':productos[0].stock})
def producto2(request):
    productos = Producto.objects.all()
    return render(request, 'producto2.html', {'precio':productos[1].precio,'nombre':productos[1].nombre,'stock':productos[1].stock})
def producto3(request):
    productos = Producto.objects.all()
    return render(request, 'producto3.html', {'precio':productos[2].precio,'nombre':productos[2].nombre,'stock':productos[2].stock})
def producto4(request):
    productos = Producto.objects.all()
    return render(request, 'producto4.html', {'precio':productos[3].precio,'nombre':productos[3].nombre,'stock':productos[3].stock})
def list2(request):
    productos = Producto.objects.all()
    return render(request, 'list2.html', {'productos':productos})
def formulario1(request):
    return render(request, 'formulario1.html', {})
def recepcion1(request):
    # -- Obtener el nombre de la persona
    persona = request.POST['nombre']
    articulo = request.POST['articulo']
    direccion = request.POST['direccion']
    # -- Imprimirlo en la consola del servidor
    print(f" PEDIDO RECIBIDO!!!  ----> {persona} + {articulo} + {direccion}")
    p = Pedido(nombre=persona , articulo=articulo)
    p.save()
    return HttpResponse("Datos recibidos!!.    Comprador: " + request.POST['nombre'] + "Articulo: " + request.POST['articulo'] + " Direccion: " + request.POST['direccion'])
def pedido(request):

    pedido = Pedido.objects.all()
    return render(request, 'pedido.html', {'pedido':pedido})
