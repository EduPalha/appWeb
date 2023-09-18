function soma(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma())
console.log(soma(0, 0, 0))
console.log(soma(2))
console.log(soma(5, 6, 7))

console.log('\n')

function soma2(a, b, c) {
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2())
console.log(soma2(0, 0, 0))
console.log(soma2(2))
console.log(soma2(5, 6, 7))


// a partir da versão de 2015 simplificou o processo
console.log('\n')

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3())
console.log(soma3(0, 0, 0))
console.log(soma3(2))
console.log(soma3(5, 6, 7))