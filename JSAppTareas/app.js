document.getElementById('formTarea').addEventListener('submit', guardarTarea);

function guardarTarea(e) {
   e.preventDefault();
   let titulo = document.getElementById('Titulo').value;
   let descripcion = document.getElementById('Descripcion').value;

   const tarea = {
       titulo, //es lo mismo que escribir titulo: titulo,
       descripcion //es lo mismo que escribir titulo descripcion: descripcion
   };

   //localStorage.setItem('tarea', JSON.stringify(tarea));
   //localStorage.getItem('tarea')
   //console.log(JSON.parse(localStorage.getItem('tarea')))

   if(localStorage.getItem('tareas') == null){
        let tareas=[];
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
   }else{
        let tareas = JSON.parse(localStorage.getItem('tareas'));
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
   }
   obtenerTareas();
   document.getElementById('formTarea').reset();

}

function obtenerTareas() {
    let itemTarea = JSON.parse(localStorage.getItem('tareas'));
    let vistaTarea = document.getElementById('Tareas');
    vistaTarea.innerHTML = '';

    if(itemTarea.length==null){}else{
        for(let i = 0; i < itemTarea.length; i++) {
        let titulo = itemTarea[i].titulo;
        let descrip = itemTarea[i].descripcion;
    
        vistaTarea.innerHTML += `<div class="card mb-3">
            <div class="card-body">
                <p>${titulo} - ${descrip}</p>
                <a href="#" onclick="borrarTarea('${titulo}')" class="btn btn-danger ml-5"> Borrar</a>
                
            </div>
            </div>`;
        }
    }
  }

obtenerTareas();

function borrarTarea(titulo){
    let tareaABorrar = JSON.parse(localStorage.getItem('tareas'));
    for(let i = 0; i < tareaABorrar.length; i++) {
        if (tareaABorrar[i].titulo== titulo){
            tareaABorrar.splice(i,1);
        }
    }
    localStorage.setItem('tareas', JSON.stringify(tareaABorrar));
    obtenerTareas();
}
