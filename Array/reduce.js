//resultado do reduce sempre é passado para a próxima iteração
const pessoas = [
    { nome:'Edu', altura: 1.74, idade: 28 },
    { nome:'Jorge', altura: 1.76, idade: 57 },
    { nome:'Cleunir', altura: 1.61, idade: 58 },
    { nome:'Ana', altura: 1.71, idade: 35 },
    { nome:'Isa', altura: 1.62, idade: 25 }
]

const resultado = pessoas.map(a => a.altura).reduce(function(acumulador, atual) {
    //console.log(acumulador, atual)
    return acumulador + atual
}, 0)
console.log(resultado)








//criando próprio reduce SEM valor inicial
Array.prototype.reduce2 = function(callback) {
    let acumulador = this[0]
    for (let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

console.log(pessoas.map(a => a.altura).reduce2((total, valor) => total + valor))


//criando próprio reduce COM valor inicial
Array.prototype.reduce3 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

console.log(pessoas.map(a => a.altura).reduce3((total, valor) => total + valor, 0.01))