// usa-se 'promise' quando se quer ter algum tipo de processamento assíncrono (muito usada em requisições)
// principais caminhos: ser resolvida ou rejeitada

function falarDepoisDe(frase, segundos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { reject(frase)}, segundos * 1000)
    })
}

// falarDepoisDe(' RESOLVE - ', 2)
//     .then(frase => frase.concat(' meu parceiro!'))
//     .then(outraFrase => console.log(outraFrase))
//     .catch(e => console.log(e))

falarDepoisDe(' REJECT - ', 2)
    .then(frase => frase.concat(' meu parceiro!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))