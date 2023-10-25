// existe uma convenção entre desenvolvedores que quando
//se usa o '_' é apenas para uso interno
const sequencia = {
    _valor: 1,
    get valor() { 
        return this._valor++
    },
    set valor(valor) { 
        if(valor > this.valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor)
console.log(sequencia.valor)
sequencia.valor = 5
console.log(sequencia.valor)
console.log(sequencia.valor)