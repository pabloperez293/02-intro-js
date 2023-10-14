
const nombre = "pablo";
const apellido = "perez";


const nombreCompleto = ` ${nombre } ${apellido} ${ 1+ 1}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return `hola ` + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)} `)