class Producto{
    constructor(bebida,precio){
        this.bebida = bebida.toUpperCase();
        this.precio = Number(precio);
    }
}



let bebida = prompt("Ingresá la bebida")
let precio = prompt("Ingresá cuanto vale")
let total = 0;

const productos = [];

while (bebida != "ESC") {
    productos.push(new Producto(bebida, precio));
    bebida = prompt("Ingresá otra bebida o ESC para terminar")
    precio = prompt("Ingresá cuanto vale o ESC para terminar")

}


for (const dato of productos) {
     alert("Compraste: " + dato.bebida + " por una valor de: " + dato.precio )
}
 

for (let i = 0; i < productos.length; i++) {
    total += productos[i];
}
alert("El total es de: " + total);

