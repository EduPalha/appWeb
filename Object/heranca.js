// Heranca e composição, priorize composição. 
// Dá pra usar no lugar da Herança um Decorator.
// Baseada em protótipos que só existem apenas em funções

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 230,
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

// '__proto__' acessando o objeto pai, verificando se, mesmo que ele não apareça, exista
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

//acima do pai, não existe outro prototype
console.log(Object.prototype.__proto__)


function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)


// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'Z'
const avo = {attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(avo.attr0)
console.log(pai.attr1, pai.attr2)
console.log(filho.attr1, filho.attr2, filho.attr3, filho.attr0)


//Posso setar um objeto a ser protipo de outro
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }
        else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}


Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

ferrari.acelerarMais(350)
console.log(ferrari.status())

volvo.acelerarMais(20)
volvo.acelerarMais(20)
console.log(volvo.status())








const mae = { nome: 'Edifrances', corCabelo: 'Preto'}
const filha1 = Object.create(mae)
filha1.nome = 'Isadora'
console.log(filha1, filha1.corCabelo)

const filha2 = Object.create(mae, {
    nome: { value: 'Glecieli', writable: false, enumerable: true}
})
console.log(filha2, filha2.corCabelo)






String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
console.log('Eduardo Palharini'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3].first())
console.log(['a', 'b', 'c'].first())