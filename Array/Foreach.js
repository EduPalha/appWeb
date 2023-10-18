const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// aprovados.forEach(
//     function(nome, indice) {
//         console.log(`${indice + 1}) ${nome}`)
//     }
// )

Array.prototype.forEach2 = 
    function(callback){
        for (let i = 0; i < this.length; i++) {
        //primeiro elemento vai ser o elemento do índice, depois o índice e o terceiro elemento o array completo
        callback(this[i], i, this)
        }
    }

aprovados.forEach2(
    function(nome, indice, array) {
        console.log(`${indice + 1}) ${nome}`)
        console.log(array)
    }
)