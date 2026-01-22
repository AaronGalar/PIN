let idiomaActual = "es";

const textos = {
  es: {
    boton: "Euskara",
    tituloHeader: "PROCESO DE PATRIMONIALIZACIÓN",
    tituloProceso: "Proceso",
    descripcionProceso:
      "Antes de registrar el Patrimonio Cultural inmaterial hay que tener en cuenta varios aspectos",
    mensajeRevision:
      "Este registro será revisado por un/a experto/a en patrimonio.",
    adscripcionTitulo: "Adscripción de un valor",
    valorUso:
      "Valor de uso: relacionado con la capacidad del patrimonio de satisfacer alguna necesidad determinada. El valor de uso puede ser tangible, relacionado con su uso concreto, e intangible, relacionado con la capacidad del bien cultural de transmitir información y permitir el avance del conocimiento humano.",
    valorMaterial:
      "Valor material: basado en la relación entre el bien cultural y los sentidos y que permite valorarlo en función de su forma y composición material. Entre los criterios que permiten evaluar ese valor material, estarían su grado de artificiosidad, creatividad, calidad técnica, materiales, etc",
    valorSimbolico:
      "Valor simbólico o relacional: radica en la capacidad de evocación y representación del bien cultural, convirtiéndolo en un vehículo de transmisión de ideas.",
    valorHistorico:
      "Valor histórico: basado en la capacidad del bien cultural de aportar conocimiento histórico. Es acumulativo y se enriquece con las transformaciones a lo largo del tiempo.",
    valorEmotivo:
      "Valor emotivo: radica en la capacidad del bien cultural de transmitir emociones, dependiendo del contexto cultural, educación y sensibilidad individual.",
    vinculoTitulo: "Vinculación entre persona y bien patrimonial",
    vi: "(VI) Vínculo identitario: el individuo incorpora el bien como rasgo fundamental de su identidad.",
    vf: "(VF) Vínculo familiar: relación basada en el recuerdo o lazos familiares (madre, padre, abuelo/a...).",
    vt: "(VT) Vínculo temporal: conexión con recuerdos o experiencias pasadas.",
    vp: "(VP) Vínculo con el pasado/infancia: recuerdos de momentos pasados, especialmente de la infancia.",
    vr: "(VR) Vínculo religioso: relación sustentada en creencias o valores espirituales.",
    va: "(VA) Vínculo afectivo: relación emocional con el bien (alegría, tristeza, emoción...).",
    vam: "(VAm) Vínculo de amistad: relación basada en lazos de amistad o compañerismo.",
    vs: "(VS) Vínculo social: relación compartida con un grupo o colectivo.",
    ve: "(VE) Vínculo espacial: relación construida en un lugar específico (pueblo, calle, ciudad...).",
    vex: "(VEx) Vínculo experiencial: relación basada en una experiencia o vivencia particular.",
    procesoFinal:
      "El proceso de patrimonialización implica la relación entre pasado, presente y futuro.",
    tituloRegistrar: "Registrar un nuevo patrimonio",
    legendDatos: "Datos del patrimonio",
    nombrePlaceholder: "Nombre del patrimonio",
    localizacionPlaceholder: "Localización",
    descripcionPlaceholder: "Descripción",
    botonRegistrar: "Registrar",
    volver: "← Volver al inicio",
  },
  eu: {
    boton: "Castellano",
    tituloHeader: "PATRIMONIALIZAZIO PROZESUA",
    tituloProceso: "Prozesua",
    descripcionProceso:
      "Ondare Kultural Immateriala erregistratu aurretik hainbat alderdi hartu behar dira kontuan",
    mensajeRevision: "Erregistro hau ondare aditu batek berrikusi egingo du.",
    adscripcionTitulo: "Balio baten esleipena",
    valorUso:
      "Erabilerako balioa: ondareak behar batzuk asetzeko duen gaitasunarekin lotuta dago. Erabilerako balioa tangiblea edo intangiblea izan daiteke, kultura ondasunaren informazioa transmititzeko eta ezagutza garatzeko gaitasunarekin lotuta.",
    valorMaterial:
      "Material balioa: kultura ondasunaren eta zentzumenaren arteko harremanetan oinarritzen da eta forma eta osagai materialaren arabera balioztatzeko aukera ematen du. Irizpide horien artean daude artifizialtasuna, sormena, kalitate teknikoa, materialak, etab.",
    valorSimbolico:
      "Balio sinboliko edo erlazionala: kultura ondasuna irudikatzeko eta transmisiorako bitarteko bihurtzen da.",
    valorHistorico:
      "Balio historikoa: kultura ondasunak historiaren ezagutza emateko duen gaitasunean oinarritzen da. Denboran zehar egindako aldaketekin aberasten da.",
    valorEmotivo:
      "Balio emozionala: kultura ondasunak emozioak transmititzeko duen gaitasuna da, testuinguru kulturalean, hezkuntzan eta sentikortasun indibidualean oinarrituta.",
    vinculoTitulo: "Pertsona eta ondarearen arteko lotura",
    vi: "(VI) Identitate lotura: pertsonak ondasuna bere nortasunaren ezaugarri nagusi gisa hartzen du.",
    vf: "(VF) Familia lotura: oroimen edo familia loturetan oinarrituta dago (ama, aita, aitona-amona...).",
    vt: "(VT) Denbora lotura: oroimen edo esperientziekin lotuta.",
    vp: "(VP) Iragana/Haurtzaroa lotura: iraganeko momentuak oroitzeko, batez ere haurtzaroan.",
    vr: "(VR) Erlijio lotura: sinismen edo balore espiritualetan oinarrituta.",
    va: "(VA) Afectiboa lotura: ondasunarekin emoziozko harremana (poza, tristura, emozioa...).",
    vam: "(VAm) Adiskidetasun lotura: laguntasunean oinarrituta.",
    vs: "(VS) Gizarte lotura: talde edo kolektibo batekin partekatua.",
    ve: "(VE) Espazio lotura: leku jakin batean eraikia (herria, kalea, hiri...).",
    vex: "(VEx) Esperientzia lotura: esperientzia edo bizipen partikular batean oinarrituta.",
    procesoFinal:
      "Patrimonializazio prozesuak iragana, oraina eta etorkizunaren arteko harremana dakar.",
    tituloRegistrar: "Ondare berri bat erregistratu",
    legendDatos: "Ondarearen datuak",
    nombrePlaceholder: "Ondarearen izena",
    localizacionPlaceholder: "Kokapena",
    descripcionPlaceholder: "Deskribapena",
    botonRegistrar: "Erregistratu",
    volver: "← Hasierara itzuli",
  },
};

function actualizarRegistro() {
  const t = textos[idiomaActual];

  document.getElementById("titulo-header").textContent = t.tituloHeader;
  document.getElementById("titulo-proceso").textContent = t.tituloProceso;
  document.getElementById("descripcion-proceso").textContent =
    t.descripcionProceso;
  document.getElementById("mensaje-revision").textContent = t.mensajeRevision;
  document.getElementById("adscripcion-titulo").textContent =
    t.adscripcionTitulo;
  document.getElementById("valor-uso").textContent = t.valorUso;
  document.getElementById("valor-material").textContent = t.valorMaterial;
  document.getElementById("valor-simbolico").textContent = t.valorSimbolico;
  document.getElementById("valor-historico").textContent = t.valorHistorico;
  document.getElementById("valor-emotivo").textContent = t.valorEmotivo;
  document.getElementById("vinculo-titulo").textContent = t.vinculoTitulo;
  document.getElementById("vi").textContent = t.vi;
  document.getElementById("vf").textContent = t.vf;
  document.getElementById("vt").textContent = t.vt;
  document.getElementById("vp").textContent = t.vp;
  document.getElementById("vr").textContent = t.vr;
  document.getElementById("va").textContent = t.va;
  document.getElementById("vam").textContent = t.vam;
  document.getElementById("vs").textContent = t.vs;
  document.getElementById("ve").textContent = t.ve;
  document.getElementById("vex").textContent = t.vex;
  document.getElementById("proceso-final").textContent = t.procesoFinal;
  document.getElementById("titulo-registrar").textContent = t.tituloRegistrar;
  document.getElementById("legend-datos").textContent = t.legendDatos;
  document.getElementById("nombre-patrimonio").placeholder =
    t.nombrePlaceholder;
  document.getElementById("localizacion").placeholder =
    t.localizacionPlaceholder;
  document.getElementById("descripcion-patrimonio").placeholder =
    t.descripcionPlaceholder;
  document.getElementById("boton-registrar").textContent = t.botonRegistrar;
  document.getElementById("volver").textContent = t.volver;
  document.getElementById("boton-idioma").textContent = t.boton;
}
document.getElementById("boton-idioma").addEventListener("click", function () {
  if (idiomaActual === "es") {
    idiomaActual = "eu";
  } else {
    idiomaActual = "es";
  }
  actualizarRegistro();
});

actualizarRegistro();
