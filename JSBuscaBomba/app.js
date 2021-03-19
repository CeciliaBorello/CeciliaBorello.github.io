let num;
let contador = 0;

function generarNumero() {
    num = Math.floor(Math.random() * (37 - 1) + 1);
    console.log(num);
}

function queCuadro(cuadro) {
    console.log(cuadro);

    if (cuadro == num) {
        let boton = document.getElementById(cuadro);
        boton.style.backgroundImage = "url('bomba2.png')";
        contador = 0;
        window.setTimeout("acertar()",400);
    } else {
        contador++;
        let boton = document.getElementById(cuadro);
        console.log(boton);
        boton.style.backgroundImage = "url('cara.png')";
    }
    if (contador == 5) {
        let boton = document.getElementById(num);
        boton.style.backgroundImage = "url('bomba2.png')";
        contador = 0;
        window.setTimeout("fallar()",400);
    }

}

function recargar(){
    window.location.reload();
}

function acertar(){
    alert("Lo has conseguido! Has podido encontrar la Bomba! :)");
    recargar();
}
function fallar(){
    alert("Fallaste! No has podido encontrar la Bomba! :(");
    recargar();
}
