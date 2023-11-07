//um arquivo é um módulo
//para tornar disponível a outro arquivo deve-se usar export/import
//padrão common.js

//versões antigas e não mais utilizadas
// this.a = 1
// exports.b = 2

module.exports = {
    bomDia: 'Bom dia!',
    boaNoite() {
        return 'Boa noite!'
    }
}

//module.exports = 'Ola'