document.body.style.backgroundColor = "black";

function determinarColor(btn){
    let boton = document.getElementById(btn);
    let estilo = window.getComputedStyle(boton);
    let color = estilo.getPropertyValue("background-color");
    console.log(color);
    let colorFondo=document.body.style.getPropertyValue("background-color");
    console.log("color de fondo= " + colorFondo)
    if (document.body.style.backgroundColor === color){
        console.log("mismo color de fondo");
    }else{ 
        cambiarColor(color, colorFondo, btn);

    }

}

function cambiarColor(color, colorFondo, btn){

    document.body.style.backgroundColor = color;
    document.getElementById(btn).style.backgroundColor = colorFondo;

}

function definirBoton(num){
    var cualBoton = num;
    console.log("cualBoton= "+ cualBoton);
    switch (cualBoton!=0) {
        case cualBoton==1:
            determinarColor("btn1");
            break;
        case cualBoton==2:
            determinarColor("btn2");
            break;
        case cualBoton==3:
            determinarColor("btn3");
            break;
        case cualBoton==4:
            determinarColor("btn4");
            break;
        default:
            console.log("No pasa nada")
            break;
    }
}





