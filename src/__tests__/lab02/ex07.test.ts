import { volumeCubo } from "../../lab02/ex07";

describe("Testes do exercício 07", () => {
    test("Teste 1", () => {
        //Arrange
        const area = 100;
        const volumeEsperado = 68.04138174397718;

        //Act
        let volume = volumeCubo(area);

        //Assert
        expect(volume).toBe(volumeEsperado);
        
    })
})

describe("Testes do exercício 07", () => {
    test("Teste 2", () => {
        //Arrange
        const area = 0;
        const volumeEsperado = -1;

        //Act
        let volume = volumeCubo(area);

        //Assert
        expect(volume).toBe(volumeEsperado);
        
    })
})

