console.log(typeof Object)
console.log(typeof new Object) //se assemelha a um construtor do Java

const Cliente = function () {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto)

//Ou seja, quando tu instancia uma função(a função por sua vez é a classe do Java) tu cria, então, um objeto