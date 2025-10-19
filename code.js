const productos = [
    // NICHO
    { id: 1, nombre: "Mancera Red Tobacco", precio: 180000,
      descripcion: "Tabaco intenso, canela y maderas. Cálido y potente.",
      imagen: "archivos/descarga%20(4).jpg", categoria: "nicho" },

    { id: 2, nombre: "Xerjoff Erba Pura", precio: 235000,
      descripcion: "Explosión de frutas cítricas, dulce y adictivo.",
      imagen: "archivos/descarga%20(5).jpg", categoria: "nicho" },

    { id: 3, nombre: "Montale Arabians Tonka", precio: 150000,
      descripcion: "Oriental, oud y rosa búlgara. Una bestia en proyección.",
      imagen: "archivos/images.jpg", categoria: "nicho" },

    // DISEÑADOR
    { id: 4, nombre: "Dior Sauvage", precio: 120500,
      descripcion: "Bergamota y ambroxan. Frescura icónica y salvaje.",
      imagen: "archivos/SAUVAGE.jpg", categoria: "disenador" },

    { id: 5, nombre: "Armani Stronger With You", precio: 115000,
      descripcion: "Castaña, vainilla y salvia. Dulce, especiado y magnético.",
      imagen: "archivos/SWY.jpg", categoria: "disenador" },

    { id: 6, nombre: "Bleu de Chanel Parfum", precio: 145000,
      descripcion: "Cítricos, maderas y sándalo. Sofisticación y elegancia.",
      imagen: "archivos/BDC%20PARFUM.jpg", categoria: "disenador" },

    // ELLA
    { id: 7, nombre: "Parfums de Marly Delina", precio: 346000,
      descripcion: "Rosa turca, lichi y vainilla. Femenina y envolvente.",
      imagen: "archivos/DELINA.jpg", categoria: "ella" },

    { id: 8, nombre: "Burberry Her", precio: 210000,
      descripcion: "Una vibrante explosión de frutas rojas con un corazón floral, sobre una base suave y cálida. Audaz y elegante.",
      imagen: "archivos/burher.jpg", categoria: "ella" },

    { id: 9, nombre: "YSL Libre Intense", precio: 145000,
      descripcion: "Flor de naranjo, orquídea y lavanda. Poder y libertad.",
      imagen: "archivos/LIBRE.jpg", categoria: "ella" }
];

const price = (v) => "$" + Number(v).toLocaleString("es-AR");
const CLAVE_CARRITO = "perfumeriaDroblasCarrito";
let carrito = [];
// Guardado del carrito
function cargarCarrito() {
    const guardado = localStorage.getItem(CLAVE_CARRITO);
    carrito = guardado ? JSON.parse(guardado) : [];
}

function guardarCarrito() {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
}

// Actualiza el número de ítems
function actualizarContadorCarrito() {
    const contadorElement = document.getElementById("contador-carrito");
    if (!contadorElement) return;

    let totalItems = 0;
    for (const item of carrito) {
        totalItems += item.cantidad;
    }
    contadorElement.textContent = totalItems;
}

// Renderizado de las tarjetas (para index.html)
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
                <button class="boton-agregar" data-id="${p.id}">Agregar al carrito</button> 
            </article>
        `)
        .join("");

    box.innerHTML = tarjetasHtml;
}

function renderTiendaCompleta() {
    const box = document.getElementById("productos-tienda");
    if (!box) return;

    const tarjetasHtml = productos
        .map(p => `
            <article class="tarjeta">
                <img src="${p.imagen}" alt="${p.nombre}">
                <h4>${p.nombre}</h4>
                <p>${p.descripcion}</p>
                <div class="precio">${price(p.precio)}</div>
                <button class="boton-agregar" data-id="${p.id}">Agregar al carrito</button>
            </article>
        `)
        .join("");

    box.innerHTML = tarjetasHtml;
}

function restarDelCarrito(idProducto) {
  idProducto = Number(idProducto);
  const item = carrito.find(i => i.id === idProducto);
  if (!item) return;
  item.cantidad -= 1;
  if (item.cantidad <= 0) {
    carrito = carrito.filter(i => i.id !== idProducto);
  }
  guardarCarrito();
  actualizarContadorCarrito();
  renderCarrito();
}

function eliminarDelCarrito(idProducto) {
  idProducto = Number(idProducto);
  carrito = carrito.filter(i => i.id !== idProducto);
  guardarCarrito();
  actualizarContadorCarrito();
  renderCarrito();
}

function vaciarCarrito() {
  carrito = [];
  guardarCarrito();
  actualizarContadorCarrito();
  renderCarrito();
}

function calcularTotal() {
  return carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
}
function renderCarrito() {
  const contenedorCarrito = document.getElementById("carrito-items");
  const totalCarrito = document.getElementById("carrito-total");
  if (!contenedorCarrito || !totalCarrito) return;

  if (carrito.length === 0) {
    contenedorCarrito.innerHTML = `
      <div class="text-center text-muted">
        <p class="mb-0">Tu carrito está vacío.</p>
      </div>
    `;
    totalCarrito.textContent = price(0);
    return;
  }

  const html = carrito.map(item => `
    <div class="d-flex align-items-center gap-3 border rounded p-2">
      <img src="${item.imagen}" alt="${item.nombre}" class="rounded" style="width:70px;height:70px;object-fit:contain;background:#fff;">
      <div class="flex-grow-1">
        <div class="fw-semibold">${item.nombre}</div>
        <div class="text-muted small">${price(item.precio)} c/u</div>
        <div class="d-flex align-items-center gap-2 mt-2">
          <button class="btn btn-sm btn-outline-secondary btn-menos" data-id="${item.id}">-</button>
          <span class="px-2">${item.cantidad}</span>
          <button class="btn btn-sm btn-outline-secondary btn-mas" data-id="${item.id}">+</button>
          <button class="btn btn-sm btn-outline-danger ms-3 btn-remove" data-id="${item.id}">Eliminar</button>
        </div>
      </div>
      <div class="text-end">
        <div class="fw-bold">${price(item.precio * item.cantidad)}</div>
      </div>
    </div>
  `).join("");

  contenedorCarrito.innerHTML = html;
  totalCarrito.textContent = price(calcularTotal());
}

function agregarAlCarrito(idProducto) {
    idProducto = Number(idProducto);
    let itemExistente = carrito.find(item => item.id === idProducto);

    if (itemExistente) {
        itemExistente.cantidad += 1;
    } else {
        const productoAAgregar = productos.find(p => p.id === idProducto);
        if (productoAAgregar) {
            carrito.push({
                id: productoAAgregar.id,
                nombre: productoAAgregar.nombre,
                precio: productoAAgregar.precio,
                imagen: productoAAgregar.imagen,
                cantidad: 1
            });
        }
    }
    guardarCarrito();
    actualizarContadorCarrito();
    renderCarrito();
}

function init() {
    cargarCarrito();
    actualizarContadorCarrito();

    // Para index.html
    if (document.getElementById("destacados")) {
        renderSeccion("destacados", "nicho");
        renderSeccion("coleccionDisenador", "disenador");
        renderSeccion("paraElla", "ella");
    }

    // Para productos.html
    if (document.getElementById("productos-tienda")) {
        renderTiendaCompleta();
    }
    renderCarrito();
}

init();

// SIRVE PARA "Agregar al carrito"
document.body.addEventListener('click', function (event) {
    const target = event.target;
    if (target && target.classList.contains('boton-agregar')) {
        const id = target.getAttribute('data-id');
        if (id) agregarAlCarrito(id);
    }
    if (target && target.classList.contains('btn-mas')) {
    const id = target.getAttribute('data-id');
    if (id) agregarAlCarrito(id);
  }
  if (target && target.classList.contains('btn-menos')) {
    const id = target.getAttribute('data-id');
    if (id) restarDelCarrito(id);
  }

  if (target && target.classList.contains('btn-remove')) {
    const id = target.getAttribute('data-id');
    if (id) eliminarDelCarrito(id);
  }

  if (target && target.id === 'btn-vaciar-carrito') {
    vaciarCarrito();
  }

  if (target && target.id === 'btn-finalizar') 
    {const totalCompra = calcularTotal();
    if (carrito.length === 0)
      // sweetalert
     {
      Swal.fire({
        title: "Carrito Vacío",
        text: "No tienes perfumes para finalizar la compra.",
        icon: "warning",
        confirmButtonText: "OK",
        draggable: true
      });
      return;
    }
    Swal.fire({
      title: "¡Gracias por tu compra!",
      text: `El total fue: ${price(totalCompra)}. Tu pedido será procesado a la brevedad.`,
      icon: "success",
      draggable: true,
      confirmButtonText: "OK"
    });
    
    vaciarCarrito();
  }
});