/*
Conceitos:
1-Abstração(simplificar)
2-Encapsulamento(detalhes escondidos, deixando estritamente o necessário)
3-Herença
4-Polimorfismo
*/

//Notação literal de objetos # json
const obj1 = {}

//Objeto em JS
const obj2 = new Object

//Funções construtoras
function Objeto3(nome, preco, desc) {
    this.nome = nome
}

//Função Factory
function criarObjeto4(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return (salario/30) * (30 - faltas)
        }
    }
}

//Object.create
const obj5 = Object.create(null)

//Uma função famosa que retorna JSON (converte em objeto para manipular)
const fromJSON = JSON.parse('{"info": "OLÁ MUNDO')