console.log('Happy developing ✨')

const mostrar = document.getElementById("mostrar");
let numero;

do {
    numero = Number(prompt("introduzca el més que quiere comprobar (entre 1 y 12)"));

} while(isNaN(numero) ||numero > 12 || numero < 1);

if (numero === 4 || numero === 6 || numero === 9 || numero === 11) {
    mostrar.innerHTML = "El mes tiene 30 días";
} else if (numero === 1 || numero === 3 || numero === 5 || numero === 7 || numero === 8 || numero === 10 || numero === 12) {
    mostrar.innerHTML = "El mes tiene 31 días";
} else if (numero === 2) {
    mostrar.innerHTML = "El mes tiene o 28 o 29 días dependiendo si el año es bisiesto o no";
} else {
    mostrar.innerHTML = "no se como has llegado aquí";
}

