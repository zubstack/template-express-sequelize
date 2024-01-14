# Express & Sequelize Template

For Postgres databases

## Steps

- Run `npm install`
- Set up `.env` and `docker-compose.yml` files
- Run migrations
  - `npm run migrations:run`
  - `npx sequelize-cli db:create --env "test"`
- Recommended: check requests in `.requests` file

**Workflow:**

- Run `docker-compose up -d`
- Run `npm run dev`

## Rest Client

**Decks**

```bash
GET http://localhost:4000/api/v1/decks
###
GET http://localhost:4000/api/v1/decks/:id
###
GET http://localhost:4000/api/v1/decks/cards/:id
###
POST http://localhost:4000/api/v1/decks
Content-Type: application/json

{
  "topic": "fruits"
}
###
DELETE  http://localhost:4000/api/v1/decks/:id
###
PATCH http://localhost:4000/api/v1/decks/:id
Content-Type: application/json

{
  "topic": "little fruits"
}
```

Cards

```bash

GET http://localhost:4000/api/v1/cards
###
GET http://localhost:4000/api/v1/cards/:id
###
POST http://localhost:4000/api/v1/cards/
content-type: application/json

{
  "question":"mango",
  "answer":"yellow",
  "deck_id":1
}
###
DELETE http://localhost:4000/api/v1/cards/:id
###
PATCH  http://localhost:4000/api/v1/cards/:id
content-type: application/json

{
  "question":"manguito",
}

```

#### Docker Compose Commands

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

#### Comandos de Docker Compose

| Command                                                                | Description                           |
| ---------------------------------------------------------------------- | ------------------------------------- |
| `psql -h localhost -d blog_database -U lobato`                         | Connect to PostgreSQL                 |
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

### Scripts para el "migration handler"

| Comando               | Descripción                                          |
| --------------------- | ---------------------------------------------------- |
| `migrations:generate` | Genera una migración Sequelize con un nombre dado.   |
| `migrations:run`      | Ejecuta las migraciones Sequelize pendientes.        |
| `migrations:revert`   | Revierte la última migración Sequelize ejecutada.    |
| `migrations:delete`   | Revierte todas las migraciones Sequelize ejecutadas. |

## Relaciones

![Relacion uno a muchos](/public/image.png)
