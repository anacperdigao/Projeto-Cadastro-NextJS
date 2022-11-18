// Classes em JavaScript provêm uma maneira mais simples e clara de criar objetos e lidar com herança.

// A palavra-chave static define um método estático de uma classe.
// Métodos estáticos são chamados sem a instanciação da sua classe e não podem ser chamados quando a classe é instanciada. 
// Métodos estáticos são geralmente usados para criar funções de utilidades por uma aplicação.

// Existem três tipos de métodos e propriedades: público, privado e protegido.
// No público, todo mundo tem acesso. Ou seja, o método pode ser utilizado em qualquer parte do nosso código.
// O privado só pode ser utilizado na classe em que foi criado.
// Já o protegido é menos rígido do que o privado mas não livre quanto o público. Ele permite que possamos acessar 
// dentro da classe - semelhante ao privado, mas também permite que classes herdeiras possam utilizar os métodos.

export default class Cliente {
    private id: string
    private nome: string
    private idade: number

    constructor(nome: string, idade: number, id: string){
        this.nome = nome
        this.idade = idade
        this.id = id
    }

    static Vazio(){
        return new Cliente('', 0, '')
    }

    get Id() {
        return this.id
    }

    get Nome() {
        return this.nome
    }

    get Idade() {
        return this.idade
    }

}