# 2020-dblandit-tp-api-rest

API REST para la empresa DBlandIT.

**Listar los cursos**
----
  Lista los cursos existentes en base a los filtros solicitados.

* **ENDPOINT**

  `GET` /cursos
  
*  **Query Params**

   **Optional:**
 
   `duracion=[number]`

   `anio=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
        [
            { 
                "_id": "5e359ea10d297916bd30ef89", 
                "anio": 2020, 
                "duracion": 60, 
                "tema": "BigData", 
                "alumnos": [{ "_id": "5e359ea10d297916bd30efkla", "nombre": "Kevin", "apellido": "Szuchet", "dni": "12345678", "direccion": "Av. Siempreviva 123", "nota": 10 }]
            }                
        ]
    ```
 
* **Error Response:**

  * **Code:** 400 - BAD REQUEST <br />
    **Content:** `{ error : "El {año/duración} debe ser numérico" || "El {año/duración} debe ser positivo" || "Debe elegir el tema del curso" }`

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
            "_id": "5e359ea10d297916bd30efkla", 
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

  * **Code:** 404 - NOT FOUND <br />
    **Content:** `{ error : "El curso solicitado no existe" }`

**Listar alumnos de un curso**
----
  Lista los alumnos del curso solicitado en base a los filtros elegidos.

* **ENDPOINT**

  `GET` /cursos/:id/alumnos

*  **Query Params**

   **Optional:**
 
   `sortBy=[string {nombre,apellido,dni,nota}]`

   `sortType=[string {ASC, DESC, asc, desc}]`

   `limit=[integer]`

* **Success Response:**

  * **Code:** 200
    **Content:** 
    ```json
        [
            { 
                "_id": "5e359ea10d297916bd30ef89", 
                "nombre": "Kevin", 
                "apellido": "Szuchet", 
                "dni": "12345678", 
                "direccion": "Av. Siempreviva 123", 
                "nota": 10 
            }
        ]
    ```
 
* **Error Response:**

  * **Code:** 404 - NOT FOUND <br />
    **Content:** `{ error : "El curso solicitado no existe" }`
