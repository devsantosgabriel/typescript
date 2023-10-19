//classe genérica
class Tarefa<Type>{
    nome: Type
    descricao: Type

    constructor(nome, descricao){
        this.nome = nome;
        this.descricao = descricao
    }
};

let tarefa = new Tarefa('Estudar', 'Preciso estudar para a prova');


//interface genérica
interface Livro<Type>{
    nome: Type
    editora: Type
};

let novoLivro : Livro<string>

novoLivro={
    nome: 'HP',
    editora: 'Abril'
};

//função genérica
function identificar<Type>(arg: Type): Type{
    return arg
};

let saida = identificar('oi')
