/* 
* * * Array.map * * *
El método de map nos permite transformar los elementos de un arreglo.
Donde el método de map, va a tomar un arreglo de una cantidad
determinada y nos va a devolver otro arreglo que va a tener exactamente
la misma longitud que el arreglo inicial, pero con todos los elementos
cambiados dependiendo de la función que se aplico a estos elementos+
*/

const suma = (ns) => {
    let acumulado = 0;
    for (i = 0; i < ns.length; i++) {
        acumulado += ns[i];
    }
    return acumulado;
}


const numeros = [1, 2, 3, 4, 5];
// multiplicar * 2
const multiplicados = numeros.map(x => x * 2);
console.log(multiplicados);
// a pares
const pares = numeros.map(x => [x, x]);
console.log(pares);

const mascotas = [
    { nombre: 'Puchini', edad: 12, tipo: 'perro' },
    { nombre: 'Chanchito feliz', edad: 3, tipo: 'perro' },
    { nombre: 'Pulga', edad: 10, tipo: 'perro' },
    { nombre: 'Pelusa', edad: 12, tipo: 'gato' },
];

// edad promedio
const edadMascotas = mascotas.map(mascota => mascota.edad);
const edadPromedioMascotas = suma(edadMascotas) / edadMascotas.length;
console.log(edadPromedioMascotas);