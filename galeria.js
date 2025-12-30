const textos = {
  es: {
    boton: "Euskara",
    tituloGaleria: "Galería",
    descripcionGaleria: "Imágenes del patrimonio cultural.",
  },
  eu: {
    boton: "Castellano",
    tituloGaleria: "Galeria",
    descripcionGaleria: "Ondare kulturalaren irudiak.",
  },
};

let idiomaActual = "es";

function actualizarGaleria() {
  if (idiomaActual === "es") {
    document.getElementById("titulo-galeria").textContent =
      textos.es.tituloGaleria;
    document.getElementById("descripcion-galeria").textContent =
      textos.es.descripcionGaleria;
    document.getElementById("boton-idioma").textContent = textos.es.boton;
  } else if (idiomaActual === "eu") {
    document.getElementById("titulo-galeria").textContent =
      textos.eu.tituloGaleria;
    document.getElementById("descripcion-galeria").textContent =
      textos.eu.descripcionGaleria;
    document.getElementById("boton-idioma").textContent = textos.eu.boton;
  }
}

document.getElementById("boton-idioma").addEventListener("click", () => {
  if (idiomaActual === "es") {
    idiomaActual = "eu";
  } else {
    idiomaActual = "es";
  }
  actualizarGaleria();
});

actualizarGaleria();


