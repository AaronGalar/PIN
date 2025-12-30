const textos = {
  es: {
    boton: "Euskara",
    tituloEventos: "Eventos",
    descripcionEventos:
      "Las fiestas tradicionales no solo son celebración: son patrimonio inmaterial. Con esta herramienta puedes explorar cuándo es el día festivo en el pueblo navarro que más te gusta.",
    subtituloEventos: "Próximos acontecimientos",
    inputPlaceholder: "Escribe tu evento aquí",
    agregarEventoBtn: "Agregar mi evento",
    buscarPlaceholder: "Buscar localidad...",
  },
  eu: {
    boton: "Castellano",
    tituloEventos: "Ekitaldiak",
    descripcionEventos:
      "Ohiko jaiak ez dira soilik ospakizunak: ondare immateriala dira. Tresna honekin Nafarroako zure herri gustukoenean jai egunaren datak aurki ditzakezu.",
    subtituloEventos: "Hurrengo ekitaldiak",
    inputPlaceholder: "Idatzi zure ekitaldia hemen",
    agregarEventoBtn: "Nire ekitaldia gehitu",
    buscarPlaceholder: "Bilatu udalerria...",
  },
};
let idiomaActual = "es";
let festivos = [];
let eventosAñadidos = [];

async function cargarFestivos() {
  try {
    const res = await fetch("../scripts/festivos.json");
    const data = await res.json();
    festivos = data.records.map((r) => ({
      localidad: r[1],
      dia: r[2],
      mes: r[3],
    }));
    mostrarLista(festivos.concat(eventosAñadidos));
  } catch (error) {
    console.error("Error al cargar festivos:", error);
    document.getElementById("listaEventos").innerHTML =
      "<li>No se pudieron cargar los festivos.</li>";
  }
}

function mostrarLista(lista) {
  const ul = document.getElementById("listaEventos");
  ul.innerHTML = "";
  lista.forEach((e) => {
    const li = document.createElement("li");
    if (e.localidad) {
      li.textContent = `${e.localidad} - ${e.dia} de ${e.mes}`;
    } else {
      li.textContent = e.evento;
    }
    ul.appendChild(li);
  });
}

document.getElementById("boton-idioma").addEventListener("click", () => {
  idiomaActual = idiomaActual === "es" ? "eu" : "es";
  document.getElementById("titulo-eventos").textContent =
    textos[idiomaActual].tituloEventos;
  document.getElementById("descripcion-eventos").textContent =
    textos[idiomaActual].descripcionEventos;
  document.getElementById("subtitulo-eventos").textContent =
    textos[idiomaActual].subtituloEventos;
  document.getElementById("eventoInput").placeholder =
    textos[idiomaActual].inputPlaceholder;
  document.getElementById("agregarEventoBtn").textContent =
    textos[idiomaActual].agregarEventoBtn;
  document.getElementById("buscarLocalidad").placeholder =
    textos[idiomaActual].buscarPlaceholder;
  document.getElementById("boton-idioma").textContent =
    textos[idiomaActual].boton;
});

document.getElementById("agregarEventoBtn").addEventListener("click", () => {
  const input = document.getElementById("eventoInput");
  const nuevo = input.value.trim();
  if (nuevo) {
    eventosAñadidos.push({ evento: nuevo });
    mostrarLista(festivos.concat(eventosAñadidos));
    input.value = "";
    input.focus();
  }
});

document.getElementById("botonBuscar").addEventListener("click", () => {
  const busqueda = document
    .getElementById("buscarLocalidad")
    .value.toLowerCase()
    .trim();
  const filtrados = festivos.filter((f) =>
    f.localidad.toLowerCase().includes(busqueda)
  );
  mostrarLista(filtrados.concat(eventosAñadidos));
});

cargarFestivos();
