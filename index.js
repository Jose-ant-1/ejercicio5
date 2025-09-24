console.log('Happy developing ✨')

const mostrar = document.getElementById("mostrar");
let numero;

do {
    numero = Number(prompt("Introduzca el mes que quiere comprobar (entre 1 y 12)"));
} while (isNaN(numero) || numero > 12 || numero < 1);

let meses = [31,28,31,30,31,30,31,31,30,31,30,31];
let mesesCon30 = [];
let mesesCon31 = [];

meses.forEach((dias, i) => {
    if (dias === 30) {
        mesesCon30.push(i + 1);
    }
});


meses.forEach((dias, i) => {
    if (dias === 31) {
        mesesCon31.push(i + 1);
    }
})

let mesCon28;
meses.forEach((dias, i) => {
    if (dias === 28) {
        mesCon28 = (i + 1);
    }
})
mostrar.innerHTML = `El mes ${numero} tiene ${meses[numero - 1]} días<br>
                     Los meses con 30 días son: ${mesesCon30.join(", ")} <br>
                     Los meses con 31 días son: ${mesesCon31.join(", ")} <br>
                     El mes con 28 días es: ${mesCon28}`;


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

