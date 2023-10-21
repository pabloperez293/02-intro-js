import { getHeroByID } from './bases/08-ImpExp'
import heroes from './data/heroes';
// Promesas 
// const promesa = new Promise( (res , rej ) => {
//     setTimeout(() => {
//         // console.log("Hola mundo")
//         // Tarea
//         // importar el element byID
//         const heroes = getHeroByID(2);
//         // rej("no se puede encontrar el heroe");
//         res( heroes )
//         // res();
//     }, 2000); // equivale a 2 seg

// });
// // cuando la promesa termine la testeamos
// // ejem ...then() esto es un metodo, por otro lado ..then( (callbakc ) =>)
// promesa.then( (heroe) => {
//     console.log("Heroe")
// })
// .catch(err => console.warn( err ))

const getHeroByIdAsync = (id) => {
    return new Promise( (res , rej ) => {
            setTimeout(() => {
             // Tarea
             // importar el element byID
            const heroes = getHeroByID(id);
            if(heroes) {
                res( heroes )
            } else{
                 rej(heroes);
            }}, 2000); // equivale a 2 seg        
         });
}

getHeroByIdAsync(2)
    // .then(heroes => console.log("Heroe", heroes))
    .then( console.log)

    //Tarea colocar catch
    .catch(err => console.warn("No se encuentra heroe"))