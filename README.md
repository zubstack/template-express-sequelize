## List of dependencies:

### Initial dependencies:

- npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier pritter -D
- npm i express

To get random user names:

- npm install --save-dev @faker-js/faker

1. Define las entidades: posts, categories y habilita GET para obtener datos
2. Separa las rutas relacionadas con cada entidad
3. Definir ruta padre para facilitar versionado: http://localhost:4000/api/v1/posts
4. Habiltar: app.use(express.json()) para cuando se recibe contenido desde el cliente/
5. Habilitar: POST de posts (temporal)
6. Habilitar: PATCH/DELETE de posts (temporal)
7. Establecemos códigos de estado para algunos casos de peticion.

Flujo de trabajo:

Controladores: Encontramos los routes y middlewares.
Los controladores acceden a la capa de servicios
Servicios: donde se encuentra la lógica de negocio
Los servicios usan las librerías.
Las librerías se encargan de contactarse a la capa de entidades
Las librerías se contactan a otras fuentes de datos: API externa o base de datos.

8. Creamos la capa de servicios de tal forma que los "routers" solo brinden acceso y queden fuera de logica de negocio.
