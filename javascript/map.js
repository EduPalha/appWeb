// dentro do javascript ja existe a estrutura chave valor que é o próprio objeto
// a grande diferença é que no map a chave pode ser função, número, objeto... várias outras coisas
// mais flexível

const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework: true})

// para acessar o item o correto é usar o .get()
console.log(tecnologias.get('react').framework)




const chavesVariadas = new Map([
    [function () { }, 'Função'],  //função
    [{}, 'Objeto'],               //objeto
    [123, 'Número'],              //valor númerico
])

// chavesVariadas.forEach((valor, chave) => {
//     console.log(chave, valor)
// })

console.log(chavesVariadas.has(123))

chavesVariadas.delete(123)

// não é possível ter chaves duplicadas, então 'b' substituirá o 'a'
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'a')

console.log(chavesVariadas.size)

console.log(chavesVariadas)