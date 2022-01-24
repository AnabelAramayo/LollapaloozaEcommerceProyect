/*Calcular el costo total de los productos seleccionados*/
function Producto(tipo, nombre, costo, stock) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.costo = costo;
    this.stock = stock;


    this.infoDelProducto = function () {
        console.log("El producto es un/a " + this.tipo + ". Su nombre es: " + this.nombre + ". Cuesta: " + this.costo + (this.stock == true ? ". Hay stock" : ". No hay stock"));
    }
}

let remeraDevil = new Producto ("Remera", "Devil", 2100, true);
let remeraStayAway = new Producto ("Remera", "StayAway", 3500, false);
let posterStrokes = new Producto ("Poster", "The Strokes", 1000, true);
let posterTameImpala = new Producto ("Poster", "Tame Impala", 990, false);
let rinoneraAlex = new Producto ("Rinonera", "Alex", 1100, true);


//Calcular el costo total de un producto
function costoTotal (agregarAlCarrito, cantidad) {
    let costoTotal = 0;
    if (agregarAlCarrito.stock!=false){
        costoTotal = agregarAlCarrito.costo * cantidad;
        return "El costo total del producto es de " + costoTotal;
    } else {
        return 'No tenemos stock por ahora del '+ agregarAlCarrito.tipo + ' ' + agregarAlCarrito.nombre + ', nuestra culpa, acá tenes un descuento del %5 para tu próxima compra';
    }
}

console.log(costoTotal(posterStrokes, 3))
console.log(costoTotal(posterTameImpala, 2))

function buscarProducto (ingresaTuBusqueda){
    while ((remeraDevil.nombre || remeraStayAway.nombre || posterStrokes.nombre || posterTameImpala.nombre || rinoneraAlex.nombre ||  remeraDevil.tipo || posterStrokes.tipo || rinoneraAlex.tipo) == ingresaTuBusqueda){
        console.log('Aca esta lo que buscabas');
    } console.log("No tenemos ese producto o banda, intentá buscando otra cosa")
}

buscarProducto("Alex");
