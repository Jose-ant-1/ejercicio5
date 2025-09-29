console.log('Happy developing ✨')

let numero; //para tomar el número de mes que vamos a buscar

const meses = [
    {nombre: "Enero", dias: 31},
    {nombre: "Febrero", dias: 28},
    {nombre: "Marzo", dias: 31},
    {nombre: "abril", dias: 30},
    {nombre: "Mayo", dias: 31},
    {nombre: "Junio", dias: 30},
    {nombre: "Julio", dias: 31},
    {nombre: "Agosto", dias: 31},
    {nombre: "Septiembre", dias: 30},
    {nombre: "Octubre", dias: 31},
    {nombre: "Noviembre", dias: 30},
    {nombre: "Diciembre", dias: 31}
] // para guardar todos los meses y sus días correspondientes

let mesesCon30 = filtrarNombreMeses(30); //para tomar un array con los nombres de los meses que tienen 30 días
let mesesCon31 = filtrarNombreMeses(31); //para tomar un array con los nombres de los meses que tienen 31 días
let mesCon28 = filtrarNombreMeses(28); //para tomar un array con los nombres de los meses que tienen 28 días

//función que filtra los nombres según los días que tenga el mes que buscamos
function filtrarNombreMeses(numeroDias) {
    return meses.filter(i => i.dias === numeroDias).map(i => i.nombre);
}

//reacción al evento de cargar la página
document.addEventListener("DOMContentLoaded", () => {
    //mostramos por consola que ha cargado al página
    console.log("el documento ha cargado");
    //bucle para tomar el valor de manera correcta
    do {
        numero = Number(prompt("Introduzca el mes que quiere comprobar (entre 1 y 12)"));
    } while (!comprobarEntradaNumero(numero));
    //constantes para mostrar los meses con 30 y 31 días
    console.log("El numero introducido a sido" + numero);
    //tomamos los valores del html para poder mostrarlos
    const mosrtar31Dias = document.getElementById("meses31Dias");
    const mosrtar30Dias = document.getElementById("meses30Dias");

    //con esto pasamos de array a String con un <br> de por medio entre elementos
    mosrtar31Dias.innerHTML = mesesCon31.join("<br>");
    mosrtar30Dias.innerHTML = mesesCon30.join("<br>");
    //guardamos el mes que se ha pedido a observar
    const mesSeleccionado = meses[numero - 1];
    //mostramos los datos que hemos procesado
    const mostrar = document.getElementById("mostrar");
    mostrar.innerHTML = `El mes ${numero} es el mes ${mesSeleccionado.nombre} y tiene ${mesSeleccionado.dias} días<br>
                     Los meses con 30 días son: ${mesesCon30} <br>
                     Los meses con 31 días son: ${mesesCon31} <br>
                     El mes con 28 días es: ${mesCon28}`;

});

//funcion que comprueba si el número introducido es correcto
function comprobarEntradaNumero(numeroAComprobar) {
    return !isNaN(numeroAComprobar) && numeroAComprobar >= 1 && numeroAComprobar <= 12;
}

/*
let mesesCon30 = diasMeses
    .map((dias, i) => dias === 30 ? i + 1 : null)
    .filter(i => i !== null);
let nombreMesesCon30 = mesesCon30
    .map(i => nombreMeses[i - 1]);


let mesesCon31 = diasMeses
    .map((dias, i) => dias === 31 ? i + 1 : null)
    .filter(i => i !== null);
let nombreMesesCon31 = mesesCon31
    .map(i => nombreMeses[i - 1]);

let mesCon28 = diasMeses.findIndex(dias => dias === 28) + 1;
let nombreMesCon28 = nombreMeses[mesCon28 - 1];
*/

/*
if (numero === 4 || numero === 6 || numero === 9 || numero === 11) {
    mostrar.innerHTML = "El mes tiene 30 días";
} else if (numero === 1 || numero === 3 || numero === 5 || numero === 7 || numero === 8 || numero === 10 || numero === 12) {
    mostrar.innerHTML = "El mes tiene 31 días";
} else if (numero === 2) {
    mostrar.innerHTML = "El mes tiene o 28 o 29 días dependiendo si el año es bisiesto o no";
} else {
    mostrar.innerHTML = "no se como has llegado aquí";
}
*/
