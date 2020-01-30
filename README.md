# 2020-dblandit-tp-api-rest

API REST para la empresa DBlandIT.

**Crear cursos**
----
  Crea un nuevo curso.

* **ENDPOINT**

  `POST` /cursos

* **Data Params**

    ```json
        { 
            "anio": 2020, 
            "duracion": 60, 
            "tema": "BigData", 
            "alumnos": [{ "nombre": "Kevin", "apellido": "Szuchet", "dni": "12345678", "direccion": "Av. Siempreviva 123", "nota": 10 }] 
        }
    ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json
        { 
            "_id": "87afdjladg87f6sa", 
            "anio": 2020, 
            "duracion": 60, 
            "tema": "BigData", 
            "alumnos": [{ "_id": "asfiauf897af", "nombre": "Kevin", "apellido": "Szuchet", "dni": "12345678", "direccion": "Av. Siempreviva 123", "nota": 10 }]
        }
    ```
 
* **Error Response:**

  * **Code:** 400 - BAD REQUEST <br />
    **Content:** `{ error : "El {año/duración} debe ser numérico" || "El {año/duración} debe ser positivo" || "Debe elegir el tema del curso" }`

**Eliminar un curso**
----
  Elimina un curso existente.

* **ENDPOINT**

  `DELETE` /cursos/:id

* **Success Response:**

  * **Code:** 204
 
* **Error Response:**

  * **Code:** 404 - BAD REQUEST <br />
    **Content:** `{ error : "El curso solicitado no existe" }`

## Listar los cursos (permitiendo filtrar por su duración y año de dictado) en formato JSON
## Obtener los alumnos de un curso en formato JSON.
## Saber cuál fue el alumno que se destacó en un curso (el que tenga mayor nota).

