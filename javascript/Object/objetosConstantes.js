// pessoa -> 123(endereço memória) -> {...}(item)
const pessoa = {nome: 'João'}
console.log(pessoa.nome)

//mudei o valor do atributo
pessoa.nome = 'Eduardo'
console.log(pessoa.nome)

// agora, se tentar mudar o endereço da memória vai dar errado
// porque pessoa é uma constante e já está associada a 123
// pessoa -> 456(endereço memória) -> {...}(item)
pessoa = {nome: 'Isadora'}


//impede de mecher no objeto, tipo a atribuição que fiz com 'Eduardo',
//deixa de ser viável. É um excelente recurso quando necessário.
//Tu não consegue mudar o valor de um atributo, criar/deletar outro atributo
Object.freeze(pessoa)
