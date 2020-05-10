//-- Puerto donde recibir las peticiones
const PUERTO = 8080;


//-- Modulos a usar
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');


//-- Funcion para atender a una Peticion
//-- req: Mensaje de solicitud
//-- res: Mensaje de respuesta
function peticion(req, res) {

  //-- Mostrar en la consola el recurso al que se accede
  const q = url.parse(req.url, true);
  console.log("Petición: " + q.pathname)

  let filename = q.pathname
  let final = path.extname(q.pathname)
  let productos = ["BREKKIES BUEY","BREKKIES PESCADO","ULTIMA POLLO","","PURINA POLLO"];

  //-- Leer las cookies
  const cookie = req.headers.cookie;
  console.log("Cookie: " + cookie)


  function RCookie(cookiee,cname){
    if (cookie){
      let array = cookiee.split(";");
      var name = cname + "=";

      for(var i=0;i < array.length;i++){
        var c = array[i];
        while(c.charAt(0)==' '){
          c = c.substring(1);
        }
        if(c.indexOf(name)== 0){
          return decodeURIComponent(c.substring(name.length,c.length));
        }
      }
      return null;
    }else{
      return null;
    }
  }

  //-- Segun el recurso al que se accede
  switch (q.pathname) {

    //-- Pagina principal
    case "/":

      if (cookie){
        var user=RCookie(cookie,"user")
        //-- No hay ninguna cookie
        if (user == "Juanma") {
          console.log(user)
          filename = "tienda.html"
          filename = "./" + filename

        } else {
          console.log("unknown")
          filename = "login.html"
          filename = "./" + filename
        }

      }else{
        console.log("No cookie")
        filename = "login.html"
        filename = "./" + filename
      }
      res.statusCode = 200;

      break;

    //-- Pagina de acceso
    case "/login":
      content = "Registrado! Cookie enviada al navegador!"
      filename = "tienda.html"
      filename = "./" + filename
      //-- ESTABLECER LA COOKIE!!
      res.setHeader('Set-Cookie', 'user=Juanma')
      break;

    case "/producto1":

        if (cookie){
          var user = RCookie(cookie, "user")
          if (user == "Juanma"){
            console.log("Producto 1 añadido");
            filename = "producto1.html"
            filename = "./" + filename

            var carrito = RCookie(cookie, "carrito")
            if (!carrito){
              res.setHeader('Set-Cookie', 'carrito=BrekkiesJ')
            }else{
              new_cookie = 'carrito=BrekkiesJ&' + carrito
              res.setHeader('Set-Cookie', new_cookie)
            }

          }else{
            console.log("unknown")
            filename = "login.html"
            filename = "./" + filename

            res.statusCode = 200;
          }

        }else{
          console.log("No cookie")
          filename = "login.html"
          filename = "./" + filename

          res.statusCode = 200;
        }

        break;

    case "/producto2":

      if (cookie){
        var user = RCookie(cookie, "user")
        if (user == "Juanma"){
          console.log("Producto 2 añadido");
          filename = "producto2.html"
          filename = "./" + filename

          var carrito = RCookie(cookie, "carrito")
          if (!carrito){
            res.setHeader('Set-Cookie', 'carrito=BrekkiesP')
          }else{
            new_cookie = 'carrito=BrekkiesP&' + carrito
            res.setHeader('Set-Cookie', new_cookie)
          }

        }else{
          console.log("unknown")
          filename = "login.html"
          filename = "./" + filename

          res.statusCode = 200;
        }

      }else{
        console.log("No cookie")
        filename = "login.html"
        filename = "./" + filename

        res.statusCode = 200;
      }

      break;

    case "/producto3":

      if (cookie){
        var user = RCookie(cookie, "user")
        if (user == "Juanma"){
          console.log("Producto 3 añadido");
          filename = "producto3.html"
          filename = "./" + filename

          var carrito = RCookie(cookie, "carrito")
          if (!carrito){
            res.setHeader('Set-Cookie', 'carrito=Ultima')
          }else{
            new_cookie = 'carrito=Ultima&' + carrito
            res.setHeader('Set-Cookie', new_cookie)
          }

        }else{
          console.log("unknown")
          filename = "login.html"
          filename = "./" + filename

          res.statusCode = 200;
        }

      }else{
        console.log("No cookie")
        filename = "login.html"
        filename = "./" + filename

        res.statusCode = 200;
      }

      break;

    case "/producto4":

      if (cookie){
        var user = RCookie(cookie, "user")
        if (user == "Juanma"){
          console.log("Producto 4 añadido");
          filename = "producto4.html"
          filename = "./" + filename

          var carrito = RCookie(cookie, "carrito")
          if (!carrito){
            res.setHeader('Set-Cookie', 'carrito=Purina')
          }else{
            new_cookie = 'carrito=Purina&' + carrito
            res.setHeader('Set-Cookie', new_cookie)
          }

        }else{
          console.log("unknown")
          filename = "login.html"
          filename = "./" + filename

          res.statusCode = 200;
        }

      }else{
        console.log("No cookie")
        filename = "login.html"
        filename = "./" + filename

        res.statusCode = 200;
      }

      break;

      case "/myform":
       if (req.method === 'POST'){

         var content = `
         <!DOCTYPE html>
         <html lang="es">
         <link rel="stylesheet" href="formulario.css" type="text/css">
            <head>
              <meta charset="utf-8">
              <title>PEDIDO</title>
            </head>
            <body>
              <h3>`

        req.on('data', chunk => {

          data = chunk.toString();

          var datos = data.split('&')
          console.log(datos)

          content += "DATOS USUARIO:" + '<br>' + '<br>';

          for (var j = 0; j < datos.length; j++){
            content += "·   " + datos[j].replace("+"," ") + '<br>' + '<br>';
          }
        var carrito = RCookie(cookie, "carrito")
        if (!carrito){
          pedido = "No hay ningún articulo en la cesta"
        }else{
           pedido = ""

          var array = carrito.split("&");

          var nproducto1 = 0
          var nproducto2 = 0
          var nproducto3 = 0
          var nproducto4 = 0

          for (var i = 0; i < array.length; i++){

            if(array[i] == "BrekkiesJ"){
              nproducto1 += 1;
            }else if (array[i] == "BrekkiesP") {
              nproducto2 += 1;
            }else if (array[i] == "Ultima") {
              nproducto3 += 1;
            }else if (array[i] == "Purina") {
              nproducto4 += 1;
            }
          }
          if (nproducto1 > 0){
            pedido = "BrekkiesJ: " + nproducto1 + " unidades" + '<br>' + pedido
          }
          if (nproducto2 > 0){
            pedido = "BrekkiesP: " + nproducto2 + " unidades" + '<br>' + pedido
          }
          if (nproducto3 > 0){
            pedido = "Ultima: " + nproducto3 + " unidades" + '<br>' + pedido
          }
          if (nproducto4 > 0){
            pedido = "Purina: " + nproducto4 + " unidades" + '<br>' + pedido
          }
        }
        content += "<h3> TU PEDIDO:  </h3>" + "<h4>" + pedido + "<h4>" + "<h3> Ha sido registrado con exito </h3>";
        content += `
            </h3>
            <a class="carrito" href="/">Pagina principal</a>
          </body>
        </html>
        `
        res.statusCode = 200;
      });

      req.on('end', () =>{
        res.setHeader('Content-Type', 'text/html')
        res.write(content);
        res.end();
      });
      return
      }

      break;

      case "/client.js":

        filename = "/client.js"
        filename = "./" + filename

      break;


      case "/myquery":

        const params = q.query;

        content = "[ "

        if (params.param1 != ""){
          for(var i=0;i<productos.length;i++){

            if(productos[i].startsWith(params.param1.toUpperCase())){
              if (content == "[ "){
              content += JSON.stringify(productos[i]);
            }else{
              content += ","
              content += JSON.stringify(productos[i]);
            }
            }
          }
        }

        content += " ]";
        console.log(content)

        res.setHeader('Content-Type', 'application/json')
        res.write(content);
        res.end();
        return
      break;

    //-- Se intenta acceder a un recurso que no existe
    default:
      filename = q.pathname
      filename = "./" + filename
  }


//-- FICHERO
fs.readFile(filename, function(err, data) {

  //-- Fichero no encontrado. Devolver mensaje de error
  if (err) {
    res.writeHead(404, {'Content-Type': 'text/html'});
    return res.end("404 Not Found");
  }

  //-- Tipo mime por defecto: html
  let mime = ""

  if (final == ".css"){
    mime = "text/css"
  }else if (final == ".jpg"){
    mime = "image/jpg"
  }else {
    mime = "text/html"
  }

  //-- Generar el mensaje de respuesta
  res.setHeader('Content-Type', mime)
  res.write(data);
  res.end();
});
}

//-- Inicializar el servidor
//-- Cada vez que recibe una petición
//-- invoca a la funcion peticion para atenderla
const server = http.createServer(peticion)

//-- Configurar el servidor para escuchar en el
//-- puerto establecido
server.listen(PUERTO);

console.log("Servidor LISTO!")
console.log("Escuchando en puerto: " + PUERTO)
