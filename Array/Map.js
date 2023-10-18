const numbers = [1, 2, 3, 4, 5]

//map não altera o array atual, mas sim cria um novo
let resultado = numbers.map(function(e) {
    return e * 2
})
console.log(resultado)

// usando o arrow
// let resultado2 = numbers.map(e => e * 2)
// console.log(resultado2)

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

let resultado2 = numbers.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado2)