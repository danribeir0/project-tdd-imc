const { imc, classificacao } = require('./imc')

// Template Strings
// Para inserir o texto abaixo use crase ` ` nos limites da string

describe('Cenários esperados: ', () => {
    test(`Ao chamar o 'imc' ele deve retornar uma função - 'Function'`, () => {
        expect(imc).toBeInstanceOf(Function)
    })

    test(`imc(50, 1) = 50`, () => {
        expect(imc(50, 1)).toBe(50)
    })

    test(`imc(75, 1.78) = 23.67`, () => {
        expect(imc(75, 1.78)).toBe(23.67)
    })
})

// // Testando novos cenários
describe(`Outros cenários possíveis - 'Tratando erros'`, () => {
    test(`imc() = Vazio`, () => {
        expect(imc()).toBe('Vazio')
    })

    test(`imc('batata', 'jacaré') = Não é número`, () => {
        expect(imc('batata', 'jacaré')).toBe('Não é número')
    })

    test(`imc(0, 0) = Erros matemáticos - 0 como divisor ou como dividendo`, () => {
        expect(imc(0, 0)).toBe('Erros matemáticos - 0 como divisor ou como dividendo')
    })

    test(`imc(-75, -1.78) = Não existe peso nem altura negativos`, () => {
        expect(imc(-75, -1.78)).toBe('Não existe peso nem altura negativos')
    })

    test(`imc(201, 3.0) = Você tem mesmo esse peso ou essa altura?`, () => {
        expect(imc(201, 3.0)).toBe('Você tem mesmo esse peso ou essa altura?')
    })
})

describe(`Classificação do IMC: `, () => {
    test(`IMC: ${imc(55, 1.78)} - Abaixo do peso`, () => {
        expect(classificacao(imc(55, 1.78))).toBe(`IMC: ${imc(55, 1.78)} - Abaixo do peso`)
    })
    
    test(`IMC: ${imc(75, 1.78)} - Peso ideal`, () => {
        expect(classificacao(imc(75, 1.78))).toBe(`IMC: ${imc(75, 1.78)} - Peso ideal`)
    })

    test(`IMC: ${imc(85, 1.78)} - Um pouco acima do peso`, () => {
        expect(classificacao(imc(85, 1.78))).toBe(`IMC: ${imc(85, 1.78)} - Um pouco acima do peso`)
    })

    test(`IMC: ${imc(105, 1.78)} - Obesidade gra 1`, () => {
        expect(classificacao(imc(105, 1.78))).toBe(`IMC: ${imc(105, 1.78)} - Obesidade grau 1`)
    })

    test(`IMC: ${imc(115, 1.78)} - Obesidade grau 2 - severa`, () => {
        expect(classificacao(imc(115, 1.78))).toBe(`IMC: ${imc(115, 1.78)} - Obesidade grau 2 - severa`)
    })

    test(`IMC: ${imc(130, 1.78)} - Obesidade grau 3 - mórbida`, () => {
        expect(classificacao(imc(130, 1.78))).toBe(`IMC: ${imc(130, 1.78)} - Obesidade grau 3 - mórbida`)
    })

    test(imc(), () => {
        expect(classificacao(imc())).toBe(imc())
    })
})