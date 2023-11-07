//npm i -g nodemon: é uma biblioteca que permite apenas salvar o arquivo que ele continua rodando

const _ = require('lodash')

setInterval(() => console.log(_.random(1,5)), 1000)