const escola = [
    {
    nome: '8ANO',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    },
    {
        nome: 'Jéssica',
        nota: 6.2
    },
    {
        nome: 'Maria',
        nota: 9.7
    }]
}, {
    nome: '9ANO',
    alunos: [{
        nome: 'Eduardo',
        nota: 7.5
    },
    {
        nome: 'Débora',
        nota: 4.2
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turmas => turmas.alunos.map(getNotaAluno)

console.log(escola.map(getNotasTurma))

//usando a concatenação de um array vazio tu acaba removendo os parênteses e junta todas as notas
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

console.log(escola.flatMap(getNotasTurma))