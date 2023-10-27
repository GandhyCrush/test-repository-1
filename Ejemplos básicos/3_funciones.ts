
function suma(a: number, b: number): number {
    return a + b;
}

const num1 = 10;
const num2 = 20;

const res = suma(num1, num2);
console.log("Respuesta Suma: ", res);


//Funciones anónimas
const suma2 = function (a: number, b: number): number {
    return a + b;
}
console.log("Respuesta Suma2: ", suma2(num1, num2));

//Fat arrow functions
const suma3 = (a: number) => a + 5
console.log("Respuesta Suma3: ", suma3(num1));