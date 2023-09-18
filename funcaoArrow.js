let dobro1 = function(a) {
    return 2 * a
}

let dobro2 = (a) => { return 2 * a }

let dobro3 = a => 2 * a

// os três casos acima fazem a mesma coisa. Um arrow function é sempre uma função anônima (sem nome).



let comparaComThis = function (param) {
    console.log(this === param)
}

const obj = {}


comparaComThis(global) //contexto do node, sempre que aponta para o global é verdadeiro
comparaComThis = comparaComThis.bind(obj) //mudei o this de global para obj então vai dar falso da próxima vez já que bind(obj)
comparaComThis(global)
comparaComThis(obj) 


//função arrow não aponta para o global, ele é previsível, lógico e sempre relacionado ao seu próprio contexto
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

//mesmo usando o bind no arrow function ela não vai mudar, seu contexto sempre vai ser o modulo/arquivo em que está inserido
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)