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

    { id: 8, nombre: "Guerlain Mon Guerlain", precio: 210000,
      descripcion: "Lavanda y vainilla. Suave, adictivo y sensual.",
      imagen: "archivos/GUERLAIN.jpg", categoria: "ella" },

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
                cantidad: 1
            });
        }
    }

    guardarCarrito();
    actualizarContadorCarrito();
    alert("¡Producto añadido al carrito!");
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
}

init();

// SIRVE PARA "Agregar al carrito"
document.body.addEventListener('click', function (event) {
    const target = event.target;
    if (target && target.classList.contains('boton-agregar')) {
        const id = target.getAttribute('data-id');
        if (id) {
            agregarAlCarrito(id);
        }
    }
});