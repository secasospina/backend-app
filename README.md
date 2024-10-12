# Backend de Votación de Personajes

Este proyecto es el backend para la aplicación de votación de personajes, implementando funcionalidades clave para manejar la lógica de negocio, almacenamiento de datos y comunicación con el frontend. Utiliza tecnologías modernas como MongoDB Atlas, Next.js, TypeScript y Vite para ofrecer una solución robusta y escalable.

## Tecnologías Utilizadas

- **Next.js**: Utilizado para la creación de API routes que facilitan las operaciones CRUD y la lógica de votación.
- **MongoDB Atlas**: Base de datos NoSQL en la nube que almacena información de personajes y votos. Se utiliza la capa gratuita para el almacenamiento de datos.
- **TypeScript**: Lenguaje de programación tipado que mejora la confiabilidad y mantenibilidad del código.
- **Mongoose**: Librería de ODM (Object Data Modeling) para MongoDB y Node.js, facilitando la interacción con la base de datos.
- **Vite**: Utilizado como un builder o bundler para aplicaciones web, y en el caso específico de Vite con React, se usa para crear y desarrollar proyectos React de manera rápida y eficiente.

## Características

- **Consumo de API**: Endpoints para gestionar personajes, votos y obtener estadísticas como el personaje más votado, entre otros. Además, se agrega la API de Naruto.
- **Gestión de Personajes**: Permite agregar votaciones y buscar personajes.
- **Votación**: Los usuarios pueden votar "me gusta" o "no me gusta" por los personajes.
- **Estadísticas**: Calcula y devuelve el personaje con más votos positivos, negativos y el último votado.

## Cómo Empezar

Para ejecutar este proyecto localmente sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/secasospina/backend-app
   
2. Instala las dependencias:
   ```bash
   cd backend-app
   npm install  

3. Agrega tu archivo .env al proyecto.

- Recuerda crear un archivo .env donde deberás agregar los valores para el proyecto de backend-app.
- Configura tu base de datos en MongoDB Atlas, revisando el apartado de "Configurar MongoDB Atlas para Aceptar Solicitudes Desde Cualquier IP" que se encuentra a continuación.

3. Instala las dependencias de Yarn
   ```bash
    yarn install

5. Ejecuta el servidor de desarrollo:
   ```bash
   yarn start:dev

(Si no tienes instaladas las dependencias: yarn install).

## Documentación Postman
Postman es una herramienta popular que facilita la desarrollo, prueba y documentación de APIs (interfaces de programación de aplicaciones). Es muy utilizada por desarrolladores para interactuar con APIs durante el desarrollo de software, ya que permite enviar solicitudes HTTP y ver las respuestas, sin la necesidad de crear un cliente o interfaz para hacer las solicitudes.
A continuación, se adjunta la representación del Postman de la aplicación. Para tener acceso a dicho Postman, es necesario ejecutar la aplicación y acceder a través de la siguiente dirección: http://localhost:3001/

## Configurar MongoDB Atlas para Aceptar Solicitudes Desde Cualquier IP
Para permitir que tu base de datos MongoDB Atlas reciba solicitudes desde cualquier dirección IP, debes seguir los siguientes pasos para modificar tu lista de direcciones IP permitidas en la configuración de seguridad de red.

## Pasos para Configurar el Acceso Desde Cualquier IP

1. Inicia Sesión en MongoDB Atlas
 - Visita [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) y accede con tu cuenta.
   
2. Selecciona tu Proyecto
- Una vez que hayas iniciado sesión, estarás en la página de inicio de Atlas. Aquí selecciona el proyecto que contiene el clúster al que deseas permitir el acceso desde cualquier IP.
  
3. Accede a la Configuración de Seguridad
- En el panel izquierdo busca la sección "Security" (Seguridad) y selecciona "Network Access" (Acceso de red).
  
4. Añade una Nueva Regla de Dirección IP
- En la página de "Network Access" verás un botón que dice "Add IP Address" (Añadir dirección IP). Haz clic en él.

5. Configura el Acceso Desde Cualquier IP
- En la ventana emergente, para permitir el acceso desde cualquier IP, introduce 0.0.0.0/0. Esta es una representación CIDR que engloba a todas las direcciones IP posibles.

6. Confirma y Guarda
- Después de ingresar 0.0.0.0/0, puedes darle un nombre descriptivo a la regla si lo deseas y luego haz clic en "Confirm" (Confirmar) para guardar la nueva configuración.

7- Espera a que se Apliquen los Cambios
- Puede tomar unos minutos para que la nueva regla de acceso de red se aplique completamente. Una vez hecho esto, tu clúster de MongoDB Atlas estará accesible desde cualquier dirección IP.

Nota: En caso de que esta configuración no sea exitosa, deberás agregar la IP de la máquina en la que se ejecute, siguiendo los pasos mencionados anteriormente. Esta configuración está pensada para fines de prueba, pero en un proyecto en producción, por seguridad es recomendable configurar el acceso por medio de una dirección IP específica.

## APIs Utilizadas

- [API de Rick y Morty](https://rickandmortyapi.com/)
- [API de Pokémon](https://pokeapi.co/)
- [API de Superhéroes](https://superheroapi.com/)
- [API de Naruto](https://narutodb.xyz/)

