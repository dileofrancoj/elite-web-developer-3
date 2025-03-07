/*
    interfaz Builder: Define la interfaz común para los objetos concretos (Product, Person, etc.)
    Class Person implement Builder - Persona1 , Persona2, etc...
    Director - guia el proceso de creación de esos concretebuilder utilizando un builder específico (tarea)
*/

interface Person {
    name: string
    lastname: string
    dni?: string
    hair?: boolean
    height?: number
    weight?: number
    email?: string
}

interface PersonBuilderProps {
    // withName: (name: string) => PersonBuilder
    // withLastname: (lastname: string) => PersonBuilder
    withDni: (dni:string) => PersonBuilder
    withEmail: (email: string) => PersonBuilder
    build(): Person
}

class PersonBuilder implements PersonBuilderProps {
    public readonly person: Partial<Person>
    constructor(props: Pick<Person, 'name' | 'lastname'>) {
        this.person = {
            name: props.name,
            lastname: props.lastname
        }
    }
    withDni(dni: string): PersonBuilder{
        this.person.dni = dni
        return this
    }

    withEmail(email: string): PersonBuilder {
        this.person.email = email
        return this
    }

    build(): Person {
        // validaciones necesarias
        if(!this.person.name || !this.person.lastname) {
            throw new Error('name y lastname son obligatorios')
        }
        return this.person as Person
    }
}

const concretePerson = new PersonBuilder({name: 'fran', lastname:'Di Leo'}).withDni('3182312').withEmail('dileo.francoj@gmail.com')
console.log(concretePerson.build().name)
