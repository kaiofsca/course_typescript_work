// Podemos manipular tanto os tipos de parametro da função quanto o tipo de retorno dessa função

const sum = (x: number, y:number) => {
    return x + y
}

const value = sum(2, 1)

// VOID - função que não retorna nada
const log = (message: string) => {
    console.log(message)
}