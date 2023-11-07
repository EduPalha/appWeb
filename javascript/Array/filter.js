const produtos = [
    { nome:'Macbook', preco: 7799, fragil: true },
    { nome:'Iphone', preco: 4999, fragil: true },
    { nome:'Ipad', preco: 3899, fragil: true },
    { nome:'Case Macbook', preco: 599, fragil: false },
    { nome:'Cabo USBC', preco: 129, fragil: true }
]

console.log(produtos.filter(function(p) {
    return p.preco < 4000
}))

console.log(produtos.filter(m => m.preco < 1000).filter(n => n.fragil == false))





// criando o próprio filter
Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}
console.log(produtos.filter2(m => m.preco < 5000).filter2(n => n.fragil == true))

