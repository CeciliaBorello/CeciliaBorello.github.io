class producto {
    constructor(nombre, precio, anioCreacion) {
        this.nombre = nombre;
        this.precio = precio;
        this.anioCreacion = anioCreacion;
    }


}

class interfaceDeUsuario {
    agregarProducto(producto) {

        let Lista_Productos = document.getElementById('listaDeProductos');

        const elemento = document.createElement('div');
        elemento.innerHTML = `
        <div class="card mb-3 text-center" id="producto">
            <div class="card-body">
                <strong>Nombre Producto</strong>: ${producto.nombre}
                <br>
                <strong>Precio Producto</strong>: ${producto.precio}
                <br>
                <strong>Anio Creacion Producto</strong>: ${producto.anioCreacion}
                <br>
                <a href="#" name="borrarProducto" class="btn btn-danger ml-5"> Borrar</a>
            </div>
        </div>`;
        Lista_Productos.appendChild(elemento);
        this.limparForm();
        this.mostrarMensaje("El producto se agrego correctamente", 'success');

    }

    limparForm() {
        document.getElementById('formProducto').reset();
    }

    eliminarProducto(elemento) {
        if (elemento.name === 'borrarProducto') {
            elemento.parentElement.parentElement.parentElement.remove();
        }
        this.mostrarMensaje("El producto se elimino correctamente", 'info');

    }

    mostrarMensaje(mensaje, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(mensaje));
        console.log(div);
        const contenedor = document.querySelector('.container2');
        const app = document.querySelector('#app');
        contenedor.insertBefore(div, app);
        setTimeout(function () { document.querySelector('.alert').remove(); }, 3000);


    }

}

//Eventos del documento
document.getElementById('formProducto').addEventListener("submit", capturarValores);

function capturarValores(e) {
    e.preventDefault();
    let ui = new interfaceDeUsuario
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let anio = document.getElementById('anio').value;

    if (nombre === '' || precio === '' || anio === '') {
        return ui.mostrarMensaje('Faltan ingresar datos', 'danger');
    }

    let produc = new producto(nombre, precio, anio);

    ui.agregarProducto(produc);
    ui.limparForm();


}

document.getElementById('listaDeProductos').addEventListener('click', function (e) {
    const ui = new interfaceDeUsuario();
    ui.eliminarProducto(e.target);
});