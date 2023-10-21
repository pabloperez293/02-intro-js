
// Desss de arrays 

const personajes = ["Goku",`Vegeta`,`Gohan`];

const [, , p1 ] = personajes;

console.log( p1 )

const retornoArreglo = () => {
    return["abc", 123];
}

// const [, arr] = retornoArreglo();

// console.log(arr)

const [letras, numeros] = retornoArreglo();
console.log(letras, numeros);

// Tarea
// 1 el primer valor del arreglo se llamara nombre
// 2 el segundo se llamara setNOmbre
const useState = (valor) => {
    return[ valor, () => { console.log("Hola mundo") } ]; }

// eslint-disable-next-line react-hooks/rules-of-hooks
const [nombre , setNombre ] = useState("nombre");

console.log(nombre, setNombre);
setNombre();