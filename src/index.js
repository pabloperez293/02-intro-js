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
const useState = (valor) => {
    return[ valor, () => { console.log("hola mundo") } ];
}

const arr = useState( "goku" ) ;
console.log(arr)

arr[1]();