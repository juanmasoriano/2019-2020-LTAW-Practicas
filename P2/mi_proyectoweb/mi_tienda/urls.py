from django.urls import path

# -- Importar todas las vistas de mi_tienda
from . import views

# -- Aquí se definen las URLs de nuestra tienda
# -- Metemos de momento sólo la principal (índice)

urlpatterns = [
    # -- Vista pricipal (índice)
    path('', views.index, name='index'),
    path('Alimentacion.html/', views.Alimentacion, name='Alimentacion'),
    path('seca.html/', views.seca, name='seca'),
    path('mojada.html/', views.mojada, name='mojada'),
    path('producto1.html/', views.producto1, name='producto1'),
    path('producto2.html/', views.producto2, name='producto2'),
    path('producto3.html/', views.producto3, name='producto3'),
    path('producto4.html/', views.producto4, name='producto4'),
    path('list2/', views.list2, name='list2'),
    path('formulario1/', views.formulario1, name='formulario1'),
    path('recepcion1/', views.recepcion1, name='reception1'),
]
