const listaPerfumes = [
    { id: 1, nombre: "Montale Arabians Tonka", precio: 150000 },
    { id: 2, nombre: "Mancera Red Tobacco", precio: 135000 },
    { id: 3, nombre: "Xerjoff Erba Pura", precio: 140000 },
    { id: 4, nombre: "Armani Stronger with You", precio: 95000 }
];

let carrito = []; 
let totalCarrito = 0;

function actualizarContador() {
    const contador = document.getElementById('carritoContador');
    let itemsEnCarrito = 0;
    
    for (let i = 0; i < carrito.length; i++) {
        itemsEnCarrito += carrito[i].cantidad;
    }

    contador.innerHTML = 'Carrito (' + itemsEnCarrito + ')';
}

function anadirPerfumeACarrito(idPerfume) {
    let perfumeEncontrado = null;

    for (let i = 0; i < listaPerfumes.length; i++) {
        if (listaPerfumes[i].id === idPerfume) { 
            perfumeEncontrado = listaPerfumes[i];
            break;
        }
    }
    
    if (perfumeEncontrado) {
        let itemExistente = null;

        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].id === idPerfume) {
                itemExistente = carrito[i];
                break;
            }
        }
        
        if (itemExistente) {
            itemExistente.cantidad += 1; 
        } else {
            const nuevoItem = {
                id: perfumeEncontrado.id,
                nombre: perfumeEncontrado.nombre,
                precio: perfumeEncontrado.precio,
                cantidad: 1
            };
            carrito.push(nuevoItem); 
        }
        
        alert("Perfume añadido: " + perfumeEncontrado.nombre); 
        actualizarContador();

    } else {
        alert("Error: Producto no válido.");
    }
}

function inicializarBotones() {
    for (let i = 1; i <= 4; i++) {
        const boton = document.getElementById('btnComprar' + i);
        const idPerfume = i; 
        
        if (boton) {
            boton.addEventListener('click', function() {
                anadirPerfumeACarrito(idPerfume);
            });
        }
    }
}

actualizarContador();
inicializarBotones();