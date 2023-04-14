interface IPerson {
    id: number;
    sayMyName(): string
}

class Person implements IPerson {
    readonly id: number; // so da para alterar dentro do constructor
    protected name: string; // faz com que a variável só consiga ser acessada dentro na sua classe ou sub-classe
    private age: number; // so pode ser acessada dentro da classe

    constructor(id: number, name: string, age: number) {
        this.id = id
        this.name = name
        this.age = age
    }

    // Tipando métodos
    sayMyName(): string {
        return this.name
    }

}

const Walt = new Person(1, 'Heisenberg', 21)
