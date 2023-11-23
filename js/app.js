// Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');


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
        precio: curso.querySelector('precio').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
}