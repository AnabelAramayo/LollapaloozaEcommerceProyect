/*Productos*/
class Producto {
    constructor(tipo, nombre, precio, stock) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
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

let arrayProductos = [
    remeraStayAway,
    remeraBrainDead,
    remeraCereales,
    remeraStayTrippy,
    remeraMindControl,
    remeraDevil,
    buzoTop,
    buzoEsqueleto,
    buzoObey,
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
    posterImagineDragons,
    rinoneraAlex,
    rinoneraColaboKappa,
    rinoneraFeliz,
    barbijoHongos,
    gorroPiluso
];


// FUNCIONES PARA CARRITO

let carrito = [];

function agregarProductos() {
    let mostrarProductos = '';
    let bandera = false;
    let pregunta = prompt('¿Querés agregar productos a tu carrito? En el caso de no querer agregar, ingresá "No gracias"');

    while (pregunta != 'No gracias' && bandera == false) {
        mostrarProductos = prompt('Bien, estos son nuestros productos :). Elegí cuál querés escribiendo el número del que quieras, en el caso de no querer ningun producto más escribi "Termine":       REMERAS: 1. Stay Away, 2. Brain Dead, 3. Cereales, 4. Stay Trippy, 5. Mind Control, 6. Devil.       BUZOS: 7. TOP, 8. Esqueleto, 9. Obey.       POSTERS: 10. Strokes, 11. TameImpala, 12. Tame Impala Psico, 13. TLSP, 14. AM Espacio, 15. Gorillaz, 16. Foo Fighters, 17. Arctic Monkeys, 18. Tame Impala, 19. RHCP, 20. Imagine Dragons.      RIÑONERAS: 21. Alex, 22. Colabo Kappa, 23. Feliz.       BARBIJOS: 24. Hongos.       GORROS: 25. Piluso')
        switch (mostrarProductos) {
            case '1':
                carrito.push(remeraStayAway);
                alert('Agregado');
                break;
            case '2':
                carrito.push(remeraBrainDead);
                alert('Agregado');
                break;
            case '3':
                carrito.push(remeraCereales);
                alert('Agregado');
                break;
            case '4':
                carrito.push(remeraStayTrippy);
                alert('Agregado');
                break;
            case '5':
                carrito.push(remeraMindControl);
                alert('Agregado');
                break;
            case '6':
                carrito.push(remeraDevil);
                alert('Agregado');
                break;
            case '7':
                carrito.push(buzoTop);
                alert('Agregado');
                break;
            case '8':
                carrito.push(buzoEsqueleto);
                alert('Agregado');
                break;
            case '9':
                carrito.push(buzoObey);
                alert('Agregado');
                break;
            case '10':
                carrito.push(posterStrokes);
                alert('Agregado');
                break;
            case '11':
                carrito.push(posterTameImpala);
                alert('Agregado');
                break;
            case '12':
                carrito.push(posterTameImpalaPsico);
                alert('Agregado');
                break;
            case '13':
                carrito.push(posterTLSP);
                alert('Agregado');
                break;
            case '14':
                carrito.push(posterAMEspacio);
                alert('Agregado');
                break;
            case '15':
                carrito.push(posterGorillaz);
                alert('Agregado');
                break;
            case '16':
                carrito.push(posterFooFighters);
                alert('Agregado');
                break;
            case '17':
                carrito.push(posterArcticMonkeys);
                alert('Agregado');
                break;
            case '18':
                carrito.push(posterTameImpala);
                alert('Agregado');
                break;
            case '19':
                carrito.push(posterRHCP);
                alert('Agregado');
                break;
            case '20':
                carrito.push(posterImagineDragons);
                alert('Agregado');
                break;
            case '21':
                carrito.push(rinoneraAlex);
                alert('Agregado');
                break;
            case '22':
                carrito.push(rinoneraColaboKappa);
                alert('Agregado');
                break;
            case '23':
                carrito.push(rinoneraFeliz);
                alert('Agregado');
                break;
            case '24':
                carrito.push(barbijoHongos);
                alert('Agregado');
                break;
            case '25':
                carrito.push(gorroPiluso);
                alert('Agregado');
                break;
            case 'Termine':
                alert('Okei!');
                bandera = true;
                break;
            default:
                alert('No tenemos ese...');
        }

        if (bandera) {
            pregunta == 'No gracias';
        }
    }
}

agregarProductos();

console.log('Estos son los productos que agregaste a tu carrito: ')
console.log(carrito)

function mostrar() {
    for (let i = 0; i < carrito.length; i++) {
        document.getElementById('primerProducto').innerHTML = document.getElementById('primerProducto').innerHTML + `
        <section class="contenedorProductoCarrito">
                    <div class= "contenedorTextoCarrito">
                        ${carrito[i].tipo +  ' ' + carrito[i].nombre}
                        $ ${carrito[i].precio}
                    <div class="contenedorContadorCarrito">
                    <button type="button" value="Menos" class="botonMenos">-</button>
                    <p>1</p>
                    <button type="button" value="Mas" class="botonMas">+</button>
                    </div>
                </div>
            </section>` + 
            `
            <section class="contenedorSubtotal">
            $ ${carrito[i].precio}
            <button type="button" class="botonEliminar"><i class="fas fa-trash-alt"></i></button>
            </section>
            `;
    }
}


mostrar();

function buscarEnElCarrito() {
    let buscarProductoCarrito = document.getElementById('inputBusqueda').value;
    let resultado = carrito.filter((i) => i.nombre == buscarProductoCarrito);
    return document.getElementById('resultadoBusqueda').innerHTML = document.getElementById('resultadoBusqueda').innerHTML + 'Estabas buscando: ' + resultado[0].tipo + ' ' + resultado[0].nombre + ' ' + '$' + resultado[0].precio;
}

buscarEnElCarrito();

function precioTotalaPagar() {
    return carrito.reduce((acum, num) => acum + num.precio, 0)
}

document.getElementById('resultadoTotal').innerHTML = precioTotalaPagar();

let carritoModificado = [];
function sacarProductoDelCarrito() {
    let pregunta = prompt('Queres sacar algun producto de tu carrito? Responde si o no');

    if (pregunta == 'si') {
        for (let i = 0; i < carrito.length; i++) {
            alert('Tenes tu producto: ' + carrito[i].nombre + '. Su número de codigo es el: ' + i);
            carritoModificado.push(carrito[i]);
        }

        let productoASacar = prompt('Que producto queres sacar? Escribí el código del producto');

        if (productoASacar != -1) {
            carritoModificado.splice(productoASacar, 1)
        } else {
            console.log('No tenes ese producto en tu carrito')
        }
    }
}

sacarProductoDelCarrito();
console.log('Así quedo tu carrito modificado:');
console.log(carritoModificado);



//FUNCIONES PARA FILTROS EN LA PAGINA MERCH

function ordarPrecioMenorAMayor(array) {
    return array.sort((a, b) => a.precio - b.precio)
}

console.log('Estamos ordenando de Menor a Mayor el array completo de remeras:')
console.log(ordarPrecioMenorAMayor(arrayRemeras));

/*
function ordarPrecioMayorAMenor(array) {
    return array.sort((a, b) => b.precio - a.precio)
}

console.log(ordarPrecioMayorAMenor(arrayRemeras));
*/
