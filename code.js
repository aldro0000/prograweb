const perfumes = [
  {
    nombre: "Montale Arabians Tonka",
    precio: "$150.000",
    descripcion: "Oriental y especiado",
    imagen: "archivos/images.jpg"
  },
  {
    nombre: "Mancera Red Tobacco",
    precio: "$135.000",
    descripcion: "Tabaco y madera",
    imagen: "archivos/descarga%20(4).jpg"
  },
  {
    nombre: "Xerjoff Erba Pura",
    precio: "$140.000",
    descripcion: "Frutas mediterráneas",
    imagen: "archivos/descarga%20(5).jpg"
  }
];

function mostrarPerfumes() {
  const cont = document.getElementById("productos");
  if (!cont) return;

  for (let i = 0; i < perfumes.length; i++) {
    const p = perfumes[i];
    const card = document.createElement("div");
    card.className = "tarjeta";
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h4>${p.nombre}</h4>
      <p>${p.descripcion}</p>
      <div class="precio">${p.precio}</div>
    `;
    cont.appendChild(card);
  }
}

document.addEventListener("DOMContentLoaded", mostrarPerfumes);
