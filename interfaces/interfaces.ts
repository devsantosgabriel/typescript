interface Adocao{
    pessoa: string,
    dia: string,
    adotar(): void
};

let adocaoConsciente : Adocao

adocaoConsciente = {
    pessoa : 'Gabriel',
    dia: '19 de outubro de 2023',
    adotar() {
        console.log(`Me chamo ${adocaoConsciente.pessoa} e adotei dia ${adocaoConsciente.dia}`)
    }
};

adocaoConsciente.adotar()