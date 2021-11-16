# api-strapi-SouthernMinds
Requerimientos: 
-NodeJS v 14.0.0
-Visual Studio Code
.PostgreSQL

Abrir commandPrompt SQL, iniciar sesion y ejecutar: 
-CREATA DATABASE southernmindspruebtecnica;

Abrir el repositorio en VS Code, pararse sobre el directorio api-strapi-southernminds y ejecutar:
-yarn install o npm install 


Para inicializar panel de Strapi ejecutar:
yarn develop iniciar strapi

Inicio de sesion en Strapi:
user: southernmindspruebtecnica@gmail.com
pass: Admin54321


ruta para razas a usar por strapi
http://localhost:1337/razas (devuelve todas)

ruta para crear aniamal
http://localhost:1337/mascotas/nuevamascota/mascotas/nuevamascota/:nombre/:raza/:sexo/:edadAdulta/:mes/:aprox
