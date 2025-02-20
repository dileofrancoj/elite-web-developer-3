/*
    ¿Genericos?

    Plantillas de codigo que pueden definir y reutilizarse en todo el codigo base.
    No son estáticas y son más flexibles
*/

import { HttpStatusCode } from "axios"
import { MaybeId } from "./types/products/base"

export const print = (arg: any) => {
    return arg
}

const someValue = 'some-value'
console.log(print(someValue).toUpperCase())

function printGeneric<T>(arg: T) {
    return arg
}

const result1 = printGeneric<string>('some-value').toUpperCase()
const result2 = printGeneric<number>(3.1415).toFixed(2)

interface Resource<T, U> {
    id: MaybeId
    data: T,
    status: U
}


interface User {
    name: string
    age: number
}

const userResource: Resource<User, HttpStatusCode> = {
    id: 123,
    data: {
        name: 'franco',
        age: 30
    },
    status: HttpStatusCode.Accepted
}

function map<T,U>(array:T[], fn: (element: T) => U): U[] {
    return array.map(fn)
}


const numbers  = [1,2,3,4] // T
const duplicatedNumbers = map<number,number>(numbers, (x) => x*2)




const words = ['hola','como', 'estas'] // U
const wordsLength = map<string, number>(words, (x) => x.length)
// map(numbers) // 2, 4, 6, 8
// map(words) // 4, 4 ,5

function waitFor<T>(value: T, time: number) {
    return new Promise<T>((resolve) => {
        setTimeout(() => {
            resolve(value)
        },time)
    })
}

waitFor<string>("hi",1000).then((result) => {
    console.log('result: ', result)
})

// Crear una función que devuelva sin repetir ( y sin soplar) los elementos de un array SIN USAR FILTER
function getUniqueItems<T>(list: T[]): T[] {
    return Array.from(new Set(list))
}
let big2 = BigInt(9007199254099);
getUniqueItems<number | bigint>([1,2,3,3,big2]) // 1,2,3
