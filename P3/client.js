//-- Traza de prueba
console.log("Hola!")

//-- Obtener el botón de VER del DOM
const ver = document.getElementById('ver')

//-- Obtener el párrafo del DOM donde mostrar el resultado
const resultado = document.getElementById('resultado');

//-- Cuando el usuario aprieta el botón de ver los productos
ver.onkeyup = ()=>{

  //-- Crear objeto para hacer peticiones AJAX
  const m = new XMLHttpRequest();

  var busqueda = document.getElementById('ver').value

  //-- Configurar la petición
  m.open("GET","http://127.0.0.1:8080/myquery?param1=" + busqueda, true);

  //-- Cuando la haya alguna noticia sobre la peticion
  //-- ejecuta este código
  m.onreadystatechange=function(){
     //-- Petición enviada y recibida. Todo OK!
     if (m.readyState==4 && m.status==200){

       //-- La respuesta es un objeto JSON
       let productos = JSON.parse(m.responseText)

       //-- Borrar el resultado anterior que hubiese en el párrafo
       //-- de resultado
       resultado.innerHTML = "";

       //--Recorrer los productos del objeto JSON
       for (let i=0; i < productos.length; i++) {

         //-- Añadir cada producto al párrafo de visualización
         resultado.innerHTML += productos[i];

         //-- Separamos los productos por ',''
         if (i < productos.length-1) {
           resultado.innerHTML += ', ';
         }
       }
     }
   }

   //-- Enviar la petición!
   m.send();
}
