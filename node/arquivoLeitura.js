const fs = require('fs') //módulo nativo do node


const caminho = __dirname + '/arquivo.json'

// síncrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


// assíncrono (tem um callback que vai ser disparada 
// de volta apenas quando o arquivo tiver sido carregado)
// nesse caso é visível que o assíncrono vai ser mostrado depois no log
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)

})

// fazendo de uma forma mais prática para acessar o .json (síncrono)
const config = require('./arquivo.json')
console.log(config.db)

// leitura de uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})