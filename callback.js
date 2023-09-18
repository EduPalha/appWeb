const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(function (fabricante) {
    console.log(fabricante)
})

fabricantes.forEach(fabricante => console.log(fabricante))






const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 8.9]
let notasBaixas = []
//notasBaixas = notas.filter(function(nota) {return nota < 7})
notasBaixas = notas.filter(nota => nota < 7)
console.log(notasBaixas)





