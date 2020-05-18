from django.contrib import admin

# Register your models here.
from mi_tienda.models import Producto
from mi_tienda.models import Pedido

admin.site.register(Producto)
admin.site.register(Pedido)
