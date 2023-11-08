// Destructuring (tirar de uma estrutura algo(objeto, array, string))

const [x, , y] = [1, 2, 3]
console.log(x, y)

const pessoa = {
    nome: 'Isa',
    idade: 25,
    endereco : {
        cidade: 'Brasília',
        estado: 'DF'
    }
}

const {nome: n, idade: i} = pessoa
console.log('nome: ' + n)
console.log('idade: ' + i)


const {endereco: {cidade, estado, cep}} = pessoa
console.log('cidade: ' + cidade)
console.log('estado: ' + estado)
console.log('cep: ' + cep)





const [a] = [10]
console.log(10)

const [n1, , n3, , n5, n6 = 0] = [10, 2, 9, 8]
console.log(n1, n3, n5, n6)






function rand ({min = 0, max = 1000}) { //valores padrão caso não passe
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand({}))

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 980}))






function rand2 ([min = 0, max = 1000]) { //usando destructuring para reposicionar eles dentro da funçãp
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand2([80, 20]))
console.log(rand([990]))
console.log(rand([, 150]))
console.log(rand([]))