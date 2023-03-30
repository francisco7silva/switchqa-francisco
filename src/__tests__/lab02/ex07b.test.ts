import { volumeCubov2 } from "../../lab02/ex07b";

describe("Testes do exercício 07", () => {
    test("Teste 1", () => {
        //Arrange
        const volume = 1000;
        const volumeEsperado = "pequeno";

        //Act
        let volume2 = volumeCubov2(volume);

        //Assert
        expect(volume2).toBe(volumeEsperado);

    })
})

describe("Testes do exercício 07", () => {
    test("Teste 2", () => {
        //Arrange
        const volume = 2000;
        const volumeEsperado = "medio";

        //Act
        let volume2 = volumeCubov2(volume);

        //Assert
        expect(volume2).toBe(volumeEsperado);

    })
})

describe("Testes do exercício 07", () => {
    test("Teste 3", () => {
        //Arrange
        const volume = 2001;
        const volumeEsperado = "grande";

        //Act
        let volume2 = volumeCubov2(volume);

        //Assert
        expect(volume2).toBe(volumeEsperado);

    })
})


