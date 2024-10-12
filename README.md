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

cd backend-app
npm install

2. Instala las dependencias:
  ```bash
cd backend-app
npm install
