# API sobre Turismo 🏖️☀️.
### Curro Castro Gomez - Trabajo Final de Lenguaje de Marcas. 1º DAM - Stafformacion.

---

Este proyecto trata sobre elaborar una **API REST** hecha con sobre todo **Node.js** y **Express**, en mi caso la he hecho sobre mi ciudad natal que es **Tarifa (Cádiz)** y sus lugares/actividades mas importantes.

---

## 🏝️🏰 Temática: Turismo En la ciudad de Tarifa
Como ya he dicho antes, abordando desde sus sitios mas miticos, hasta sus actividades.

La API gestiona dos recursos relacionados:

1.  **El recurso principal (Sitios):** Playas, monumentos, lugares y demas de Tarifa, con por ejemplo la info de aforo tipico o puntuacion general de la gente.
2.  **El secundario (Actividades):** Son basicamente las experiencias/lo que se puede hacer en cada sitio, por ejemplo, si se trata de una playa se podra hacer Kitesurf, visitar la playa, tomar el sol, etc. esto se hara mediante el campo ID (en este caso del sitio) ya que es el principal.

---

## 🔢 Estructura de Datos (Atributos planteados para el recurso principal)

He puesto unos 10 atributos, que son los que considero mas importantes.
Cada **Sitio Turístico** contendra:

*   `id`: Un Identificador (único). **`number`**
*   `nombre`: El nombre del sitio. **`string`**
*   `tipo`: Categoría (Playa, Monumento, Restaurante, etc). **`CategoriaSitio (enum)`**
*   `vientoIdeal`: SOLO Para el caso de las playas (Levante o Poniente). **`string`**
*   `DificultadAcceso`: La dificultad de acceso por varios factores al lugar (Alta, Media y Baja). **` DificultadAcceso (enum)`**
*   `puntuacion`: Valoración del 1 al 10. **`number`**
*   `esGratis`: Booleano (true/false). **`boolean`**
*   `descripcion`: Breve explicación del sitio. **`string`**
*   `zona`: Ubicación (Pueblo, A las afueras, Costa, etc). **`string`**
*   `aforo`: Aforo Maximo del sitio. **`number`**

Siendo `DificultadAcceso` y `tipo` dos enum en TipeScript para los atributos anteriores

---

## 📌 Estructura y uso de los endpoints de mi API

He hecho uso de **app.get, app.post, app.delete y app.listen**, cada uno para su correspodiente funcion, a continuacion explicare brevemente que hace cada uno de estos **endpoints**:

*  **Primer EndPoint** `app.get("/sitios", (req, res)`: Sirve para que el servidor de los sitios de Tarifa.
*  **Segundo EndPoint** `app.get("/sitio/:id", (req, res)`: Busca por ID en el listado, le das el ID y te muestra ese lugar concreto.
*  **Tercer EndPoint** `app.post("/sitio", (req, res)`: Es para que los datos de un nuevo sitio que hagamos el servidor lo guarde en la lista.
*  **Cuarto EndPoint** `app.delete("/sitio", (req, res)`: Basicamnte es la papelera, elimina, de ahi su "app.delete", es para eliminar un sitio turistico.
*  **Quinto EndPoint** `app.get("/stats/total-aforo", (req, res)`: Suma  la capacidad/aforo de personas que caben en todos los sitios de la lista y da el total de aforo disponible.
*  **Sexto EndPoint** `app.listen(port, ()`: Sirve para "encender el servidor" y que "escuche" y este pendiente para poder responder a todo lo anterior.

  ---

## 🚀 Guía de Arranque del Sistema

Para poner en marcha la aplicación de forma local:

1. **Activación del Servidor (Backend)**:
   * Abra una terminal en su editor (WebStorm en mi caso) o en el sistema que sea.
   * Ejecute el comando: `node Index.js`.
   * Mire que aparezca el mensaje: `"Server abierto en puerto 5564"`.

2. **Ejecución de la Interfaz (Frontend)**:
   * Abra el archivo `Index.html` en su navegador (Safari, Chrome, etc.).
   * El navegador cargará automáticamente el archivo `frontend.js`, el cual se conectará con la API.
