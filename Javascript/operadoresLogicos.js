function custos(trabalho1, trabalho2) {
    const comprarPizza = trabalho1 || trabalho2
    const comprarCerveja = trabalho1 && trabalho2
    const viverLegal = trabalho1

    return {comprarPizza, comprarCerveja, viverLegal}
}

console.log(custos(false, true))