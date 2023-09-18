const p = {}
p.nome = 'Isa'
p.idade = 25
p.email = 'isadora.rios2@gmail.com'
console.log(p.nome)

function Obj(nome) {
    this.nome = nome //o uso do this. torna os atributos públicos
    this.exec = function () {
        console.log('Exec...')
    }
}

const p2 = new Obj('Isadora')
const p3 = new Obj('Isinha')

console.log(p2)
console.log(p3.nome)

p3.exec()