import { desconto } from "../../lab02/ex12";
describe("Testes do exercício 12", () => {
    test("Valor do desconto", () => {
        //Arrange
        const preço = 300;
        const resultadoEsperado = 120;
        //Act
        let resultado = desconto(preço);
        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})
describe("Testes do exercício 12", () => {
    test("Valor do desconto", () => {
        //Arrange
        const preço = 150;
        const resultadoEsperado = 90;
        //Act
        let resultado = desconto(preço);
        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})
describe("Testes do exercício 12", () => {
    test("Valor do desconto", () => {
        //Arrange
        const preço = 60;
        const resultadoEsperado = 42;
        //Act
        let resultado = desconto(preço);
        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})
describe("Testes do exercício 12", () => {
    test("Valor do desconto", () => {
        //Arrange
        const preço = 20;
        const resultadoEsperado = 16;
        //Act
        let resultado = desconto(preço);
        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})