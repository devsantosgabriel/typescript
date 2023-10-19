class Cadastro{
    status: string

    get situacao(): string{
        return this.status 
    } //usado para obter o valor da propriedade

    set situacao(status){
        this.status = status
    }//usado para definir o valor da propriedade
};

let novoCadastro = new Cadastro();

novoCadastro.status = 'Ativo'

console.log(novoCadastro.situacao);
