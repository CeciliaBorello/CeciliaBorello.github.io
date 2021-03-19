var canvas = document.getElementById("canvas");
//Aquí estamos guardando una referencia al elemento <canvas> en la variable canvas
var ctx = canvas.getContext("2d");
//estamos creando la variable ctx para guardar el contexto de gráficos 2D

var radio = canvas.height / 2;
//guardamos el valor del radio
ctx.translate(radio, radio);
//movemos nuestra ubicacion al centro
radio = radio * 0.90;
//reducimos el radio para que el dibujo quede dentro de los limites del canva
function dibujarReloj() {
    dibujarFondo();
    dibujarNumeros();
    dibujarAgujas();
    
}


function dibujarFondo() {
    ctx.beginPath();
    ctx.Align="center";
    ctx.arc(0, 0, 280, 0, Math.PI * 2, false);
    /*arc(). Tiene seis parámetros:
    las coordenadas x e y del centro del arco
    el radio del arco
    los ángulos inicial y final (en radianes)
    la dirección hacia la que se dibujará (false para seguir el sentido de las agujas del reloj-valor por defecto).*/
    // el canvas tiene 610*610, por lo que el centro en 305;305, lugar donde se debe dibujar el circulo
    //el radio va a ser 300 tambien, para que ocupe todo el canva
    //angulo inicial 0, porque si
    //angulo final, se usa la formula para sacar los grados en radianes
    // indistinto el ultimo elemento
    ctx.fillStyle = "pink";
    //establacemos el colo de fondo
    ctx.fill();
    //Dibuja una forma solida rellenando el área del trazo.
    ctx.strokeStyle = "purple";
    ctx.lineWidth = 20;
    ctx.stroke();
    //Dibuja el contorno de la forma.
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(0, 0, 290, 0, Math.PI * 2, false);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.stroke();
    //Dibuja el contorno de la forma.
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(0, 0, 270, 0, Math.PI * 2, false);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.stroke();
    //Dibuja el contorno de la forma.
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, Math.PI * 2, false);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

}

/* function dibujarAgujas() {
    ctx.beginPath();
    //Nuestro lapiz tocará el canvas a x=20px, y=130px.
    ctx.moveTo(0, 0);
    //Esbozamos una línea desde x=20px, y=130px ( el punto definido anteriormente ) a x=230px, y=20px.
    ctx.lineTo(200, 0);
    //Finalmente trazamos nuestra linea. Note por favor que sin stroke() no habrá línea:
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    //Nuestro lapiz tocará el canvas a x=20px, y=130px.
    ctx.moveTo(0, 0);
    //Esbozamos una línea desde x=20px, y=130px ( el punto definido anteriormente ) a x=230px, y=20px.
    ctx.lineTo(0, 150);
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    //Finalmente trazamos nuestra linea. Note por favor que sin stroke() no habrá línea:
    ctx.stroke();
    ctx.closePath();

} */

function dibujarNumeros() {
    var ang;
    var num;
    ctx.beginPath();
    ctx.textBaseline= 'middle';
    ctx.textAlign="center";
    ctx.font = radio*0.20 + "px Cambria";
    
    for(num= 1; num < 13; num++){
        ang = num * Math.PI /6;
        ctx.rotate(ang);
        ctx.translate(0, -radio*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radio*0.85);
        ctx.rotate(-ang);
        //La pagina de donde lo saque dice esto:
        //Para la colocación de cada número en su lugar 
        //correcto, se establece a un 85% del radio de la circunferencia y girando cada número (pi/6).
    }
    

}