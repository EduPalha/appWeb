//const e let diferem de var e function porque não são global, são armazenadas de forma diferente na memória
//dentro do node o global equivale ao window do browser
//this igual ao module.exports do node que será exportado para um módulo
//dentro de node cada ARQUIVO é um MÓDULO

const p0 = {
    nome: 'Ana',
    idade: 35,
    email: 'anapalharini@hotmail.com'
}
console.log(p0)

const p1 = {}
p1.nome = 'Edu'
p1.idade = 27
p1.email = 'edupalharini@hotmail.com'
console.log(p1)

const p2 = {}
p2['nome'] = 'Isa'
p2['idade'] = 25
p2['email'] = 'isadora.rios2@gmail.com'
console.log(p2)





console.log('\n')






var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)
var numero = 1
{
    numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)


// let preserva o escopo 
let number = 1
{
    let number = 2
    console.log('\ndentro = ', number)
}
console.log('fora = ', number)
let number1 = 1
{
    number1 = 2
    console.log('dentro = ', number1)
}
console.log('fora = ', number1)



console.log('\n')





function imprimirSoma0(a, b) {
    console.log(a + b)
}
imprimirSoma0(2, 3)

const imprimirSoma1 = function (a, b) {
    console.log(a + b)
}
imprimirSoma1(3, 3)

const imprimirSoma2 = (a, b) => {
    console.log(a + b)
}
imprimirSoma2(4, 3)

const soma = (a, b) => a + b
console.log(soma(5, 3))