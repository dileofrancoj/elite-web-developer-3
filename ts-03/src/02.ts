/*
    Utility Types
*/

// Partial

interface User {
    username:string
    address: string
    birthday: string
    name: string
    lastname: string
    email?: string
}

interface User1 {
    password: string

}
// Cambia todas las propiedades a opcionales
type CustomPerson2 = Pick<User, 'username' |'name'> | Pick<User1, 'password'> // 'username', 'name', 'password'

type CustomPerson = Pick<User, 'username' | 'name'>

const person: CustomPerson2 = {
    name: 'fran',
    username: 'francodileo',
    password: 'lapassworddefran'
}

type UserOptions= Omit<User, 'username'>
const person2: UserOptions = {
    birthday: '29/03/1994',
    address: 'bla',
    name: 'fran',
    lastname: 'dileo'
}

const joaco: Required<User> = {
    birthday: '29/03/1994',
    address: 'bla',
    name: 'joaco',
    lastname: 'loiza',
    email: 'joaco@mail.com'
}

// Return type
function greet(): string {
    return 'Hello'
}

type Greeting = ReturnType<typeof greet>

function add(a: number, b:number): number {
    return a + b
}

type Sum = ReturnType<typeof add>

const sum: Sum = add(1,2)

let timeoutId: ReturnType<typeof setTimeout>