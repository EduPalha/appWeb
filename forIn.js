//foreach, map, filter, reduced são melhores para percorrer um array
//for in dá o índice e não o valor em si

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i in notas) {
    console.log(i + ') ' + notas[i])
}



const pessoa = {
    nome: 'Edu',
    sobrenome: 'Pavani',
    idade: 28
}
for (let p in pessoa) {
    console.log(`${p} = ${pessoa[p]}`)
}

//para evitar a criação da variavel global, sempre instanciar dentro do for
//console.log(p)