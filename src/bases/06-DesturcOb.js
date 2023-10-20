// Desestructuracion o asignacion desestructurante

const persona = {
    nombre : "tony",
    edad: 23,
    clave: "ironman",
 };

 const { nombre, edad, clave } = persona;

//  console.log(nombre);
//  console.log(edad);
//  console.log(clave);

const retornaPersona = ({nombre, clave, edad, rango="capitan"}) => {
    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        años: edad,
        latlng:{
            lat: 12.2356,
            lng: 12523
        }   
    }
}
// Desestructuracion
const { nombreClave, años, latlng:{lat, lng}} = retornaPersona( persona );

console.log( nombreClave ,años);
console.log( lat, lng );