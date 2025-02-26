/*
    Predicados / Type Guards

    Obtener información respecto al tipo de una variable. usualmente es validado por un bloque condicional
    Son funciones que retornan un booleano tomando un type y le comunican al compilador que puede ser ampliado
    a un tipo espefico
*/

export const isString = (value: unknown): value is string => {
    return typeof value === "string"
}

const name: unknown = "Pablito"
if(isString(name)) {
    console.log(name.toLowerCase())
} else {
    // do nothing.
}

// Che, si name_ es un string, quiero que tenga todas las propiedades de string¿

export const isNumber = (value: unknown): value is number => {
    return typeof value === 'number' && !Number.isNaN(value)
}

interface Person {
    name: string
    age: number
    address: {
        street: string
    }
}

function isPerson(obj:unknown): obj is Person {
    return (
        typeof obj === "object" && 
        obj !== null &&
        "name" in obj && 
        "age" in obj && 
        "address" in obj
    )
}

const variable: unknown = {
    name: "fran",
    age: 30,
    address: {
        stree:' bla'
    }
}

if(isPerson(variable)) {
    console.log(variable.name)
} else {
    // variable.
}