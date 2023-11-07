import axios from 'axios'

const url = 'https://cursoappweb.000webhostapp.com/funcionarios.json'

const spain = f => f.country === 'Spain'
const female = f => f.sex === 'Female'
const majorSalary = (func, funcAtual) => {
    return func.salary < funcAtual.salary ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionaries = response.data
    console.log(funcionaries)

    const func = funcionaries
    .filter(spain)
    .filter(female)
    .reduce(majorSalary)

    console.log(func)
})