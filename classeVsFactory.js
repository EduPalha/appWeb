//Padrão Java de criação de construtor
class Pessoa{
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()





//Padrão javascript
function PessoaConstructor(nome) {
    //this.nome = nome
    this.falar() = function() {
        console.log(`Meu nome é ${nome}`)
    }
}

const p2 = new Pessoa('Gabriel')
p2.falar()






//acesso ao escopo mais abrangente, não precisa usar o referenciador this. Ele é mais determinístico
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p3 = new Pessoa('Maria')
p3.falar()