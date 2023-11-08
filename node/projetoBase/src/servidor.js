const pids = require('port-pid');

const porta = 3007
const bodyParser = require('body-parser')
const bancoDeDados = require('./crudBasicoBD')
const express = require('express')
const app = express()

// para qualquer requisão que faça usando express vai passar por esse middleware
// e tiver sendo utilizado o padrão urlencodede(postman-body)
// ele vai passar por esse app.use e transformar em um objeto utilizável
app.use(bodyParser.urlencoded( { extended: true })) 

// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware1...')
//     next()
// })

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) 
}) 

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) 
}) 

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.deleteProduto(req.params.id)
    res.send(produto) 
}) 




app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}...`)
})
//para mostar pid
pids(porta).then(pids => {console.log(pids.all)})