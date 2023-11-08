// o 'forIn' intera em cima de índice
// o 'forOf' intera em cima de valores

//percorrendo um array
const assuntosEcma = ['Map', 'Set', 'Promise']
for (let a in assuntosEcma) {
    console.log(a)
}

for (let a of assuntosEcma) {
    console.log(a)
}




//percorrendo um map
const assuntosMap = new Map([
    ['Map', { abordado: true}],
    ['Set', { abordado: true}],
    ['Promise', {abordado: false}]
])

for (let a of assuntosMap) {
    console.log(a)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [chave, valor] of assuntosMap.entries()) {
    console.log(chave, valor)
}






//percorrendo um set
const letras = new Set(['a', 'b', 'c'])
for (let l of letras) {
    console.log(l)
}