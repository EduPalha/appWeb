// diferente do 'rest' que junta, o 'spred' espalha
// 'rest' deve ser usado como parâmetro de função
// enquando o 'spread' deve ser usado com objeto

const funcionario = { nome: 'Maria', salario: 12400.25 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usando o 'spread' com array
const grupoA = ['João', 'Eduardo', 'Gabriel']
const grupoFinal = ['Isadora', ...grupoA, 'Ana']
console.log(grupoFinal)