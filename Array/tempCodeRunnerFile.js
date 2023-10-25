const resultado = pessoas.map(a => a.altura).reduce(function(acumulador, atual) {
    //console.log(acumulador, atual)
    return acumulador + atual
}, 0)
console.log(resultado)