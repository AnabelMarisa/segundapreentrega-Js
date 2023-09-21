
const lista = [];
lista.push(new Producto("Show de Flamenco", "Venta el Gallo", 32));
lista.push(new Producto("Baños Arabes", "Baños de Elvira", 42));
lista.push(new Producto("Tour Guiado por la Alhambra", "Patronato de la Alhambra", 19));
lista.push(new Producto("Visita al Estadío los Carmenes", "Vamos a la Cancha", 65));
lista.push(new Producto("Los Cahorros de Monachil", "Treking tour", 30));
lista.push(new Producto("Tren Turistico", "Alsa", 9));


function mostrarProductos(mensaje,lista, total,mostrar) {
    const misProductos = lista.map((productos) =>  (`${productos.nombre} ${productos.precio}€`));
    if(mostrar)
        alert(`${mensaje}:\n${misProductos.join("\n")}\nTotal: $${total}`)
    else
        alert(`${mensaje}:\n${misProductos.join("\n")}`)

}