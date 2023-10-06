//JSON é APENAS dados. Não tem funções, estruturas, métodos...
//Formato textual que todas linguagens conseguem gerar e ler.

const obj = { 
    a: 1, 
    b: 2, 
    c: 3, 
    soma() { 
        return a + b + c
    }
}
console.log(JSON.stringify(obj))

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{ "a": 1, "b": "texto", "c": 0.75, "d": true, "e": {}, "f": [] }'))