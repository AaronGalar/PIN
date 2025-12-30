

let idiomaActual = "es";

const ids = ["titulo", "texto", "boton", "pregunta", "p1", "p2", "p3", "mapa"];

function actualizarContenido() {
  ids.forEach((id) => {
    document.getElementById(id).textContent = textos[idiomaActual][id];
  });
}

document.getElementById("boton").addEventListener("click", () => {
  if (idiomaActual === "es") {
    idiomaActual = "eu";
  } else {
    idiomaActual = "es";
  }

  actualizarContenido();
});

document
  .getElementById("btnBuscarLibro")
  .addEventListener("click", async () => {
    const query = document.getElementById("buscarLibro").value.trim();
    const resultadosDiv = document.getElementById("resultadosLibros");

    if (query === "") {
      resultadosDiv.innerHTML = "<p>Escribe algo para buscar.</p>";
      return;
    }

    resultadosDiv.innerHTML = "<p>Buscando...</p>";

    try {
      const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);
      const data = await res.json();

      if (data.docs.length === 0) {
        resultadosDiv.innerHTML = "<p>No se encontraron resultados.</p>";
        return;
      }

      resultadosDiv.innerHTML = "";
      data.docs.slice(0, 5).forEach((libro) => {
        const div = document.createElement("div");
        div.classList.add("libro");

        div.innerHTML = `
        <h3>${libro.title}</h3>
        <p><strong>Autor:</strong> ${libro.author_name ? libro.author_name.join(", ") : "Desconocido"}</p>
        <p><strong>Año:</strong> ${libro.first_publish_year || "Desconocido"}</p>
      `;
        resultadosDiv.appendChild(div);
      });
    } catch (e) {
      resultadosDiv.innerHTML = "<p>Error al conectar con la API.</p>";
    }
  });
