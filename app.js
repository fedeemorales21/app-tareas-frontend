/****************** Definición de clases ********************/
class Tarea {
    constructor(nombre,fecha){
        this.nombre = nombre
        this.fecha = fecha
    }
}

class UI{
    guardarTarea(obj){
        const lista = document.getElementById('lista')
        const elemento = document.createElement('div')
        elemento.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                TAREA : ${obj.nombre}
                <br>
                FECHA : ${obj.fecha}
                <br>
                <a href="#" class="btn btn-danger align-right" name="borrar">Borrar</a>
            </div>
        </div>`

        lista.appendChild(elemento)
        
    }

    eliminarTarea(obj){
        if (obj.name === 'borrar') {
            obj.parentElement.parentElement.parentElement.remove()
            this.mostrarMensaje('Tarea Eliminada', 'danger')
        }
    }

    mostrarMensaje(msg,color){
        const div = document.createElement('div')
        div.className = `alert alert-${color} mt-2`
        div.appendChild(document.createTextNode(msg))
        
        const container = document.querySelector('.container')
        const app = document.querySelector('#app')
        
        container.insertBefore(div, app)
        

        setTimeout(function () {
            document.querySelector('.alert').remove()
        }, 3000)
    }
    

    resetarFormulario() {
        document.getElementById('formulario').reset()
    }
}


/****************** Capturar los eventos ********************/


formulario.addEventListener('submit',(e)=>{
    
    const nombre = document.getElementById('nombre').value
    const fecha = document.getElementById('fecha').value
    
    
    const tarea = new Tarea(nombre,fecha)
    const ui = new UI()
    if (nombre === "" || fecha === "") {
        ui.mostrarMensaje('Complete los campos','warning')
    }else{
        ui.guardarTarea(tarea)
        ui.mostrarMensaje('Tarea Agregada','success')
        ui.resetarFormulario()
    }
    e.preventDefault()
})

document.getElementById('lista').addEventListener('click',  (e) =>{
    const ui = new UI()
    ui.eliminarTarea(e.target)
    e.preventDefault()
})