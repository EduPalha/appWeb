// estrutura de conjunto
// não indexada e que não aceita repetição
// um array e objeto, por exemplo, são indexados

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Grêmio')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.values())
console.log(times.has('Grêmio'))
console.log(times.delete('Flamengo'))
console.log(times.size)


//outra forma é inicializando com array
const nomes = ['Ana', 'Eduardo', 'Isadora', 'Lucas', 'Eduardo']
const nomesSet = new Set(nomes)
console.log(nomesSet)