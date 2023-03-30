import { distanciaMediaKm } from "../../lab02/ex16";
describe("Testes do exercício 16", () => {
    test("Distância média", () => {
        //Arrange
        const dia1 = 10;
        const dia2 = 8;
        const dia3 = 13;
        const dia4 = 9;
        const dia5 = 10;
        const resultadoEsperado = 16.09;
        //Act
        let resultado = distanciaMediaKm(dia1, dia2, dia3, dia4, dia5);
        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})