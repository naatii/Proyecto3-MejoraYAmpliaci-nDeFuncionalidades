# Proyecto de Gestión de Coches

Este proyecto permite gestionar y mostrar información sobre coches disponibles a la venta, utilizando filtros para facilitar la búsqueda de vehículos específicos. A continuación, se describen las funcionalidades implementadas y la estructura del código.

## Mejoras Funcionales

1. Carga de Resultados por Lotes
   Se ha implementado una funcionalidad para mostrar solo los 10 primeros coches y permitir la carga adicional de coches de 10 en 10 al hacer clic en un botón "Ver más".

2. Manejo de Errores
   Se agregó un manejo de errores en la función crearTarjetaCoche para asegurar que se manejen correctamente las entradas incompletas. Si falta información sobre un coche, se genera una tarjeta de error que informa al usuario.

3. Filtrado Dinámico
   Los coches pueden ser filtrados en tiempo real según varios criterios (marca, año, precio, puertas, color, y tipo de transmisión). Esto mejora la experiencia del usuario al permitirle encontrar rápidamente lo que busca.

4. Animaciones en Resultados
   Se implementaron animaciones para las tarjetas de coches, mejorando la experiencia visual al cargar y mostrar los resultados.

5. Interfaz Amigable
   Se mejoró la presentación de los resultados, utilizando flexbox para un diseño responsive y visualmente atractivo.

## Estructura del Código

### El código se organiza en dos archivos principales:

- main.js: Contiene la lógica principal del programa, incluidos los filtros y la gestión de eventos.
- ui.js: Maneja la interfaz de usuario, incluyendo la creación de tarjetas de coches y la presentación de resultados.

### Descripción de Funciones

`mostrarResultados(coches)`

- Descripción: Muestra los coches disponibles en la interfaz. Carga un máximo de 10 coches y permite cargar más con un botón.
- Parámetros:
  - coches (Array): Listado de coches que se mostrarán.
- Comportamiento:
  - Limpia los resultados anteriores.
  - Si no hay coches, muestra un mensaje de advertencia.
  - Crea tarjetas para cada coche y las añade a la interfaz.
  - Si hay más de 10 coches, muestra un botón "Ver más".

`limpiarResultados()`

- Descripción: Elimina todos los elementos hijos del contenedor de resultados para limpiar la interfaz antes de mostrar nuevos resultados.

`crearTarjetaCoche(coche)`

- Descripción: Crea un elemento HTML que representa la tarjeta de un coche.
- Parámetros:
  - coche (Object): Objeto que contiene los datos del coche (marca, modelo, año, precio, puertas, color, transmisión).
  - Retorno: Devuelve un elemento HTML que representa la tarjeta del coche. Si hay un error en los datos, devuelve una tarjeta de error.

`filtrarCoches()`

- Descripción: Filtra la lista de coches según los criterios seleccionados por el usuario.
- Comportamiento:
  - Llama a funciones individuales de filtrado para cada criterio.
  - Muestra los resultados filtrados o todos los coches si no hay filtros aplicados.
- Funciones de Filtrado
  - filtrarMarca(coche): Filtra coches por marca.
  - filtrarAño(coche): Filtra coches por año.
  - filtrarPrecio(coche): Filtra coches por rango de precios.
  - filtrarPuertas(coche): Filtra coches por número de puertas.
  - filtrarColor(coche): Filtra coches por color.
  - filtrarTransmision(coche): Filtra coches por tipo de transmisión.

`añadirAños()`

- Descripción: Agrega opciones al menú desplegable de años disponibles a partir de la lista de coches.
- Uso
  - Instalación: Clona este repositorio y abre el archivo index.html en tu navegador.
  - Interacción: Utiliza los filtros disponibles para buscar coches específicos. Puedes cargar más resultados haciendo clic en el botón "Ver más".

## Cambios en HTML

1. **Estructura de la Página**:

   - Se añadieron nuevas secciones para mejorar la semantica de la estructura de la página web.
   - Se agregó un botón "Ver más" que permite cargar más coches en la vista, mejorando la usabilidad.
   - Se agregó un footer, ya que no tenía
   - Se modificaron los h1 de la web para que solo existiera uno para optimizar el seo de la web, además se agregó a una etiqueta header
   - Se estableció todo el contenido de los resultados dentro de una etiqueta main para indicar a los motores de búsqueda cual es el contenido principal de la web.

2. **Elementos de Entrada**:

   - Se implementaron selectores para los filtros (marca, año, precio, puertas, transmisión y color) con una estructura más clara y accesible.
   - Se aseguraron atributos `id` únicos para cada filtro para facilitar su referencia en el JavaScript.

3. **Mensajes de Estado**:

   - Se añadió un mensaje que informa al usuario cuando no se encuentran coches que cumplan con los filtros aplicados.

## Cambios en CSS

1. **Diseño Responsivo**:

   - Se implementaron estilos para garantizar que la visualización de los coches se ajuste adecuadamente en diferentes tamaños de pantalla, utilizando flexbox para el diseño.

2. **Estilos de Tarjetas**:

   - Se mejoró la apariencia de las tarjetas de coches con sombras y bordes redondeados para dar un efecto más atractivo visualmente.
   - Se aplicaron transiciones en los efectos de hover para mejorar la experiencia del usuario al interactuar con las tarjetas.

3. **Botón "Ver más"**:

   - Se diseñó un botón atractivo y accesible que se adapta al estilo general de la aplicación, con efectos de transición al pasar el cursor.

## Resumen de Mejoras

- **Interactividad Mejorada**: La funcionalidad de mostrar coches de 10 en 10 y cargar más al pulsar el botón "Ver más" ha hecho que la experiencia de usuario sea más fluida.

- **Mejora de la interfaz de usuario**: Se han cambiado los estilos de la web para dar un toque más atractivos, he usado para ello los colores ya establecidos por el creador del proyecto, ya que me parecía interesante usar los colores ya usados para hacer que al web se viera más atractiva.

- **Animaciones atractivas**: La implementación de las animaciones individuales para cada tarjeta donde se varia el daley de las mismas, para dar un poco de dinamismo a estas.

## Conclusiones

Este proyecto proporciona una forma intuitiva de explorar coches disponibles, con múltiples opciones de filtrado y una interfaz visualmente atractiva. Las mejoras implementadas mejoran la experiencia del usuario y garantizan una gestión efectiva de la información.
