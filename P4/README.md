# Práctica 4

Funcionamiento:

1. Acceder al directorio de la práctica y ejecutar node chat_server.js.
2. Desde el navegador acceder a http://localhost:8080/
3. Recibiremos un mensaje de bienvenida y el número de usuario que somos.
4. Para enviar un mensaje escribir y pulsar send. El mensaje aparecerá debajo y se enviará al resto de usuarios.
5. Si el mensaje comienza por /, se interpreterá como un comando y no se enviará al resto de usuarios. Cada comado generará una respuesta diferente según se pedía en el enunciado y se enviará al usuario que realizó esa petición.
6. Al conectarse o desconectarse un usuario se genera un mensaje en el terminal indicándolo.
