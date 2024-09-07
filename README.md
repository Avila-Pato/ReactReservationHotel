# ReactJS Reservation App

Este proyecto es una aplicación de reservas construida con React y diversas tecnologías modernas para ofrecer una experiencia de usuario ágil y escalable. La aplicación permite a los usuarios buscar y ver información sobre hoteles, utilizando datos obtenidos desde un servidor local.

## Características

- **Sistema de Reservas**: Permite a los usuarios visualizar una lista de hoteles y acceder a información detallada sobre cada uno.
- **Frontend Moderno**: Construido con React y Vite, proporcionando una interfaz de usuario rápida y eficiente.
- **Consultas de Datos**: Utiliza `React Query` para la gestión de estados asíncronos, facilitando la obtención de datos del servidor.
- **MUI para el Diseño**: Usa Material UI (MUI) para proporcionar una interfaz visual limpia y atractiva.
- **Formularios**: Implementación de formularios reactivos con `react-hook-form` para una experiencia de usuario fluida.
- **Estado Global**: Manejo del estado de la aplicación utilizando `zustand` para una gestión eficiente del estado global.
- **Notificaciones**: `react-hot-toast` para mostrar notificaciones dinámicas en la aplicación.

## Tecnologías Utilizadas

### Frontend
- **React**: Biblioteca principal para construir la interfaz de usuario.
- **Vite**: Herramienta de desarrollo rápida para aplicaciones web modernas.
- **MUI (Material UI)**: Framework de diseño para crear interfaces responsivas y elegantes.
- **React Query**: Biblioteca para la gestión de estados asíncronos, optimizada para el fetching de datos.
- **React Hook Form**: Librería para la gestión eficiente de formularios en React.
- **Wouter**: Enrutador ligero para manejar la navegación en la aplicación.
- **Zustand**: Librería para la gestión del estado global en aplicaciones React.
- **React Hot Toast**: Librería de notificaciones para mostrar alertas y mensajes a los usuarios.

### Backend
- **JSON Server**: Simulación de un servidor backend para la gestión de datos locales. Ideal para desarrollo y pruebas.

## Scripts Disponibles

- `dev`: Inicia la aplicación en modo de desarrollo usando Vite.
- `build`: Crea una versión optimizada de la aplicación para producción.
- `lint`: Ejecuta ESLint para encontrar problemas en el código.
- `preview`: Muestra una vista previa de la aplicación optimizada después de la compilación.
- `server`: Inicia un servidor JSON local para servir los datos de hoteles desde `db.json`.

## Dependencias

### Producción
- `@emotion/react`, `@emotion/styled`: Utilizadas para manejar estilos con Material UI.
- `@fontsource/roboto`: Fuente utilizada para la tipografía principal.
- `@mui/icons-material`: Iconos de Material UI.
- `@mui/material`: Componentes de Material UI para el diseño de la interfaz.
- `@tanstack/react-query`: Librería de manejo de datos y caché para consultas a APIs.
- `react`, `react-dom`: Librerías fundamentales de React para construir interfaces interactivas.
- `react-hook-form`: Manejo de formularios reactivos en React.
- `react-hot-toast`: Notificaciones instantáneas y elegantes en la interfaz.
- `wouter`: Enrutador ligero para navegación en aplicaciones React.
- `zustand`: Librería de manejo de estado global.

### Desarrollo
- `@vitejs/plugin-react`: Integración de React con Vite.
- `eslint`: Herramienta de análisis de código estático para asegurar buenas prácticas.
- `json-server`: Herramienta para crear una API REST falsa rápidamente.
- `vite`: Herramienta de desarrollo rápida y ligera.

## Cómo ejecutar el proyecto

1. Clona este repositorio.
2. Instala las dependencias con `npm install`.
3. Inicia el servidor JSON con el comando `npm run server`.
4. Corre la aplicación en modo de desarrollo con `npm run dev`.
5. Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación en el navegador.

## Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de abrir un _issue_ o enviar un _pull request_.

## Licencia

Este proyecto está bajo la licencia MIT.
