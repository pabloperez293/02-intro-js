const persona = {
    nombre: 'Tony',
    apellido: `Stark`,
    edad: 35,
    dire: {
        ciudad: "Angeles",
        zip: 1234142,
        lat: 123,
        lng: 1232352
    }

};

console.table(persona);
console.log({persona:persona})

// clonamos el obejto pero demostramos que no son iguales 

const persona2 = {...persona};
// con esto clonamos el objeto pero lo colocamos como orig
persona2.nombre = "pablo";

console.log(persona2)
