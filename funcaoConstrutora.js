function Carro(velocidadeMaxima = 200, delta = 5) {
    //attributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }
        else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())


const lamborghini = new Carro(350, 20)
lamborghini.acelerar()
lamborghini.acelerar()
lamborghini.acelerar()
lamborghini.acelerar()
console.log(lamborghini.getVelocidadeAtual())