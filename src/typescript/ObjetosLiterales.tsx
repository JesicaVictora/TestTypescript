const c = 1;

interface corredores {
    nombre:string;
    ruedas:number;
    acelerar():void;
}

interface carriles {
    cantidad:number;    
}

class Rodados implements corredores, carriles{
    public nombre:string = '';
    public ruedas:number = 0;
    protected velocidad:number = 0;
    cantidad = 1;

    constructor(name:string) {
        this.nombre = name;
    }

    public acelerar():void {
        this.velocidad += 1;
    }
}

class Bicicleta extends Rodados{
    public ruedas:number = 2;
    protected manubrio:boolean = true;
    protected frenos:number = 1;

    constructor(nombre:string, frenos:number) {
        super(nombre);
        this.frenos = frenos;
    }
}

class Monopatin extends Rodados{
    public ruedas:number = 2;
    protected manubrio:boolean = true;
    protected frenos:number = 1;
    protected motor:string = 'electrico';

    constructor(nombre:string, motor:string) {
        super(nombre);
        this.motor = motor;
    }
}

class Automotores implements corredores{
    public nombre:string = '';
    public ruedas:number = 0;
    protected velocidad:number = 0;

    constructor(name:string) {
        this.nombre = name;
    }

    public acelerar():void {
        this.velocidad += 1;
    }
}


let monop = new Monopatin('patinete', 'a gas');
let byke2 = new Bicicleta('playera', 2);
let car1 = new Automotores('cochecito');

function carreras(vehiculo:corredores) {
    console.log('inscripto: '+vehiculo.nombre);
}

function adelantar(vehiculo:carriles){
    if(vehiculo.cantidad == 1){
        console.log('adelanta')
    }
}


carreras(monop);
carreras(car1);













// --------
interface Persona{
    nombre:string,
    edad: number,
    direccion:Direccion,
}

interface Direccion{
    pais:string,
    casaNo:number,
}


export const ObjetosLiterales = () => {
    const persona : Persona = {
        nombre: "Jesi",
        edad: 34,
        direccion : {
            pais: "España",
            casaNo: 212,

        }



    }
    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                {JSON.stringify(persona, null ,2) }

                </pre>

            </code>
            <p></p>
        </>
    )
}
