const moduloServidor = require('../../../moduloServidor')
console.log(moduloServidor.bomDia)

const saudacao = require('saudacao')
console.log(saudacao.oi)

const http = require('http')
http.createServer((req, res) => {
    res.write('Boa tarde browser!')
    res.end()
}).listen(6067)