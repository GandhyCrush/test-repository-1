const arreglo = [6, 7, 8, 9, 10];

for (let numero of arreglo) {
  console.log(numero);
}

for (let indice in arreglo) {
  console.log(indice);
}

const resFind = arreglo.find((valor, indice, arreglo) => {
    /* console.log("valorActual", valor);
    console.log("indiceActual", indice);
    console.log("arreglo", arreglo); */
    return valor === 8;
});

console.log("Respuesta Find: ", resFind)

const resFilter = arreglo.filter((valor, indice, arreglo) => {
    return valor > 7;
});

console.log("Respuesta Filter: ", resFilter)

const resForEach = arreglo.forEach((valor, indice, arreglo) => {
    console.log("valorActual", valor);
});

console.log("Respuesta forEach: ", resForEach)


const resMap = arreglo.map((valor, indice, arreglo) => {
    return valor * 2;
});

console.log("Respuesta Map: ", resMap)