// Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

// Fuunciones de registro de Event Listener

cargarEventListeners()
function cargarEventListeners() {
    // Cuando agregas un curso al presionar "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso)
}

// Funciones

function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;

        leerDatosCurso(cursoSeleccionado)

    }
};

// Lee el contenido del HTML al que le dimos click y extrae la información del curso

function leerDatosCurso(curso) {
    console.log(curso);

    //crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('p span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);
    if(existe) {
        //Si existe, aumenta la cantidad
        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; // retorna el objeto actualizado
            } else {
                return curso; // retorna los objetos que no son los duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else {
        // Si no existe, agrega el elemento al arreglo del carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    } 

    carritoHTML();
}

// Muestra el carrito de compra
function carritoHTML() {
    // Limpiar el HTML
    limpiarHTML();

    // Recorrer el carrtito y generar el HTML 
    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr');
        const { imagen, titulo, precio, cantidad, id } = curso;
        row.innerHTML = `
            <td>
                <img src="${imagen}" widht="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}"> X </a></td>
        `;

        contenedorCarrito.appendChild(row);
    })
}

function limpiarHTML() {
    // forma lenta
    // contenedorCarrito.innerHTML = "";

    // forma rapida
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}