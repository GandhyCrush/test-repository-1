interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
}

const persona: Persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30
}

const nuevaPersona = {
    ...persona,
    edad: 31,
    nota: 10
}

console.log(nuevaPersona);