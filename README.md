\documentclass{article}
\usepackage[utf8]{inputenc}
\usepackage{hyperref}

\title{Backend de Votación de Personajes}
\author{}
\date{}

\begin{document}

\maketitle

\section{Descripción}
Este proyecto es el backend para la aplicación de votación de personajes, implementando funcionalidades clave para manejar la lógica de negocio, almacenamiento de datos y comunicación con el frontend. Utiliza tecnologías modernas como MongoDB Atlas, Next.js, TypeScript y Vite para ofrecer una solución robusta y escalable.

\section{Tecnologías Utilizadas}
\begin{itemize}
    \item \textbf{Next.js}: Utilizado para la creación de API routes que facilitan las operaciones CRUD y la lógica de votación.
    \item \textbf{MongoDB Atlas}: Base de datos NoSQL en la nube que almacena información de personajes y votos. Se utiliza la capa gratuita para el almacenamiento de datos.
    \item \textbf{TypeScript}: Lenguaje de programación tipado que mejora la confiabilidad y mantenibilidad del código.
    \item \textbf{Mongoose}: Librería de ODM (Object Data Modeling) para MongoDB y Node.js, facilitando la interacción con la base de datos.
    \item \textbf{Vite}: Utilizado como un builder o bundler para aplicaciones web, y en el caso específico de Vite con React se usa para crear y desarrollar proyectos React de manera rápida y eficiente.
\end{itemize}

\section{Características}
\begin{itemize}
    \item \textbf{Consumo de API}: Endpoints para gestionar personajes, votos y obtener estadísticas como el personaje más votado, entre otros. Además, se agrega la API de Naruto.
    \item \textbf{Gestión de Personajes}: Permite agregar votaciones y buscar personajes.
    \item \textbf{Votación}: Los usuarios pueden votar "me gusta" o "no me gusta" por los personajes.
    \item \textbf{Estadísticas}: Calcula y devuelve el personaje con más votos positivos, negativos, y el último votado.
\end{itemize}

\section{Cómo Empezar}
Para ejecutar este proyecto localmente sigue estos pasos:

\begin{enumerate}
    \item Clona el repositorio:
    \begin{verbatim}
    git clone https://github.com/secasospina/backend-app
    \end{verbatim}
    
    \item Instala las dependencias:
    \begin{verbatim}
    cd backend-app
    npm install
    \end{verbatim}

    \item Agrega tu archivo \texttt{.env} al proyecto.
    
    Recuerda crear un archivo \texttt{.env} donde deberás agregar los valores para el proyecto de \texttt{backend-app}.
    Configura tu base de datos en MongoDB Atlas, revisando el apartado de "Configurar MongoDB Atlas para Aceptar Solicitudes Desde Cualquier IP" que se encuentra a continuación.
    
    \item Ejecuta el servidor de desarrollo:
    \begin{verbatim}
    yarn start:dev
    \end{verbatim}
    (Si no tienes instaladas las dependencias: \texttt{yarn install}).
\end{enumerate}

\section{Documentación Postman}
Postman es una herramienta popular que facilita el desarrollo, prueba y documentación de APIs. Es muy utilizada por desarrolladores para interactuar con APIs durante el desarrollo de software, ya que permite enviar solicitudes HTTP y ver las respuestas sin necesidad de crear un cliente o interfaz.

Para acceder a la documentación de Postman, ejecuta la aplicación y accede a la siguiente dirección: \texttt{http://localhost:3001/}.

\section{Configurar MongoDB Atlas para Aceptar Solicitudes Desde Cualquier IP}
Para permitir que tu base de datos MongoDB Atlas reciba solicitudes desde cualquier dirección IP, sigue estos pasos:

\begin{enumerate}
    \item Inicia Sesión en MongoDB Atlas.
    \item Selecciona tu proyecto.
    \item Accede a la configuración de seguridad en la sección "Network Access".
    \item Añade una nueva regla de dirección IP con \texttt{0.0.0.0/0} para permitir acceso desde cualquier IP.
    \item Confirma y guarda los cambios.
\end{enumerate}

\textbf{Nota:} En un entorno de producción, es recomendable configurar la seguridad por dirección IP en lugar de permitir acceso desde cualquier IP.

\section{APIs Utilizadas}
\begin{itemize}
    \item API de Rick y Morty: \url{https://rickandmortyapi.com/}
    \item API de Pokémon: \url{https://pokeapi.co/}
    \item API de Superhéroes: \url{https://superheroapi.com/}
    \item API de Naruto: \url{https://narutodb.xyz/}
\end{itemize}

\end{document}

- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
