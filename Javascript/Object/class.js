//classe simples com construtor
class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

//classe mais complexa
class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 3400)
const contaDeLuz = new Lancamento('Luz', -215)
const contaDeCondominioEAgua = new Lancamento('Condominio', -426)
const contaDeInternetETelefone = new Lancamento('Vivo', -170)
const contaDeCartaoDeCredito = new Lancamento('CC', -1000)

const contas = new CicloFinanceiro(10, 2023)
contas.addLancamentos(salario, contaDeLuz, contaDeCondominioEAgua, contaDeInternetETelefone, contaDeCartaoDeCredito)

console.log(contas.sumario())




//Herança em classe
class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Analista de Sistemas') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Palharini')
    }
}

const filho = new Filho()
console.log(filho)