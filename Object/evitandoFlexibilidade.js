//Freeze: selado + valores constantes



//Prevent: Previnir que o objeto seja extendido, pode excluir, mas não acrescentar
const produto = Object.preventExtensions({
    nome : 'Qualquer',
    preco: 1.99,
    tag: 'Promo'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha' //pode alterar o valor da atribuição
produto.descricao = 'Borracha escolar branca' //não vai permitir novo atributo
delete produto.tag //vai deletar o atributo
console.log(produto)



//Sealed: não consegue adicionar e nem excluir novos atributos, mas pode alterar seus valores
const pessoa = {
    nome : 'Juliana',
    idade : 35 
}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)