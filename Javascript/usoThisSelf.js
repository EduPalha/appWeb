// this = self
// this referencia o objeto atual (ou contexto) daquela execução
// no java tudo acontece dentro de uma classe e pode-se criar objetos(instanciar) a partir delas 
// e quando tu usa a palavra this tu está chamando o objeto que está acessando essa classe


// no javascript o this PODE VARIAR dependendo de como é chamado
// por isso é interessante usar Arrow Function, porque é mais simples(enxuta) a sintaxe e o this não varia, mas associado ao local

const pessoa = {
    nome: 'Ana',
    idade: 35,
    email: 'anapalharini@hotmail.com',
    
    falar() {
        console.log(this.nome + ' de ' + this.idade + ' e email: ' + this.email)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

const falar2 = pessoa.falar.bind(pessoa)
falar2()




function Pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}
new Pessoa


function Pessoa2() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000)
}
new Pessoa2