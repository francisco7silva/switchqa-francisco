import { poluição } from "../../lab02/ex14";
describe("Testes do exercício 14", () => {
    test("Poluição aceitável", () => {
        //Arrange
        const indice = 0.1;
        const resultadoEsperado = "indíce aceitável";
        //Act
        let resultado = poluição(indice);
        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})
describe("Testes do exercício 14", () => {
    test("Poluição aceitável", () => {
        //Arrange
        const indice = 0.34;
        const resultadoEsperado = "industrias do 1º grupo devem suspender as atividades";
        //Act
        let resultado = poluição(indice);
        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})
describe("Testes do exercício 14", () => {
    test("Poluição aceitável", () => {
        //Arrange
        const indice = 0.45;
        const resultadoEsperado = "industrias do 1º e 2º grupo devem suspender as atividades";
        //Act
        let resultado = poluição(indice);
        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})
describe("Testes do exercício 14", () => {
    test("Poluição aceitável", () => {
        //Arrange
        const indice = 0.6;
        const resultadoEsperado = "industrias de todos os grupos devem suspender as atividades";
        //Act
        let resultado = poluição(indice);
        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})
