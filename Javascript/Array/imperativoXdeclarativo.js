const alunos = [
    { nome:'Edu', nota: 9.9},
    { nome:'Ana', nota: 8.9}
]

//Imperativo
//COMO? tem que ser feito é mais importante
let total1 = 0
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log('Média1:', total1/alunos.length)



//Declarativo - SQL foi feito para dar essa praticidade
//O QUE? tem que ser feito é mais importante
//Mais reuso, fazendo cada coisa no seu tempo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log('Média2:', total2/alunos.length)