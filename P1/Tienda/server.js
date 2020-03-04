const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const PUERTO = 8080

//-- Configurar y lanzar el servidor. Por cada peticion recibida
//-- se imprime un mensaje en la consola
http.createServer((req, res) => {
  console.log("----------> Peticion recibida")
  let q = url.parse(req.url, true);

  console.log("Path completo:" + q.pathname)
  console.log("Terminación:" + path.extname(q.pathname))
  console.log("Recurso:" + q.pathname)


  let filename = q.pathname
  let final = path.extname(q.pathname)

  //-- Obtener fichero a devolver
  if (q.pathname == "/")
    filename = "tienda.html"
    filename = "./" + filename

  //-- Leer fichero
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
    }else if (final == ".png"){
      mime = "text/png"
    }else {
      mime = "text/html"
    }

    //-- Generar el mensaje de respuesta
    res.writeHead(200, {'Content-Type': mime});
    res.write(data);
    res.end();
  });


}).listen(PUERTO);

console.log("Servidor corriendo...")
console.log("Puerto: " + PUERTO)
