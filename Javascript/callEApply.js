function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4589,
    desconto: 0.1, //percentual
    getPreco
}
console.log(produto.getPreco())


const carro = {
    nome: 'lamborghini',
    preco: 3500000,
    desconto: 0.05
}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))





console.log(getPreco.call(carro, 0.02, '$')) // na call você passa o contexto e na sequência os parâmetros que são chamados
console.log(getPreco.apply(carro, [0.02, '$'])) // a diferença é que os parâmetros são passados em um array