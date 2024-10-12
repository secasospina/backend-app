# Backend de Votación de Personajes

Este proyecto es el backend para la aplicación de votación de personajes, implementando funcionalidades clave para manejar la lógica de negocio, almacenamiento de datos y comunicación con el frontend. Utiliza tecnologías modernas como MongoDB Atlas, Nestjs, TypeScript.
Implementamos una estructura de carpeta modular

## Tecnologías Utilizadas

- **MongoDB Atlas**
- **TypeScript**
-**NestJS**

## Características
- **Interacción con la API**: Se han implementado endpoints para manejar personajes, gestionar votaciones y obtener Personsajes con mas likes y dislikes, como identificar al personaje más votado. También se incluye una API extra relacionada con Naruto.
  ### endpoints realizados
  ```
   * Personaje con mas like  🆗
   * Personaje con mas dislike 🆗
   * Ultimo personaje evaluado 🆗
   * Estatus de PIKACHU: quiero saber si pikachu (pokemon) existe en DB, los likes, dislike, etc etc (opcional PUNTOS EXTRA) 🆗
  ```

- **Administración de Personajes**: Facilita la posibilidad de agregar votos y buscar información sobre personajes.
- **Sistema de Votación**: Los usuarios pueden expresar su opinión sobre los personajes mediante las opciones "me gusta" o "no me gusta".
- **Estadísticas**: Calcula y presenta información sobre el personaje que ha recibido más votos positivos y negativos, así como el más recientemente votado.

## Ejecutando el proyecto:

Para correr este proyecto de manera local sigue los siguientes pasos:

1. Clona el repositorio:
  En nuestra  terminal corremos el siguiente comando  para clonar este repo
  
     `git clone https://github.com/secasospina/backend-app`
   
2. Instala las dependencias:
  una vez completado el paso enterior  nos metemos en la carpeta del proyecto e instalamos las dependencias asi
   * cd backend-app 
   * npm install  
  al ejecutar `cd backend-app ` nos estamos moviendo al directorio, si esta no es su ruta solo de dirige a ella 
  al ejecutar el comando `npm install` estamos bajando las dependecias usadas de nuestro proyecto

3. Agregando las variables de entorno al proyecto.
  Las variables de entorno son muy necesarias para mantener informacion sensible por eso se usan e aqui el paso a paso de como añadirlas
  ```
    1) crea un archivo que se llame .env en la raiz de tu proyecto
    2) una vez agregado agrega en tu archivo 
      MONGO_URI = VALOR_MANDADO_POR CORREO
   ```
  listo tu archivo deberia verse algo asi 
  ```
    MONGO_URI = mongodb+srv://....


  ```
5. Ejecutamos  el proyecto en modo desarrollo:

    ` npm run start:dev`

## APIs Utilizadas

- [API de Rick y Morty](https://rickandmortyapi.com/)
- [API de Pokémon](https://pokeapi.co/)
- [API de Superhéroes](https://superheroapi.com/)
- [API de Naruto](https://narutodb.xyz/)


## Documentacion en Postman 
  * Aqui encontraras el enlace a los endpoints del proyecto
- [Ver documentacion](https://documenter.getpostman.com/view/38942824/2sAXxS8X9e)


