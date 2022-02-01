/*Productos*/
// REEMPLAZAR EL CONSTRUCTOR POR CLASES
function Producto(tipo, nombre, precio, stock) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;


    this.infoDelProducto = function () {
        console.log("El producto es un/a " + this.tipo + ". Su nombre es: " + this.nombre + ". Cuesta: " + this.precio + (this.stock == true ? ". Hay stock" : ". No hay stock"));
    }
}


let remeraDevil = new Producto("Remera", "Devil", 2100, true);
let remeraStayAway = new Producto("Remera", "StayAway", 3500, false);
let remeraBrainDead = new Producto('Remera', 'Brain Dead', 2700, true);
let remeraCereales = new Producto('Remera', 'Cereales', 3000, false);
let remeraStayTrippy = new Producto('Remera', 'Stay Trippy', 2500, true);
let remeraMindControl = new Producto('Remera', 'Mind Control', 3100, true);

let buzoTop = new Producto('Buzo', 'Top', 2100, false);
let buzoEsqueleto = new Producto('Buzo', 'Esqueleto', 2100, true);
let buzoObey = new Producto('Buzo', 'Obey', 4100, false);

let posterStrokes = new Producto("Poster", "The Strokes", 1000, true);
let posterTameImpalaPsico = new Producto('Poster', 'Tame Impala Psico', 900, true);
let posterTLSP = new Producto('Poster', 'The last shadow puppets', 1100, false);
let posterAMEspacio = new Producto('Poster', 'Arctic Monkeys', 1000, true);
let posterGorillaz = new Producto('Poster', 'Gorillaz', 980, true);
let posterFooFighters = new Producto('Poster', 'Foo Fighters', 800, true);
let posterArcticMonkeys = new Producto('Poster', 'Arctic Monkeys', 700, false);
let posterTameImpala = new Producto('Poster', 'Tame Impala', 990, false);
let posterRHCP = new Producto('Poster', 'RHCP', 2000, true);
let posterImagineDragons = new Producto('Poster', 'Imagine Dragons', 500, true);


let rinoneraAlex = new Producto("Rinonera", "Alex", 1100, true);
let rinoneraColaboKappa = new Producto("Rinonera", "Colabo Kappa", 1300, true);
let rinoneraFeliz = new Producto("Rinonera", "Feliz", 800, false);

let barbijoHongos = new Producto("Barbijo", "Hongos", 500, true);

let gorroPiluso = new Producto("Gorro", "Piluso", 900, true);


//ARRAYS

let arrayRemeras = [
    remeraStayAway,
    remeraBrainDead,
    remeraCereales,
    remeraStayTrippy,
    remeraMindControl,
    remeraDevil
];

let arrayBuzos = [
    buzoTop,
    buzoEsqueleto,
    buzoObey
];

let arrayPosters = [
    posterStrokes,
    posterTameImpala,
    posterTameImpalaPsico,
    posterTLSP,
    posterAMEspacio,
    posterGorillaz,
    posterFooFighters,
    posterArcticMonkeys,
    posterTameImpala,
    posterRHCP,
    posterImagineDragons
];

let arrayRinoneras = [
    rinoneraAlex,
    rinoneraColaboKappa,
    rinoneraFeliz
];

let productosALaVenta = [
    arrayRemeras,
    arrayBuzos,
    arrayPosters,
    arrayRinoneras,
    barbijoHongos,
    gorroPiluso
];


// FUNCIONES
//Calcular el costo total de un producto

let costoTotalPorProducto = (producto, cantidad) => {
    let costoTotal = 0;
    if (producto.stock) {
        costoTotal = producto.precio * cantidad;
        return "El costo total es de " + costoTotal + '. Te estas llevando ' + cantidad + ' ' + producto.tipo;
    } else {
        return 'No tenemos stock por ahora del ' + producto.tipo + ' ' + producto.nombre + ', nuestra culpa, acá tenes un descuento del %5 para tu próxima compra';
    }
}


//Primera entrega
/*
let esMayor = prompt('¿Listo para comprar tus entradas?');
if (esMayor <= 'si') {
    let podesComprarEntradas = '';
    while (podesComprarEntradas < 18) {
        podesComprarEntradas = prompt("¿Cuantos años tenes? Tenes que ser mayor de edad para comprar entradas")
    } alert("Podes comprar entradas")
}
*/


// filtrar productos que tienen stock

function tienenStock(array) {
    let productoConStock = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].stock == true) {
            productoConStock.push(array[i])
        }
    }
    return productoConStock;
}

console.log(tienenStock(arrayRemeras));

let carrito = [];
function agregarProductosAlCarrito() {
    let agregarProductos = '';
    while (agregarProductos != 'nada') {
        agregarProductos = prompt('¿Qué queres llevarte?');
        carrito.push(agregarProductos)
    }
    console.log('Te estas llevando ' + carrito)
}

agregarProductosAlCarrito();

function buscarEnElCarrito() {
    let buscarProductoCarrito = prompt('Qué estas buscando de tu carrito?')
    return carrito.filter((i) => i.nombre || i.tipo == buscarProductoCarrito)
}

console.log(buscarEnElCarrito());

function ordarPrecioMenorAMayor(array) {
    return array.sort((a, b) => a.precio - b.precio)
}

console.log(ordarPrecioMayorAMenor());

function ordarPrecioMayorAMenor(array) {
    return array.sort((a, b) => b.precio - a.precio)
}

console.log(ordarPrecioMayorAMenor());

function precioTotalaPagar () {
    return carrito.reduce((acum, num)=>acum + num.precio, 0)
}

console.log(precioTotalaPagar());

function sacarProductoDelCarrito (producto) {
    let productoASacar = carrito.indexOf(producto);
    if (productoASacar != -1) {
        carrito.splice(productoASacar, 1)
    }else {
        console.log('No tenes ese producto en tu carrito')
    }
}

console.log(sacarProductoDelCarrito('buzoTOP'));


