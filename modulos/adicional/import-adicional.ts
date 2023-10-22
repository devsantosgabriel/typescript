import Livro, {Livraria} from "./export-adicional";

let livro_1 : Livro;

livro_1 = {
    nome: 'HP',
    editora: 'Abril'
};

console.log(livro_1);

let livros = new Livraria([livro_1], 23);

console.log(livros);

/*caso ache melhor, você pode importar todas as exportações da seguinte maneira 
"import * as objetos from "./export-adicional""*/

/*O "as nome" é um alias que pode ser dado a todas as exportações, para acessar cada uma de forma 
 especifica faça: alias.o-que-foi-exportado*/