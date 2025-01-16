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
 ![final2](https://github.com/user-attachments/assets/05581750-aacd-43f8-8796-a8294ba5b50e)
![final1](https://github.com/user-attachments/assets/692a0a66-102a-418e-92c6-a07a1c0d821f)


Pasos para correr la aplicación
 - Paso 1) npm install
 - Paso 2) npm run dev
 - Paso 3) Para detener el proyecto es ctrl + c luego sale una pregunta y ponemos S


Diagrama entidad relación
![final3](https://github.com/user-attachments/assets/db5a0995-3abd-4e7d-82b6-823b51888a31)

Un usuario puede tener muchas tareas asignadas

Catalgo de APIS
 - LoginUser 
    url: http://localhost:3000/api/login
    method: Post
    body: {
        "username": "Glen",
        "password": "123"
    }
    ![final4](https://github.com/user-attachments/assets/18da49fb-1b90-4553-a739-7111e661138c)

 - GetTasks 
    url: http://localhost:3000/api/tasks
    method: Get
    Bearer Token: token
    ![final5](https://github.com/user-attachments/assets/94d7d923-681c-43ce-b291-471b53455ded)


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
    ![final6](https://github.com/user-attachments/assets/e0a9f47a-2b1a-4b38-be47-58254b80c48b)


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
    ![final7](https://github.com/user-attachments/assets/cce211b1-e4e9-4ad4-bfec-fc78953d010d)


 - DeleteTask 
    url: http://localhost:3000/api/task/25
    method: Delete
    Bearer Token: token
    ![final8](https://github.com/user-attachments/assets/c66479ee-b39e-4fe4-bb85-64fbd126d047)
