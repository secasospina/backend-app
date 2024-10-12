# Backend de Votación de Personajes

Este proyecto es el backend para la aplicación de votación de personajes, implementando funcionalidades clave para manejar la lógica de negocio, almacenamiento de datos y comunicación con el frontend. Utiliza tecnologías modernas como MongoDB Atlas, Nestjs, TypeScript.
Implementamos una estructura de carpeta modular

## Tecnologías Utilizadas

- **MongoDB Atlas**
- **TypeScript**
-**NestJS**

## Características
- **Interacción con la API**: Se han implementado endpoints para manejar personajes, gestionar votaciones y obtener estadísticas, como identificar al personaje más votado. También se incluye una API relacionada con Naruto.
- **Administración de Personajes**: Facilita la posibilidad de agregar votos y buscar información sobre personajes.
- **Sistema de Votación**: Los usuarios pueden expresar su opinión sobre los personajes mediante las opciones "me gusta" o "no me gusta".
- **Estadísticas**: Calcula y presenta información sobre el personaje que ha recibido más votos positivos y negativos, así como el más recientemente votado.

## Ejecutando el proyecto:

Para correr este proyecto de manera local sigue los siguientes pasos:

1. Clona el repositorio:

   git clone https://github.com/secasospina/backend-app
   
2. Instala las dependencias:

   cd backend-app
   npm install  

3. Agregando las variables de entorno al proyecto.

- No olvides crear un archivo .env en el que debes incluir los valores necesarios para el proyecto de backend-app.
- Establece tu base de datos en MongoDB Atlas, consultando la sección "Configurar MongoDB Atlas para Aceptar Solicitudes Desde Cualquier IP" que aparece a continuación.

5. Ejecuta el servidor de desarrollo:

   npm run start:dev

## APIs Utilizadas

- [API de Rick y Morty](https://rickandmortyapi.com/)
- [API de Pokémon](https://pokeapi.co/)
- [API de Superhéroes](https://superheroapi.com/)
- [API de Naruto](https://narutodb.xyz/)

