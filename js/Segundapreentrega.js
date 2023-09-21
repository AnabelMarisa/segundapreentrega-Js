alert("Bienvenidos a la Mejor Argencia de Tours de Granada");
let continuar = prompt("Desea adquirir un tour").toLowerCase().trim();
const carrito = [];
let total;
let mostrar = false;


function confirmacion(continuar) {
    verificacion(continuar);
}

function verificacion(continuar) {
    while(continuar !="si" && continuar != "no") {
        continuar = prompt('ingrese "si" o "no" para continuar').toLowerCase().trim();
    }
    if (continuar == "si") {
        mostrarProductos("estos son los tours disponibles",lista,total,false);
        comprar(lista);
    }
    else if (continuar == "no" && carrito.length != 0){
        mostrar = true;
        mostrarProductos("estos son los tours en su carrito",carrito, total,true); 
        alert("gracias por su visita");
    }
    else{
        alert("gracias por su visita");
    }
}

function comprar(lista) {
    let pedido = prompt("para comprar ingrese el nombre del tour").toLowerCase().trim();
    let mensaje = ("el tour no fue encontrado");
    const result = lista.find((ele) => ele.nombre == pedido);
    if (result != undefined  ) {
        carrito.push(new Producto(result.nombre, result.marca, result.precio));
        total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
        alert("el tour fue añadido al carrito");
        continuar = prompt("¿desea comprar mas?").toLowerCase().trim();
        verificacion(continuar);
    }
    else{
        alert ( mensaje);
        continuar = prompt("¿desea adquirir otro Tour?").toLowerCase().trim();
        verificacion(continuar);
    }
}
confirmacion(continuar);