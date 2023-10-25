Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota){
    if(nota.entre(7, 10))
        console.log('Aprovado')
    else if(nota.entre(5, 6.99))
        console.log('Recuperação')
    else if(nota.entre(0, 4.99))
        console.log('Reprovado')
    else
        console.log('Nota inválida')
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(6.99)
imprimirResultado(5.5)
imprimirResultado(4.99)
imprimirResultado(2)
imprimirResultado(0)
imprimirResultado(11)
imprimirResultado(-1)