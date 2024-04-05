const imc = (peso, altura) => {
    if (peso === undefined || altura === undefined) {
        return 'Vazio'
    } else if (isNaN(peso) || isNaN(altura)) {
        return 'Não é número'
    } else if (peso === 0 || altura === 0) {
        return 'Erros matemáticos - 0 como divisor ou como dividendo'
    } else if (peso < 0 || altura < 0) {
        return 'Não existe peso nem altura negativos'
    } else if (peso > 200 || altura >= 3.0) {
        return 'Você tem mesmo esse peso ou essa altura?'
    } else {
        return Number((peso / altura ** 2).toFixed(2))
    }
}

const classificacao = resultado => {
    let texto = `IMC: ${resultado} - `

    if (resultado <= 18.5){
        texto += `Abaixo do peso`
    } else if(resultado > 18.5 && resultado <= 25) {
        texto += `Peso ideal`
    } else if(resultado > 25 && resultado <= 30) {
        texto += `Um pouco acima do peso`
    } else if(resultado > 30 && resultado <= 35) {
        texto += `Obesidade grau 1`
    } else if(resultado > 35 && resultado <= 40) {
        texto += `Obesidade grau 2 - severa`
    } else if(resultado > 40 ) {
        texto += `Obesidade grau 3 - mórbida`
    } else {
        texto = resultado
    }

    return texto
}

module.exports = { imc, classificacao }