const saudacao = 'Olá' //contexto léxico 1

function exec() {
    const saudacao = 'Tchau' //contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados e pares nome/valor
const cliente = {
    name: 'Edu',
    idade: 27,
    peso: 72
}