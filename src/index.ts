{/* ------ TIPOS BÁSICOS ------ */}

let age : number = 5
const firstName : string = 'Kaio'
const isValid : boolean = true
let idk : any = 5 // basicamente tira a magia do ts

const ids : number[] = [1, 2, 3, 4, 5] // Isso fala pro js que vai ser uma lista de numeros
const booleans : boolean[] = [true, false, true, false]
const names : string[] = ['Kaio', 'Bea']

// TUPLA - Um tipo de variável que tenha um determinado tipo de valor em uma determinada ordem. Garantir uma ordem
const person : [number, string] = [1, 'k']
// Lista de tuplas
const people : [number, string][] = [
    [1, 'Bea'],
    [2, 'Doe'],
]

// INTERSECTIONS - Situações que a gnt quer que a variável possua um tipo ou outra
const productId : string | number = 1

// ENUM - Bom em situações em que tem um valor que sempre vai ser atribuida a outro valor.
enum Direction {
    Up = 1,
    Down = 2,   
}

const direction = Direction.Up // essa variável vai ser 1 
console.log(direction)

// TYPE ASSERTIONS - quando a gnt quet mudar o tipo da variável, trata uma variável que é de um determinado tipo diferente.
const productName : any = 'Boné'
// let itemId = productName as string
let itemId = <string>productName 

 {/* ------ FUNÇÕES NO TYPESCRIPT ------ */}


