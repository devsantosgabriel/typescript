/*herdando da classe mãe e utilizando o super por causa que na classe mae tem construtor
como no construtor tem argumento, ao utilizar o super os argumentos devem ser passados também, tanto para o super
quanto para o construtor*/
class Escola{
    nome: string
    bairro: string

    constructor(nome, bairro){
        this.nome = nome,
        this.bairro = bairro
    }
};

/*uma classe pode herdar somente de uma classe, mas pode herdar várias interfaces
além disso, uma classe pode herdar uma classe e ao mesmo tempo herdar uma interface*/
class Aluno extends Escola implements Cadastro{
    nomeAluno : string
    turma: number
    id: number
    cpf: number
    cadastrar(): void {
        console.log('Cadastrado')
    }

    constructor(nome, bairro,nomeAluno, turma){
        
        super(nome, bairro);
            this.nomeAluno = nomeAluno;
            this.bairro = bairro;
            this.turma = turma
            this.nome = nome  
    };
};

/*herdando da classe mãe e utilizando o super por causa que a classe mãe tem construtor, como no construtor
não há argumentos, dessa vez não foi necessário passar argumentos para o super*/
class Animal{
    nome: string

    constructor(){
        this.nome = 'Bob';
    }
};

class AnimalTipo extends Animal{
    tipo: string
    raca: string
    
    constructor(){
        super() 
        this.tipo = 'Cachorro'
        this.raca = 'Vira-lata'
    }
     
    coisasDeCachorro(): void{
        console.log('Latir');
    }
};

//interfaces podem herdar de interfaces usando extends
interface Pessoas{
    nome: string
    cpf: number
    cadastrar():void
};

interface Cadastro extends Pessoas{
    id: number
};

let novoCadastro : Cadastro

novoCadastro ={
    id: 123,
    nome: 'Gabriel',
    cpf: 111111,
    cadastrar() {
        console.log(`${novoCadastro.nome} foi cadastrado com sucesso!`);
    },
};

