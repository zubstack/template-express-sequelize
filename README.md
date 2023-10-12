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
