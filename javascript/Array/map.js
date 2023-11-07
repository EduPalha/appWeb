const numbers = [1, 2, 3, 4, 5]

//map não altera o array atual, mas sim cria um novo
let result = numbers.map(function(e) {
    return e * 2
})
console.log(result)

// usando o arrow
// let resultado2 = numbers.map(e => e * 2)
// console.log(resultado2)

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

let result2 = numbers.map(soma10).map(triplo).map(paraDinheiro)
console.log(result2)




const cart = [
    '{ "name": "Borracha", "price": 3.99 }',
    '{ "name": "Lápis", "price": 1.49 }',
    '{ "name": "Caderno", "price": 8.59 }',
]

const toObj = json => JSON.parse(json)
const onlyPrice = product => product.price

const result3 = cart.map(toObj).map(onlyPrice)
console.log(result3)






// criando o próprio map
// se assemelha muito ao toDTO que tem em JAVA nas classes úteis
const cart2 = [
    '{ "name": "Lapiseira", "price": 12.19 }',
    '{ "name": "Livro de História", "price": 279.40 }'
]
Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
                            //elemento atual, índice, array original
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}
const toObj2 = json => JSON.parse(json)
const onlyPrice2 = product => product.price

const result4 = cart2.map(toObj2).map(onlyPrice2)
console.log(result4)


