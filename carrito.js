const productos = [
    { id: 1, nombre: "Mancera Red Tobacco", precio: 180000, imagen: "archivos/descarga%20(4).jpg" },
    { id: 2, nombre: "Xerjoff Erba Pura", precio: 235000, imagen: "archivos/descarga%20(5).jpg" },
    { id: 3, nombre: "Montale Arabians Tonka", precio: 150000, imagen: "archivos/images.jpg" },
    { id: 4, nombre: "Dior Sauvage", precio: 120500, imagen: "archivos/SAUVAGE.jpg" },
    { id: 5, nombre: "Armani Stronger With You", precio: 115000, imagen: "archivos/SWY.jpg" },
    { id: 6, nombre: "Bleu de Chanel Parfum", precio: 145000, imagen: "archivos/BDC%20PARFUM.jpg" },
    { id: 7, nombre: "Parfums de Marly Delina", precio: 346000, imagen: "archivos/DELINA.jpg" },
    { id: 8, nombre: "Guerlain Mon Guerlain", precio: 210000, imagen: "archivos/GUERLAIN.jpg" },
    { id: 9, nombre: "YSL Libre Intense", precio: 145000, imagen: "archivos/LIBRE.jpg" }
];

const CLAVE_CARRITO = "perfumeriaDroblasCarrito";
let carrito = [];

const price = (v) => "$" + Number(v).toLocaleString("es-AR");

function cargarCarrito() {
    const guardado = localStorage.getItem(CLAVE_CARRITO);
    carrito = guardado ? JSON.parse(guardado) : [];
}

