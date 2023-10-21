// Impor , export y func
// import heroes from "./data/heroes"
// import {heroes} from "./data/heroes" 1
import heroes,{ owners } from "../data/heroes"

// console.log(owners);
// const getHeroByID = (id) =>{
//     return heroes.find((heroes) =>  {
//         if( heroes.id === id) {
//             return true;
//         }else{
//             return false;
//         }
//     });
// }
export const getHeroByID = (id) =>{
    return heroes.find((heroes) => heroes.id === id );
}
// console.log(getHeroByID(2));

// usamos el filter, con otra manera que no sea con  funcion de flecha
export const getHeroByOwner = ( owner ) => heroes.filter((heroes) =>  heroes.owner === owner);

// console.log(getHeroByOwner("Marvel"))

