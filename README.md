# Descripción de la tarea
Este proyecto consiste en:
### 3. Proyecto Pequeño

**Descripción del Proyecto**:

Desarrolla una aplicación web llamada **"Task Manager"** que permita a los usuarios gestionar sus tareas diarias. La aplicación debe incluir las siguientes características:

#### Backend

- **API**:
  - Endpoints para gestionar tareas (CRUD).
  - Autenticación de usuarios para proteger las rutas de la API.
  
- **Base de Datos**:
  - Usa una base de datos relacional (como PostgreSQL) o NoSQL (como MongoDB) para almacenar las tareas.
  - Define el esquema necesario para almacenar la información de las tareas y usuarios.

# INSTRUCCIONES para instalar, configurar y ejecutar la aplicación
Pasos previos
 - Paso 1) Tener Node.js y npm (Node Package Manager) instalados en tu máquina.
    se requerira usar una version 18.20.5 https://prnt.sc/F6qh6PnYwuiA
 - Paso 2) Tener levantando, montado una nueva Conexion a base de datos `MS SQL Server / SQL Server ajustes de conexión`
 final1
 final2.png

Pasos para correr la aplicación
 - Paso 1) npm install
 - Paso 2) npm run dev
 - Paso 3) Para detener el proyecto es ctrl + c luego sale una pregunta y ponemos S


Diagrama entidad relación
final3.png
Un usuario puede tener muchas tareas asignadas

Catalgo de APIS
 - LoginUser 
    url: http://localhost:3000/api/login
    method: Post
    body: {
        "username": "Glen",
        "password": "123"
    }
    final 4
 - GetTasks 
    url: http://localhost:3000/api/tasks
    method: Get
    Bearer Token: token
    final5

 - CreateTask 
    url: http://localhost:3000/api/task
    method: Post
    Bearer Token: token
    body: {
        "title": "Tarea 2",
        "status": "Pendiente",
        "description": "Mi dos tarea",
        "ownerId": 1
    }
    final6

 - EditTask 
    url: http://localhost:3000/api/task/28
    method: Put
    Bearer Token: token
    body: {
        "title": "Documentando API",
        "status": "Pendiente",
        "description": "Proceso de Documentación EDITADO",
        "ownerId": 1
    }
    final7

 - DeleteTask 
    url: http://localhost:3000/api/task/25
    method: Delete
    Bearer Token: token
    final8