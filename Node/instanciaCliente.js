// node faz cache dos módulos importados usando o require o import from
// e ai pode se usar uma factory(instanciaNova) caso queira driblar(instanciaUnica) 
// para gerar um novo objeto

const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log('Instância ÚNICA a partir de seu contador: ' + contadorA.valor)
console.log('Instância ÚNICA a partir de outro contador: ' + contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log('Instância NOVA a partir do seu contador: ' + contadorC.valor)
console.log('Instância NOVA a partir de outro contador: ' + contadorD.valor)