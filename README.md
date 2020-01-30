# 2020-dblandit-tp-api-rest

API REST para la empresa DBlandIT.

**Crear cursos**
----
  Crea un nuevo curso

* **ENDPOINT**

  `POST` /cursos

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
        { 
            _id: "87afdjladg87f6sa", 
            anio: 2020, 
            duracion: 60, 
            tema: "BigData", 
            alumnos: [{ _id: "asfiauf897af", nota: 10 }, { _id: "asfiauf897af", nota: 9.5 }] 
        }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "El {año/duración} debe ser numérico" || "El {año/duración} debe ser positivo" || "Debe elegir el tema del curso" }`

## Eliminar cursos

## Listar los cursos (permitiendo filtrar por su duración y año de dictado) en formato JSON
## Obtener los alumnos de un curso en formato JSON.
## Saber cuál fue el alumno que se destacó en un curso (el que tenga mayor nota).

