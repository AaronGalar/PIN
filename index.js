const textos = {
  es: {
    titulo:
      "PIN - Patrimonio Inmaterial Navarro / NOM Nafarroako Ondare materiagabea",
    bienvenidaTitulo: "Bienvenido a PIN",
    sobreProyecto: "Sobre este proyecto",
    descripcion:
      "Este es un proyecto sin ánimo de lucro creado por un graduado en Historia y Patrimonio por la UPNA, actualmente formándose en Albañiles Digitales para aprender programación. La idea ha sido unir ambos mundos —las letras y las ciencias— y ofrecer un espacio dedicado a un tema que nos conecta con nuestra humanidad: el Patrimonio Inmaterial.",
    aviso:
      "<strong>Aviso:</strong> el término completo es <strong>PCIN</strong> (Patrimonio Cultural Inmaterial de Navarra), pero he decidido omitir “Cultural” por su sonoridad; <strong>PIN</strong> es más fácil de recordar.",
    queEncontraras: "Qué encontrarás aquí",
    informacion:
      "Aquí descubrirás información sobre el Patrimonio Inmaterial de Navarra: su historia, sus tradiciones, sus fiestas y los elementos que construyen la identidad de nuestra comunidad foral.",
    paraMas: "Para más información:",
    boton: "Euskara",
    item1Titulo: "Historia",
    item1Texto: "Descubre qué es el patrimonio inmaterial y su importancia.",
    item2Titulo: "Eventos",
    item2Texto: "Consulta los acontecimientos culturales más importantes.",
    item3Titulo: "Galería",
    item3Texto: "Explora imágenes del patrimonio navarro.",
    item4Titulo: "Más información",
    item4Texto:
      "Visita la web oficial del Patrimonio Cultural Inmaterial de Navarra.",
    item4Link: "Ir a la web",
  },
  eu: {
    titulo:
      "PIN - Nafarroako Ondare Materiagabea / NOM Nafarroako Ondare materiagabea",
    bienvenidaTitulo: "Ongi etorri PINera",
    sobreProyecto: "Proiektu honi buruz",
    descripcion:
      "Hau irabazi-asmorik gabeko proiektu bat da, UPNAko Historia eta Ondare graduko ikasle batek sortua, gaur egun Albañiles Digitales-en programazioa ikasten ari da. Helburua bi mundu –gai literarioak eta zientziak– uztartzea da, eta ondare immaterialaren inguruko gaiari eskainitako espazio bat eskaintzea.",
    aviso:
      "<strong>Abisua:</strong> termino osoa <strong>PCIN</strong> da (Nafarroako Ondare Kultural Materiagabea), baina “Kultural” hitza ahaztu egin dut soinuagatik; <strong>PIN</strong> gogoratzeko errazagoa da.",
    queEncontraras: "Zer aurkituko duzu hemen",
    informacion:
      "Hemen Nafarroako Ondare Materiagabea ezagutuko duzu: bere historia, tradizioak, jaiak eta gure komunitatearen identitatea eraikitzen duten elementuak.",
    paraMas: "Informazio gehiagorako:",
    boton: "Castellano",
    item1Titulo: "Historia",
    item1Texto: "Ondare materiagabearen garrantzia eta zer den ezagutu.",
    item2Titulo: "Ekitaldiak",
    item2Texto: "Garrantzitsuenak diren ekitaldi kulturalak kontsultatu.",
    item3Titulo: "Galeria",
    item3Texto: "Nafarroako ondarearen irudiak aztertu.",
    item4Titulo: "Informazio gehiago",
    item4Texto:
      "Nafarroako Ondare Kultural Materiagabearen webgune ofiziala bisitatu.",
    item4Link: "Joan webgunera",
  },
};

let idiomaActual = "es";

function actualizarContenido() {
  document.getElementById("titulo").innerHTML = textos[idiomaActual].titulo;
  document.getElementById("bienvenida-titulo").innerHTML =
    textos[idiomaActual].bienvenidaTitulo;
  document.getElementById("sobre-proyecto").innerHTML =
    textos[idiomaActual].sobreProyecto;
  document.getElementById("descripcion").innerHTML =
    textos[idiomaActual].descripcion;
  document.getElementById("aviso").innerHTML = textos[idiomaActual].aviso;
  document.getElementById("que-encontraras").innerHTML =
    textos[idiomaActual].queEncontraras;
  document.getElementById("informacion").innerHTML =
    textos[idiomaActual].informacion;
  document.getElementById("para-mas").innerHTML = textos[idiomaActual].paraMas;
  document.getElementById("boton-idioma").textContent =
    textos[idiomaActual].boton;

  document.getElementById("item1-titulo").textContent =
    textos[idiomaActual].item1Titulo;
  document.getElementById("item1-texto").textContent =
    textos[idiomaActual].item1Texto;
  document.getElementById("item2-titulo").textContent =
    textos[idiomaActual].item2Titulo;
  document.getElementById("item2-texto").textContent =
    textos[idiomaActual].item2Texto;
  document.getElementById("item3-titulo").textContent =
    textos[idiomaActual].item3Titulo;
  document.getElementById("item3-texto").textContent =
    textos[idiomaActual].item3Texto;
  document.getElementById("item4-titulo").textContent =
    textos[idiomaActual].item4Titulo;
  document.getElementById("item4-texto").textContent =
    textos[idiomaActual].item4Texto;
  document.getElementById("item4-link").textContent =
    textos[idiomaActual].item4Link;
}

document.getElementById("boton-idioma").addEventListener("click", () => {
  if (idiomaActual === "es") {
    idiomaActual = "eu";
  } else {
    idiomaActual = "es";
  }
  actualizarContenido();
});

actualizarContenido();

window.onload = function() {
  if (!localStorage.getItem("popupShown")) {
    const popup = document.getElementById("welcome-popup");
    popup.style.display = "flex";
    localStorage.setItem("popupShown", "true");
  }
};

document.getElementById("close-popup").addEventListener("click", function() {
  const popup = document.getElementById("welcome-popup");
  popup.style.display = "none";
});
