export class Livraria{
    livros: object[]
    quantidade: number

    constructor(livros: object[], quantidade: number){
        this.livros = livros
        this.quantidade = quantidade
    }
};


export default interface Livro{
    nome: string
    editora: string
};