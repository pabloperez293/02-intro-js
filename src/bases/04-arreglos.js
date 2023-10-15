// Arreglos en js

// const arreglo = new Array();
const arreglo = [1,2,3,4];
// no es recomendable usar el push porque edita al array original
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)
// arreglo.push(5)

let arreglo2 = [...arreglo , 6];

const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2;
});


console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );