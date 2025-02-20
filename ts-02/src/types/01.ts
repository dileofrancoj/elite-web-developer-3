// type, interface
type NumberOrUndefined = number | undefined


const fran: Person = {
    name: 'franco',
    age: 30
}

interface Person {
    name: string
    age: number
}

 interface Hero extends Person{
    powers?: string[]
    getName?: () => string
}

interface Hero {
    team: string
}


const tonyStark: Hero = {
    name: 'Tonystark',
    age: 50,
    powers: ["IQ","Plata"],
    team: 'Marvel',
    getName: function() {
        return this.name
    }
}