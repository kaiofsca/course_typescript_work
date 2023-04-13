// Type - Básicamente um objeto e podemos definir quais propriedades esse objeto vai ter e quais são os tipos dessas respectivas propriedades.
type Order = {
    productId : string
    price : number
}

type User = {
    firstName : string
    age : number
    email : string
    password? : string // se colocar o "?" avisa ao ts que é opcional
    orders: Order[]
}

const user : User = {
    firstName : 'Kaio',
    age : 19,
    email : 'k@gmail.com',
    password : '123',
    orders : [{productId: '1', price: 200}]
}

// Unios -  Une os tipos em uma variável só
type Author = {
    books : string[]
}
// O Author tem todas as propriedades dele mais as do User
const author: Author & User = {
    age : 35,
    books : ['the books on the table', 'The last nigth', ' Times of steel'],
    email : 'atrbraga@gmail.com',
    firstName: 'Arthuro Braga',
    orders : []
}

// Interfaces - São parecidas com Types mas tem algumas diferenças.
interface UserInterface {
    readonly firstName: string // apenas leitura (não pode alterar dps de criado)
    email : string
} 

const emailUser : UserInterface = {
    firstName : 'K',
    email : 'k@gmail.com'
}
