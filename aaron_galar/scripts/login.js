const textos = {
  es: {
    boton: "Euskara",
    tituloLogin: "INICIA SESIÓN",
    labelEmail: "Email:",
    labelPassword: "Contraseña",
    botonEnviar: "Enviar",
    volver: "← Volver al inicio"
  },
  eu: {
    boton: "Castellano",
    tituloLogin: "SAIOA HASI",
    labelEmail: "Emaila:",
    labelPassword: "Pasahitza",
    botonEnviar: "Bidali",
    volver: "← Hasierara itzuli"
  }
};

let idiomaActual = "es";

function actualizarLogin() {
  if (idiomaActual === "es") {
    document.getElementById("titulo-login").textContent = textos.es.tituloLogin;
    document.getElementById("label-email").textContent = textos.es.labelEmail;
    document.getElementById("label-password").textContent = textos.es.labelPassword;
    document.getElementById("boton-enviar").textContent = textos.es.botonEnviar;
    document.getElementById("volver").textContent = textos.es.volver;
    document.getElementById("boton-idioma").textContent = textos.es.boton;
  } else if (idiomaActual === "eu") {
    document.getElementById("titulo-login").textContent = textos.eu.tituloLogin;
    document.getElementById("label-email").textContent = textos.eu.labelEmail;
    document.getElementById("label-password").textContent = textos.eu.labelPassword;
    document.getElementById("boton-enviar").textContent = textos.eu.botonEnviar;
    document.getElementById("volver").textContent = textos.eu.volver;
    document.getElementById("boton-idioma").textContent = textos.eu.boton;
  }
}

document.getElementById("boton-idioma").addEventListener("click", () => {
  if (idiomaActual === "es") {
    idiomaActual = "eu";
  } else {
    idiomaActual = "es";
  }
  actualizarLogin();
});

actualizarLogin();
