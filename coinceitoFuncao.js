// toda função javascript na teoria retorna, nem que seja, um undefined
// Função em JS é First-Class Object (Citizens)
// High-order function

//criar de forma literal
function fun1() { }

//armazenar em uma variável
const fun2 = function () { }

//armazenar em um array
const array = [function (a, b) { return a + b}, fun1, fun2]

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Olá'}

//passar função como param
function run(fun3) {
    fun3()
}
run(function () {return console.log('Executando...')})

//retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)

const somaSequencial = soma(2, 3)
somaSequencial(4)