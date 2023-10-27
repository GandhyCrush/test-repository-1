interface Animal {
    readonly name?: string;
    age?: number;
}

//var animal = new Animal();

interface SquareConfig {
    color?: string;
    width?: number;
}

let mySquare = createSquare({color: "black"});

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        //Error: Property "clor" does not exist on type "SquareConfig"
        //newSquare.color = config.clor;
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

console.log(mySquare);

/*
class Cat implements Animal {
    //Compilation error: Cat does not implement Animal
}
 */
class Cat implements Animal {
    public readonly name?: string;
    public age?: number;
}

interface Usuario {
    nombre: string;
    apellido: string;
    edad?: number | undefined //opcional
    sueldo?: number; //opcional
    casado: boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';
    imprimirUsuario: (mensaje: string) => string | 'BN';
    calcularImpuesto: (impuesto: number) => number;
    estadoActual: () => 'AP' | 'AF' | 'AT';
    // calcularImpuesto parametro numero impuesto, sueldo + sueldo * impuesto
    // estadoActual no reciba parametros, 'AP' 'AF 'AT'
}

let user: Usuario = {
    nombre: 'Gandhy',
    apellido: 'García',
    casado: 0,
    sueldo: 11.2,
    estado: 'AC',
    imprimirUsuario: (mensaje) => {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: impuesto => {
        if (user.sueldo) {
            return user.sueldo + user.sueldo * impuesto;
        }
        return 0;
    },
    estadoActual: () => {
        switch (user.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            //case 'BN':
            default:
                return 'AT';      
        }
    }

}