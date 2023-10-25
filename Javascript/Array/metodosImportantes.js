//um array constante pode ter seus valores mudados, porém não se pode adicionar mais nenhuma
const pilotos = ['Vettel', 'Alonso', 'Reikkonen', 'Massa', 'Hamilton']

//remove o último elemento
pilotos.pop()

//adiciona um elemento
pilotos.push('Verstappen')

//remove o primeiro elemento
pilotos.shift()

//adiciona um elemento na primeira posição
pilotos.unshift('Senna')

console.log(pilotos)

//remove e adiciona
//primeiro parâmetro é o índice, o segundo é a quantidade de elementos quer excluir e depois quantos quer adicionar
pilotos.splice(1, 1, 'Schummacher')
pilotos.splice(2, 1, 'Hamilton')

console.log(pilotos)

//novo array a partir de um indice/fim do anterior
const pioresPilotos = pilotos.slice(3)
console.log(pioresPilotos)

const melhoresPilotos = pilotos.slice(0, 3) 
console.log(melhoresPilotos)