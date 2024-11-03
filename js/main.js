// Importar la lista de coches desde la base de datos y las funciones necesarias desde el módulo de interfaz
import { listaCoches } from "./db.js";
import {
  crearTarjetaCoche,
  limpiarResultados,
  mostrarResultados,
} from "./ui.js"; // Importa correctamente las funciones de interfaz

// Selección de elementos del DOM para los filtros
const marca = document.querySelector("#marca");
const years = document.querySelector("#year");
const precioMin = document.querySelector("#minimo");
const precioMax = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

// Exportar el contenedor donde se mostrarán los resultados
export const resultados = document.querySelector("#resultado");

// Crear un contenedor para las tarjetas de coches
export const tarjetaCoches = document.createElement("section");
tarjetaCoches.style.display = "flex";
tarjetaCoches.style.flexDirection = "row";
tarjetaCoches.style.flexWrap = "wrap";
tarjetaCoches.style.gap = "1em";
tarjetaCoches.style.justifyContent = "center";

// Objeto para almacenar los filtros seleccionados por el usuario
const filtros = {
  marca: "",
  year: "",
  precioMin: "",
  precioMax: "",
  puertas: "",
  transmision: "",
  color: "",
};

/**
 * Inicializa los eventos de los filtros.
 * Asocia eventos de entrada a los elementos de filtro y llama a `filtrarCoches` cuando se cambian los valores.
 */
function eventos() {
  // Agregar un evento de escucha para cada filtro
  marca.addEventListener("input", (e) => {
    filtros.marca = e.target.value; // Actualizar filtro de marca
    filtrarCoches(); // Filtrar coches tras cada entrada
  });

  years.addEventListener("input", (e) => {
    const value = parseInt(e.target.value);
    filtros.year = isNaN(value) ? "" : value; // Actualizar filtro de año
    filtrarCoches(); // Filtrar coches tras cada entrada
  });

  precioMin.addEventListener("input", (e) => {
    const value = parseInt(e.target.value);
    filtros.precioMin = isNaN(value) ? "" : value; // Actualizar filtro de precio mínimo
    filtrarCoches(); // Filtrar coches tras cada entrada
  });

  precioMax.addEventListener("input", (e) => {
    const value = parseInt(e.target.value);
    filtros.precioMax = isNaN(value) ? "" : value; // Actualizar filtro de precio máximo
    filtrarCoches(); // Filtrar coches tras cada entrada
  });

  puertas.addEventListener("input", (e) => {
    const value = parseInt(e.target.value);
    filtros.puertas = isNaN(value) ? "" : value; // Actualizar filtro de puertas
    filtrarCoches(); // Filtrar coches tras cada entrada
  });

  transmision.addEventListener("input", (e) => {
    filtros.transmision = e.target.value; // Actualizar filtro de transmisión
    filtrarCoches(); // Filtrar coches tras cada entrada
  });

  color.addEventListener("input", (e) => {
    filtros.color = e.target.value; // Actualizar filtro de color
    filtrarCoches(); // Filtrar coches tras cada entrada
  });
}

/**
 * Filtra la lista de coches según los filtros aplicados.
 * @returns {void}
 */
function filtrarCoches() {
  // Filtrar la lista de coches usando los criterios especificados
  const resultado = listaCoches.filter((coche) => {
    return (
      filtrarMarca(coche) &&
      filtrarAño(coche) &&
      filtrarPrecio(coche) &&
      filtrarPuertas(coche) &&
      filtrarColor(coche) &&
      filtrarTransmision(coche)
    );
  });

  // Comprobar si hay algún filtro aplicado
  const hayFiltros = Object.values(filtros).some((filtro) => filtro !== "");

  // Limpiar resultados y mostrar coches filtrados o todos los coches
  resultados.classList.add("hidden"); // Ocultar resultados antes de mostrar nuevos
  setTimeout(() => {
    if (hayFiltros) {
      mostrarResultados(resultado); // Mostrar coches filtrados
    } else {
      mostrarResultados(listaCoches); // Mostrar todos los coches
    }
    resultados.classList.remove("hidden"); // Mostrar resultados
    resultados.classList.add("visible"); // Agregar clase visible
  }, 500); // Esperar a que la animación de ocultar termine
}

/**
 * Filtra los coches por marca.
 * @param {Object} coche - Objeto coche que se está evaluando.
 * @returns {boolean} `true` si el coche coincide con el filtro de marca; de lo contrario, `false`.
 */
function filtrarMarca(coche) {
  return !filtros.marca || coche.marca === filtros.marca; // Filtrar por marca
}

/**
 * Filtra los coches por año.
 * @param {Object} coche - Objeto coche que se está evaluando.
 * @returns {boolean} `true` si el coche coincide con el filtro de año; de lo contrario, `false`.
 */
function filtrarAño(coche) {
  return !filtros.year || coche.year === filtros.year; // Filtrar por año
}

/**
 * Filtra los coches por precio.
 * @param {Object} coche - Objeto coche que se está evaluando.
 * @returns {boolean} `true` si el coche coincide con los filtros de precio; de lo contrario, `false`.
 */
function filtrarPrecio(coche) {
  const { precioMin, precioMax } = filtros; // Desestructurar filtros de precio
  return (
    (!precioMin || coche.precio >= precioMin) && // Filtrar por precio mínimo
    (!precioMax || coche.precio <= precioMax) // Filtrar por precio máximo
  );
}

/**
 * Filtra los coches por número de puertas.
 * @param {Object} coche - Objeto coche que se está evaluando.
 * @returns {boolean} `true` si el coche coincide con el filtro de puertas; de lo contrario, `false`.
 */
function filtrarPuertas(coche) {
  return !filtros.puertas || coche.puertas === filtros.puertas; // Filtrar por número de puertas
}

/**
 * Filtra los coches por color.
 * @param {Object} coche - Objeto coche que se está evaluando.
 * @returns {boolean} `true` si el coche coincide con el filtro de color; de lo contrario, `false`.
 */
function filtrarColor(coche) {
  return !filtros.color || coche.color === filtros.color; // Filtrar por color
}

/**
 * Filtra los coches por transmisión.
 * @param {Object} coche - Objeto coche que se está evaluando.
 * @returns {boolean} `true` si el coche coincide con el filtro de transmisión; de lo contrario, `false`.
 */
function filtrarTransmision(coche) {
  return !filtros.transmision || coche.transmision === filtros.transmision; // Filtrar por transmisión
}

/**
 * Añade los años únicos disponibles en la lista de coches al filtro de años.
 * @returns {void}
 */
function añadirAños() {
  // Obtener años únicos de la lista de coches
  const añosUnicos = [...new Set(listaCoches.map((coche) => coche.year))];
  añosUnicos.forEach((year) => {
    const option = document.createElement("option");
    option.value = year; // Establecer valor del año
    option.textContent = year; // Mostrar año en el menú
    years.appendChild(option); // Agregar opción al menú desplegable
  });
}

// Llamadas iniciales para configurar el estado inicial de la interfaz
limpiarResultados(); // Limpiar resultados inicialmente
añadirAños(); // Agregar años al filtro
eventos(); // Iniciar gestión de eventos
mostrarResultados(listaCoches); // Mostrar todos los coches al principio
