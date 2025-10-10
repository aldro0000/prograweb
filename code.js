const productos = [
  // NICHO
  { id: 1, nombre: "Mancera Red Tobacco", precio: 135000,
    descripcion: "Tabaco intenso, canela y maderas. Cálido y potente.",
    imagen: "archivos/descarga%20(4).jpg", categoria: "nicho" },

  { id: 2, nombre: "Xerjoff Erba Pura", precio: 140000,
    descripcion: "Explosión de frutas cítricas, dulce y adictivo.",
    imagen: "archivos/descarga%20(5).jpg", categoria: "nicho" },

  { id: 3, nombre: "Montale Arabians Tonka", precio: 150000,
    descripcion: "Oriental, oud y rosa búlgara. Una bestia en proyección.",
    imagen: "archivos/images.jpg", categoria: "nicho" },

  // DISEÑADOR
  { id: 4, nombre: "Dior Sauvage", precio: 120500,
    descripcion: "Bergamota y ambroxan. Frescura icónica y salvaje.",
    imagen: "archivos/SAUVAGE.jpg", categoria: "disenador" },

  { id: 5, nombre: "Armani Stronger With You", precio: 95000,
    descripcion: "Castaña, vainilla y salvia. Dulce, especiado y magnético.",
    imagen: "archivos/SWY.jpg", categoria: "disenador" },

  { id: 6, nombre: "Bleu de Chanel Parfum", precio: 145000,
    descripcion: "Cítricos, maderas y sándalo. Sofisticación y elegancia.",
    imagen: "archivos/BDC%20PARFUM.jpg", categoria: "disenador" },

  // ELLA
  { id: 7, nombre: "Parfums de Marly Delina", precio: 805005.55,
    descripcion: "Rosa turca, lichi y vainilla. Femenina y envolvente.",
    imagen: "archivos/DELINA.jpg", categoria: "ella" },

  { id: 8, nombre: "Guerlain Mon Guerlain", precio: 110000,
    descripcion: "Lavanda y vainilla. Suave, adictivo y sensual.",
    imagen: "archivos/GUERLAIN.jpg", categoria: "ella" },

  { id: 9, nombre: "YSL Libre Intense", precio: 105000,
    descripcion: "Flor de naranjo, orquídea y lavanda. Poder y libertad.",
    imagen: "archivos/LIBRE.jpg", categoria: "ella" }
];

let carrito = [];

const price = (v) => "$" + Number(v).toLocaleString("es-AR");

function renderSeccion(contenedorId, categoria) {
  const box = document.getElementById(contenedorId);
  if (!box) return;

  const tarjetasHtml = productos
    .filter(p => p.categoria === categoria)
    .map(p => `
      <article class="tarjeta">
        <img src="${p.imagen}" alt="${p.nombre}">
        <h4>${p.nombre}</h4>
        <p>${p.descripcion}</p>
        <div class="precio">${price(p.precio)}</div>
        <button class="btn-agregar" onclick="agregarAlCarrito(${p.id})">Agregar al Carrito</button>
      </article>
    `)
    .join("");

  box.innerHTML = tarjetasHtml;
}

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  if (producto) {
    carrito.push(producto);
    actualizarContador();
  }
}

function actualizarContador() {
  document.getElementById('contador-carrito').textContent = carrito.length;
}

function init() {
  renderSeccion("destacados", "nicho");
  renderSeccion("coleccionDisenador", "disenador");
  renderSeccion("paraElla", "ella");
}

init();