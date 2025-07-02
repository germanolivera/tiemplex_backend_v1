# Tiemplex
## Entrega de Backend 

1. Resumen ejecutivo
Tiemplex es una API REST en Node.js/Express que gestiona turnos y sucursales para una peluquería. Está pensada para ser consumida por un frontend operado por el personal de la peluquería, permitiendo:
	•	Registrar, listar, actualizar y eliminar turnos.
	•	Gestionar sucursales (CRUD).
	•	(Próximamente) Usuarios y servicios de peluquería.

2. Objetivos
	1.	Exponer endpoints REST para operaciones CRUD sobre turnos, sucursales, servicios y usuarios.
	2.	Mantener la lógica de negocio desacoplada de la capa HTTP y de los scripts SQL.
	3.	Preparar la base para evolucionar hacia autenticación, validación y despliegue.

3. Stack tecnológico
	•	Entorno: Node.js v18+ con Express 5.1.0
	•	Base de datos: MySQL (conector mysql2)
	•	Gestión de variables: dotenv  ￼
	•	CORS: librería cors para exposición de la API en distintos orígenes  ￼
	•	Desarrollo: nodemon para recarga automática (npm run dev)  ￼

4. Arquitectura y estructura de carpetas
../
├─ Base de Datos/                  ← Export SQL de la base usada
├─ controllers/                    ← capa HTTP:
│   ├ servicios.controller.js
│   ├ sucursal.controller.js
│   ├ turnos.controller.js
│   └ usuarios.controller.js
├─ routes/                         ← definición de rutas REST
│   ├ servicios.routes.js
│   ├ sucursal.routes.js
│   ├ turnos.routes.js
│   └ usuarios.routes.js
├─ services/                       ← lógica de negocio y acceso a datos
│   ├ servicios.service.js
│   ├ sucursal.service.js
│   ├ turnos.service.js
│   └ usuarios.service.js
├─ sql/                            ← SQL por recurso (SELECT/INSERT/UPDATE/DELETE)
│   ├ servicios/
│   │   └ listar_servicios.sql
│   ├ sucursal/
│   │   ├ insertar_sucursal.sql
│   │   ├ listar_sucursal.sql
│   │   ├ update_sucursal.sql
│   │   └ delete_sucursal.sql
│   └ turnos/
│       ├ insertar_turno.sql
│       ├ listar_turnos.sql
│       ├ listar_turnos_compl.sql
│       ├ update_turno.sql
│       └ delete_turno.sql
├─ src/
│   └ config/
│       └ db.js                   ← configuración de conexión MySQL
├─ utiles/
│   └ sqlLoader.js                ← utilidad para cargar query SQL desde archivos
├─ public/                         ← assets estáticos (utilizadas para probar conexiones desde backend, el front reprica sobre layout-UI)
├─ .env                            ← credenciales y puerto
├─ server.js                       ← punto de entrada: configura Express, CORS, body-parsing y monta rutas
└─ package.json                    ← dependencias y scripts  [oai_citation:3‡package.json](file-service://file-4vJxTHkfs8QCYy3NqHcHUZ)


1. Descripción de los módulos
	a. server.js: Carga dotenv, configura Express, middleware de CORS y JSON, monta rutas.
	b. config/db.js: Lee variables de entorno (DB_HOST, DB_USER, DB_PASS, DB_NAME) y crea un pool de conexiones con mysql2.
	c. sqlLoader.js: Función genérica que recibe módulo y nombre de archivo para retornar el texto SQL.
	d. Services: Cada recurso (turnos, sucursal…) expone métodos getAll, create, update, delete que llaman al pool con el SQL cargado.
	e. Controllers: Adaptan la petición HTTP a llamadas a los services, formatean respuestas y códigos de estado.
	f. Routes: Asignan verbos HTTP y paths (/turnos, /sucursal, etc.) a cada controlador.
	g. SQL: Carpeta bien organizada por recurso, facilita mantenimiento y revisiones de querys.

2. Flujo de datos (turno “listar”)
	1.	Cliente → GET /turnos
	2.	turnos.routes.js
	3.	turnos.controller.js → invoca turnosService.listarTurnos()
	4.	turnos.service.js → carga listar_turnos.sql via sqlLoader → ejecuta sobre pool MySQL
	5.	Resultado (array de turnos) → controller → responde JSON al cliente

3. Puntos fuertes
	•	Separación de capas (controllers/services/routes)
	•	Gestión de SQL externa en archivos: legible y versionable.
	•	Uso de pool de mysql2 para eficiencia de conexiones.
	•	Variables de entorno desacoplan configuración del código.

4. Áreas de mejora y recomendaciones: para escalado de la aplicación 
	1.	Validaciones de entrada: usar librerías como Joi o express-validator antes de llamar al servicio.
	2.	Manejo de errores centralizado: middleware para capturar excepciones y enviar respuestas consistentes.
	3.	Autenticación y autorización: JWT o sessions para proteger endpoints sensibles.
	4.	Documentación de API: Swagger/OpenAPI para que frontend y futuro equipo entiendan rutas y payloads.
	5.	Tests automatizados: unitarios (Mocha/Jest) para services y controllers.
	6.	Logs estructurados: integrar winston o similar para trazabilidad.
	7.	Migrations y seeds: usar knex o sequelize-cli para versionar esquema de BD.
	8.	Dockerización: contenedores para DB y backend, facilitando despliegue en nube.