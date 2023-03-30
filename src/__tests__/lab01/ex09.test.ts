import { distanciaZe } from "../../lab01/ex09";

describe ("distanciaZe", () => {
    test ("distancia que Ze percorreu deve ser 11.325565152", () => {

//Arrange
        const tempo = 1.0833
        const velocidade = 10.4544
        const expected = 11.325251519999998
        
//Act
        let result = distanciaZe(tempo, velocidade)

//Assert
        expect(result).toBe(expected)
    })
})
