const pids = require('port-pid');

const porta = 3007
const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 2479.90}) //vai converter automaticamente para json
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}...`)
})

//para mostar pid
pids(porta).then(pids => {console.log(pids.all)})