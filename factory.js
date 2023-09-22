const produto1 = {
    nome: 'Lapis',
    preco: 2.45,
    setor: 'Escritório'
}

//Factory é uma função que sempre retorna um novo objeto, para você não precisar instanciar várias mesmos um item
function criarProduto() {
    return {
        nome: 'Lapis',
        preco: 2.45,
        setor: 'Escritório'
    }
}
console.log(criarProduto())


//Criação de forma dinâmica
function criarProdutoNovo(nome, preco, setor) {
    return {
        nome,
        preco,
        setor
    }
}
console.log(criarProdutoNovo('Lapis', 2.45, 'Escritório'))