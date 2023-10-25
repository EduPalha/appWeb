//Um objeto especial. Mas não existe nativamente em JS.
//Organiza a partir de um índice.
//Estrutura que pode ser heterogênea diferente de outras linguagens

let nomes = new Array('Edu', 'Isa', 'Ana')
let nomes2 = ['Edu', 'Isa', 'Ana']

console.log(nomes)
console.log(nomes2)
 
nomes[3] = 'Amy' // mais indicado para quando quer alterar um já existente
console.log(nomes)

nomes.push('Oli') //push é o mais correto para adicionar um elemento em um array
console.log(nomes)

nomes.sort()
console.log(nomes)

delete nomes[1]
console.log(nomes)