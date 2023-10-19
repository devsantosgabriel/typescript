class Animal{
    nome: string
    tipo: string        
   
    constructor(nome, tipo){
        this.nome = nome
        this.tipo = tipo
    };

    coisasDeAnimal(nome, tipo): void{
        console.log(`Meu ${tipo} se chama ${nome} e adora brincar`)
    }
};

let meuAnimal = new Animal('Ralf', 'Cachorro');

meuAnimal.coisasDeAnimal(meuAnimal.nome, meuAnimal.tipo);