let numViejo = 0;
let numNuevo = 0;
let operacion = 0;
var resultado = -1;

function cambiarVisor(num) {
    let visor = document.getElementById("visor");
    let visorActual = visor.getAttribute("placeholder");
    if (visorActual == resultado) {
        limpiarVisor();
        numViejo = 0;
        numNuevo = 0;
    }
    visorActual = visor.getAttribute("placeholder");
    visor.setAttribute("placeholder", visorActual + num);
    visorActual = visor.getAttribute("placeholder");
    numNuevo = visorActual;

}

function limpiarVisor() {
    let visor = document.getElementById("visor");
    visor.setAttribute("placeholder", "");
}

function borrar() {
    let visor = document.getElementById("visor");
    let visorActual = visor.getAttribute("placeholder");
    visorActual = visorActual.substring(0, visorActual.length - 1);
    visor.setAttribute("placeholder", visorActual);

}

function controlPunto() {
    let visor = document.getElementById("visor");
    let visorActual = visor.getAttribute("placeholder");
    if (visorActual.includes(".")) {
    } else {
        if (visorActual !== "") {
            cambiarVisor(".");
        }
    }
}

function cualOperacion(op) {
    console.log(op);
    switch (op !== 0) {
        case op == 1:
            operacion = 1;
            limpiarVisor();
            numViejo = numNuevo;
            break;
        case op == 2:
            operacion = 2;
            limpiarVisor();
            numViejo = numNuevo;
            break;
        case op == 3:
            operacion = 3;
            limpiarVisor();
            numViejo = numNuevo;
            break;
        case op == 4:
            operacion = 4;
            limpiarVisor();
            numViejo = numNuevo;
            break;
    }
}

function mostrarResultado() {
    console.log(operacion);
    switch (operacion !== 0) {
        case operacion == 1:
            limpiarVisor();
            sumar(parseFloat(numViejo), parseFloat(numNuevo));
            operacion = 0;
            break;
        case operacion == 2:
            limpiarVisor();
            restar(parseFloat(numViejo), parseFloat(numNuevo));
            operacion = 0;
            break;
        case operacion == 3:
            limpiarVisor();
            multiplicar(parseFloat(numViejo), parseFloat(numNuevo));
            operacion = 0;
            break;
        case operacion == 4:
            limpiarVisor();
            dividir(parseFloat(numViejo), parseFloat(numNuevo));
            operacion = 0;
            break;
    }


}

function sumar(num1, num2) {
    resultado = num1 + num2;
    cambiarVisor(resultado);
    console.log(resultado);
}
function restar(num1, num2) {
    resultado = num1 - num2;
    cambiarVisor(resultado);
    console.log(resultado);
}
function multiplicar(num1, num2) {
    resultado = num1 * num2;
    cambiarVisor(resultado);
    console.log(resultado);
}
function dividir(num1, num2) {
    if (num2 == 0) {
        alert("No se puede dividir por 0")
        limpiarVisor();
    } else {
        resultado = num1 / num2;
        cambiarVisor(resultado);
        console.log(resultado);
    }
}
