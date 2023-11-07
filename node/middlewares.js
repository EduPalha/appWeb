// middleware pattern (chain of responsability)
const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1'
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2'
    next()
}

const passo3 = contexto => contexto.valor3 = 'mid3'

const exec = (contexto, ...middlewares) => {
    const execPasso = indice => {
        middlewares //tem middlewares
        && indice < middlewares.length //se é do tamanho menor que o passado
        && middlewares[indice](contexto, () => execPasso(indice + 1)) //recursividade chamando um depois do outro
    }
    execPasso(0)
}

const contexto = {}
exec(contexto, passo1, passo2, passo3)

console.log(contexto)