import { resultados, tarjetaCoches } from "./main.js";

/**
 * Añade a resultados toda la información de los coches disponibles.
 * Además, se ha implementado una mejora para que solo muestre los 10 primeros coches
 * y puedan cargarse de 10 en 10.
 *
 * @param {Object[]} coches - Listado de los coches disponibles.
 * @returns {void}
 */
let resultadosMostrados = 0; // Declaración de la variable

export function mostrarResultados(coches) {
  if (coches.length === 0) {
    limpiarResultados(); // Limpiar resultados previos si no hay coches
    const mensaje = document.createElement("p");
    mensaje.textContent = "No se encontraron coches con esos filtros.";
    resultados.appendChild(mensaje);
    return;
  }

  const cantidadMostrar = 10;

  // Seleccionar la sección existente o crearla si aún no está en el DOM
  let tarjetaCoches = document.querySelector("#tarjetaCoches");
  if (!tarjetaCoches) {
    tarjetaCoches = document.createElement("section");
    tarjetaCoches.id = "tarjetaCoches";
    tarjetaCoches.style.display = "flex";
    tarjetaCoches.style.flexDirection = "row";
    tarjetaCoches.style.flexWrap = "wrap";
    tarjetaCoches.style.gap = "1em";
    tarjetaCoches.style.justifyContent = "center";
    tarjetaCoches.style.padding = "2em 0";
    resultados.appendChild(tarjetaCoches); // Agregar al contenedor de resultados solo si no existe
  }

  const fragment = document.createDocumentFragment(); // Crear un fragmento de documento

  // Mostrar los próximos `cantidadMostrar` coches desde el índice actual de `resultadosMostrados`
  coches.slice(resultadosMostrados, resultadosMostrados + cantidadMostrar).forEach((coche, index) => {
    const card = crearTarjetaCoche(coche);

    // Calcular el retraso: cada tarjeta tendrá un retraso incremental
    const delay = Math.floor(index / 1) * 100; // Retraso de 100ms por tarjeta
    card.style.animationDelay = `${delay}ms`; // Aplicar el retraso a la tarjeta

    // Añadir las clases de animación
    card.classList.add("resultados", "card");

    fragment.appendChild(card); // Agregar cada tarjeta al fragmento
  });

  tarjetaCoches.appendChild(fragment); // Añadir el fragmento a la sección existente
  resultadosMostrados += cantidadMostrar; // Incrementar el contador de coches mostrados

  // Verificar si quedan más coches por mostrar
  let btnVerMas = document.querySelector("#btnVerMas");
  if (resultadosMostrados < coches.length) {
    // Si el botón no existe, crearlo
    if (!btnVerMas) {
      btnVerMas = document.createElement("button");
      btnVerMas.id = "btnVerMas";
      btnVerMas.textContent = "Ver más";
      btnVerMas.classList.add(
        "bg-blue-500",
        "text-3xl",
        "text-white",
        "w-50",
        "px-4",
        "py-2",
        "rounded",
        "hover:bg-blue-600",
        "transition-colors",
        "duration-300",
        "flex",
        "flex-row",
        "flex-wrap",
        "content-center",
        "mx-auto",
        "my-auto"
      );
      btnVerMas.addEventListener("click", () => mostrarResultados(coches)); // Llamar a `mostrarResultados` con los coches
      resultados.appendChild(btnVerMas);
    }
  } else if (btnVerMas) {
    // Si ya no hay más coches para mostrar, eliminar el botón
    btnVerMas.remove();
  }
}
/**
 * Función que únicamente limpia todos los resultados de coches.
 *
 * @returns {void}
 */
export function limpiarResultados() {
  while (resultados.firstChild) {
    resultados.removeChild(resultados.firstChild);
  }
}

/**
 * Crea una tarjeta de coche con la información proporcionada.
 *
 * @param {Object} coche - Objeto que contiene los datos del coche.
 * @returns {HTMLElement} - Elemento HTML que representa la tarjeta del coche.
 */
export function crearTarjetaCoche(coche) {
  try {
    // Validar que el objeto coche tenga todas las propiedades necesarias
    if (
      !coche ||
      !coche.marca ||
      !coche.modelo ||
      !coche.year ||
      !coche.precio ||
      !coche.puertas ||
      !coche.color ||
      !coche.transmision
    ) {
      throw new Error("Datos del coche incompletos.");
    }

    // Crear la tarjeta del coche
    const card = document.createElement("section");
    card.classList.add(
      "flex",
      "flex-col",
      "border",
      "border-gray-300",
      "p-4",
      "w-200",
      "shadow-lg",
      "rounded-lg",
      "bg-white",
      "hover:shadow-xl",
      "transition-shadow",
      "duration-300"
    );

    // Crear y asignar el contenido de la tarjeta
    const titulo = document.createElement("h3");
    titulo.textContent = `Marca: ${coche.marca}`;

    const modelo = document.createElement("span");
    modelo.textContent = `Modelo: ${coche.modelo}`;

    const año = document.createElement("p");
    año.textContent = `Año: ${coche.year}`;

    const precio = document.createElement("p");
    precio.textContent = `Precio: ${coche.precio} €`;

    const puertas = document.createElement("p");
    puertas.textContent = `Puertas: ${coche.puertas}`;

    const color = document.createElement("p");
    color.textContent = `Color: ${coche.color}`;

    const transmision = document.createElement("p");
    transmision.textContent = `Transmisión: ${coche.transmision}`;

    // Agregar los elementos a la tarjeta
    card.appendChild(titulo);
    card.appendChild(modelo);
    card.appendChild(año);
    card.appendChild(precio);
    card.appendChild(puertas);
    card.appendChild(color);
    card.appendChild(transmision);

    return card; // Devolver la tarjeta del coche
  } catch (error) {
    console.error("Error al crear la tarjeta del coche:", error.message);
    const errorCard = document.createElement("section");
    errorCard.textContent = error.message; // Mostrar el mensaje de error
    errorCard.classList.add(
      "text-red-500",
      "border",
      "border-red-500",
      "p-4",
      "rounded",
      "bg-red-100"
    );
    return errorCard; // Devolver la tarjeta de error
  }
}
