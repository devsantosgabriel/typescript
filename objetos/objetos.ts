class Escola{
    nome: string
    endereco: string
    
    constructor(nome: string, endereco: string){
        this.nome = nome;
        this.endereco = endereco;
    }

    situacao(): void{
        console.log(`Aberta`)
    };
};

class Alunos<Type> extends Escola implements Turma{
    nomeAluno: Type
    matricula: Type
    status: Type
    curso: Type
    numero: number
    andar: number

    estado(): void{
        console.log('Completa')
    }

    constructor(nome: string, endereco: string, nomeAluno: Type, matricula: Type, status: Type, curso: Type, numero: number, andar: number){
        super(nome, endereco)
        this.nome = nome;
        this.endereco = endereco;
        this.nomeAluno = nomeAluno;
        this.matricula = matricula;
        this.status = status;
        this.curso = curso;
        this.numero = numero;
        this.andar = andar
        
    }
};

class Professores extends Escola implements Turma{
    nomeProfessor : string
    materia: string
    turno: string
    numero: number
    andar: number

    estado(): void{
        console.log('Completa')
    }

    constructor(nome: string, endereco: string, nomeProfessor: string, materia: string, turno: string,numero: number, andar: number){
        super(nome, endereco)
        this.nome = nome;
        this.endereco = endereco;
        this.nomeProfessor = nomeProfessor;
        this.materia = materia;
        this.turno = turno;
        this.numero = numero;
        this.andar = andar
    }
};

interface Turma extends Sala{
    numero: number
    estado(): void
};

interface Sala{
    andar: number
};


//objeto 1 e 2 da classe Escola

let escola_1 = new Escola('Senac', 'Botafogo');
let escola_2 = new Escola('CAP', 'Lapa');

//objeto 1 e 2 da classe Alunos

let aluno_1 = new Alunos(escola_1.nome, escola_1.endereco,'Gabriel', '123', 'Ativo','TI', 202,2);
let aluno_2 = new Alunos(escola_2.nome, escola_2.endereco,'Gustavo', '124', 'Ativo','TI', 202,2);


//objeto 1 e 2 da classe Professores

let professor_1 = new Professores(escola_1.nome, escola_1.endereco,'Rodrigo','Redes','Tarde',202, 2);
let professor_2 = new Professores(escola_2.nome, escola_2.endereco,'Márcio','Linux','Tarde',202, 2);

//resultado Escolas
console.log(escola_1);
console.log(escola_2);

//resultado Alunos
console.log(aluno_1);
console.log(aluno_2);

//resultado Professores
console.log(professor_1);
console.log(professor_2);