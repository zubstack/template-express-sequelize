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

Controladores: Encontramos los routes y middlewaresponse.
Los controladores acceden a la capa de servicios
Servicios: donde se encuentra la lógica de negocio
Los servicios usan las librerías.
Las librerías se encargan de contactarse a la capa de entidades
Las librerías se contactan a otras fuentes de datos: API externa o base de datos.

8. Creamos la capa de servicios de tal forma que los "routers" solo brinden acceso y queden fuera de logica de negocio.
9. Implemnetamos sintaxis "try/catch" para manejar errores de peticion.
10. Incluimos la carpeta de middlewares que empieza con dos de "tipo error"; uno captura y logea en consola y el otro captura y responde (con formato) al cleinte.

Nota: Siempre se define los middlewares de tipo error despues de los de tipo routing.

11. Manejamos los "catch" en los routers pasandolos al siguiente middleware (next(error))

To organize error responses:

- npm install @hapi/boom

12. Optimizamos el manejo de errores con un middleware que utiliza boom error handler.

To data validation:

- npm install joi

13. Ajustamos nuestros requisitos creando schemas de Joi para cada identidad y "subesquemas" depiendo de la informacion necesaria para realizar cierta accion.
14. Validamos la data que proviene desde el cliente usando un middleware que valida empleando schemas.

Imported from Full Stack Open:

- logger (info, error) to avoid using console.log everywhere.
- logger request to see more details
- "unknown endpoint" middleware
- Testing

### Testing

To testing:

- npm install jest

Puedes simular solicitudes HTTP a tus rutas de Express directamente desde tus pruebas.Esto te permite probar cómo responde tu aplicación a diferentes solicitudes y entradas:

- npm install supertest

15. Creamos un archivo de pruebas para los posts en la carpeta de "tests".
16. Modificamos scripts en el package.json (start, dev, test) para especificar en que entorno se encuentra corriendo la app.
17. Agragamos teardown.js para que los tests finalizen apropiadamente.
18. Separamos a index.js (launcher) y app.js.
19. Volvemos al "port" dinamico segun el entorno de la app. Con esto nos evitamos colisiones cuando dos entornos distintos corran al mismo tiempo.
20. Elaboramos distintos "test" para posibles esenarios de respuesta de los endpoints de nuestra api.

To eliminate the try/catch syntax:

- npm install express-async-errors

21. Eliminamos nuestra dependencia de try/catch ya que las excepciones (catch) son manejadas por otro middleware detras de escenas. Simplifica mucho el codigo en los routers

To solution cors:

- npm install cors

22. Resolvemos el problema de cors para un cliente de otro origen.
