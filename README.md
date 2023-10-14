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

22. Resolvemos el problema de cors para un cliente de otro origen. En el caso de ser una api "privada" manejar un whitelist.

### Postgres SQL intregation

#### Comandos de Docker Compose

| Comando                                    | Descripción                                                                                          |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| `docker-compose build`                     | Construye o reconstruye las imágenes de los servicios definidos en el archivo `docker-compose.yml`.  |
| `docker-compose pull`                      | Descarga las imágenes especificadas en el archivo `docker-compose.yml` sin iniciar los contenedores. |
| `docker-compose logs`                      | Muestra los registros (logs) de los servicios en ejecución. Puedes usar opciones para filtrarlos.    |
| `docker-compose exec <servicio> <comando>` | Ejecuta                                                                                              |
| un contenedor de servicio específico.      |
| `docker-compose stop`                      | Detiene los contenedores, pero no los elimina. Puedes usar `docker-compose start` para reanudarlos.  |
| `docker-compose restart`                   | Reinicia los contenedores que están definidos en el archivo `docker-compose.yml`.                    |
| `docker-compose down -v`                   | Detiene y elimina los servicios y contenedores, incluyendo volúmenes (datos persistentes).           |
| `docker-compose up --build`                | Inicia los servicios y reconstruye las imágenes si es necesario.                                     |
| `docker-compose up -d`                     | Inicia los servicios en modo "demonio" (background).                                                 |

23. Configuramos el servicio que levantaremos con docker en un "docker-compose.yml"
24. Corremos el servicio con el comando de docker compose correspondiente

Nota: Por defecto, docker no persiste informacion de sus servicios, todo se elimina cuando el contenedor es dado de baja (down).Para cumplir su funcion de persistencia requiere que especifiquemos un sitio de "volumen" donde la informacion se guardara.

25. Configuramos ubicacion del directorio del volumen que persiste informacion e lo incluimos en el .gitignore.

Nota: En el directorio del "volumen" no solo persiste la data sino tambien la configuracion, por lo que que cualquier cambio (de usuario, nombre de la databse, password) a la ultima implicaria ELIMINAR el directorio "volumen".

#### Comandos de Docker Compose

| Command                                                                | Description                           |
| ---------------------------------------------------------------------- | ------------------------------------- |
| `psql -U <POSTGRES_USER>`                                              | Connect to PostgreSQL as a user       |
| `createdb <DATABASE_NAME>`                                             | Create a new PostgreSQL database      |
| `psql -d <DATABASE_NAME>`                                              | Connect to a specific database        |
| `\l`                                                                   | List all databases                    |
| `\c <DATABASE_NAME>`                                                   | Connect to a different database       |
| `\dt`                                                                  | List all tables in the current schema |
| `\d <TABLE_NAME>`                                                      | Describe a specific table             |
| `SELECT * FROM <TABLE_NAME>;`                                          | Retrieve data from a table            |
| `INSERT INTO <TABLE_NAME> (column1, column2) VALUES (value1, value2);` | Insert data into a table              |
| `UPDATE <TABLE_NAME> SET column1 = value1 WHERE condition;`            | Update data in a table                |
| `DELETE FROM <TABLE_NAME> WHERE condition;`                            | Delete data from a table              |
| `\q`                                                                   | Quit the PostgreSQL command-line tool |

26. Agregamos informacion de pruba a nuestra base de datos, sea por bash o por la insterfaz grafica.

## Integración de node-postgres

Driver de integracion:

- npm install pg

27. Creamos el directorio "lib" para manejar coneccion a terceros.
28. Creamos un archivo "postgres.js" donde obtendremos un enlace a nuestra base de datos por medio de instanciar la clase "Client" y agregarle las credenciales pertinentes para establecer la conexion.

Observacion: Al crear una instancia de cliente, le agregamos paramtros como credenciales, ejecutamos su metodo connection() y la ponemos a disposicion. Este objeto "client" tiene la capacidad de hacer "querys" DIRECTAMENTE a nuestra base de datos en tiempo real. Muy curioso.

Recomendacion: Es mucho mejor manejar un "pool" de conexiones que generar una conexion por cada request del cliente. El "pool" nos permite manejar multiples conexiones reutilizando la misma primera.

29. Para hacer mis primeras practicas con un CRUD conectado por pooling a una autentica base de datos, habilite una nueva entidad "persons".
30. Habilite los endpoints del CRUD de persons que directamente opera con la postgresDB.
31. Habilite los test para probar los endpoints de la entidad "persons".
32. Implementamos buenas practicas al manejar los parametros de la conexion por medio de variables de entorno para proteger sus valores.

Permite incluir variables de entorno desde un archivo .env:

- npm install dotenv

### ORM - Sequelize

- npm install --save sequelize
- npm install --save pg-hstore

33. Cambio la conexion por pooling por una conexion sequelize, que me permite jugar con SQL querys con OOP. Sequelize incluye la estrategia del pooling internamente.

### Sequelize Models

- npm install --save-dev sequelize-cli

34. Inicializo el sequelize-cli (despues de hacer la configuracion respectiva en el .sequelizerc) y este crea una carpeta database con las carpetas "migrations","models","seeders" y archivo "config.js" (Todavia no tego bien entendido sus propositos)

Nota: Uno de los usos mas utiles de un ORM es que te permite hacer consultas sin jugar con SQL directamente. Esto lo consigues a traves de metodos dentro de los modelos respectivos de cada identidad.

35. Establezco un setupModels() en el index de /models con el fin de "inicializar" el schema y concretar la configuracion que estoy apunto de detallar

36. Establezco el modelo de "persons"

- Creo un schema de la entidad.
- Extiendo la clase Model de sequelize (a la que llame 'Person') y configuro mediante parametros algunos detalles, entre ellos, el nombre de la tabla.

Nota: Otra funcion muy util es la de sequelize.sync(), la que usa la configuracion de la que estaba recien hablando para sincronizar. En un primer caso, esto crea la tabla 'persons' automaticamente si no existe y esto apenas corra el programa principal.Pese a esto, no recomienda usarlo en "produccion"

37. setupModels() hace funcion dentro del mismo archivo donde invoco la conexion sequelize, ya que necesita esta ultima para su configuracion.

38. Establezco la syncronizacion de la que hable previamente. Ahora puedo cambiar mis services para que usen el "model" y no "sequelize" directamente.

39. Reconfiguro el service de "persons" para que funcione mediante los metodos que vienen en estos modelos.
