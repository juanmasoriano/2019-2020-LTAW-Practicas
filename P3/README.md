# Práctica 3

Funcionamiento:

1. Acceder al directorio de mi tienda.
2. Ejecutar node server.js para arrancar el servidor.
3. Desde el navegador acceder a localhost:8080/ que cargará la página principal.
4. Para añadir un producto al carrito pulsamos en el botón de añadir al carrito que tiene cada producto, crearemos así la cookie para luego poder leerlo.
5. Si pulsamos el botón carrito situdo en la parte superior de cada página accederemos a un formulario en el que introducir nuestros datos de envío. Al enviar este formulario nos aparecerá un resumen del pedido.
6. Pulsando en el botón búsqueda accederemos a una página en la que podremos encontrar los productos de la tienda. Mediante peticiones AJAX se mostrarán los posibles resultados según los carácteres que hayamos escrito.
7. La primera vez que accedemos a la tienda se creará una cookie user.

La tienda tiene 4 productos: Brekkies Jamón, Brekkies Pescado, Ultima pollo y Purina pollo, para acceder a ellos lo podremos hacer desde la página principal, desde la pestaña de Alimentacion o desde la pestaña de pienso. El resto de pestañas no están activas salvo la de mojada que nos conduce a otros productos aún sin implementar.
