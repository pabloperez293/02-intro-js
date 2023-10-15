// Funciones en js

const saludar2 = function (nombre) {
    return `Hola, ${ nombre }`;
}
const saludar3 =  (nombre) =>  `Hola, ${ nombre }`;

const saludar4 =  () =>  `Hola mundo`;

console.log(saludar2("Spider"))
console.log(saludar3("Venom"))
console.log(saludar4())

const getUser = () => ({
    uid: "abc123",
    username: "el papi123"
})

console.log(getUser())

// Tarea
// 1 transformar a una funcion de flecha.
// 2. retornar un objeto implicito 
//  es quitar el return y encerrar con () las {}
// 3. pruebas
const getUsuarioActivo = ( nombre ) => ({
        uid: "abc654",
        username: nombre
    })   

const usuarioActivo = getUsuarioActivo("PAblito");
console.log(usuarioActivo);