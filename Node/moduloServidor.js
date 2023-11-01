//um arquivo é um módulo
//para tornar disponível a outro arquivo deve-se usar export/import
//padrão common.js

module.exports = {
    bomDia: 'Bom dia!',
    boaNoite() {
        return 'Boa noite!'
    }

}