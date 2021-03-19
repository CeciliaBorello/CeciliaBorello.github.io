let palabra = "";
let banco = ["hola","chau","cecilia",'avion','barco'];
function generarPalabra(){
    let num = Math.floor(Math.random() * (6 - 0) + 0);
    console.log(num);
    palabra=banco[num];
    console.log(palabra);
}
