/*
    - Herencia
    - Encapsulamiento: privacidad o visibilidad de métodos o atributos de un objeto
    - Abstraccion: Pensamos que métodos o atributos tendrá nuestra clase / función / objeto
    - Polimorfismo: Capacidad de un objeto de cambiar según el contexto. Multiples formas

*/

// Patrón modulo revelador
/*
    const fn = () => {
        const v = 1
        const b = 2
        const name="fran"

        const someFn = () => {
        }
        return {
            getName() {
                return name
            }
        }
    }
    fn().getName()

*/

class Person {
    private name: string = 'franco'//solo lo usan los elementos de la clase
    public lastname: string = 'di leo' // publico dentro y fuera
    public job: string = 'Dev en PeYa' //publico dentro y fera
    static age: number = 30
    protected protected_variable = 'hello protected' // no es visibile hacia afuera SOLO en clases que extienden

    public getName():string {
        return this.name
    }
}
console.log(Person.age) // miembro estático: no necesita instancia la clase Person
const fran: Person = new Person()
// console.log(fran.name) // name doesn't exist in fran
console.log(fran.lastname)
console.log(fran.getName())

interface PersonProps {
    name: string
    lastname:string
    work: string
    age: number
}

interface Person2Props {
    getName: () => string
    getWork: () => string
}
export class Person2 implements Person2Props  {
    protected someProp: string = ""
    constructor(public props: PersonProps) {}

    public getName(): string {
        return this.props.name + this.props.lastname
    }

    public getWork():string {
        return this.props.work
    }
}

const fede = new Person2({name: 'Fede', lastname: 'Liberatore', work:'MeLi',age: 36})
console.log(fede.getName())

interface DevProps {
    code: () => string[]
    setLanguages: (languages: string[])=> void
}

// Crear un objeto / clase que extienda de Person2 y además implemente DevProps
export class Dev extends Person2 implements DevProps {
    private languages: string[] = []
    
    constructor(public props: PersonProps) {
        super(props) // iniciar elconstructor de la clase padre (Person2)
    }
    
    setLanguages(languages:string[]){
        this.languages=languages
    }

    public code():string[] {
        return this.languages.concat(',')
    }

}