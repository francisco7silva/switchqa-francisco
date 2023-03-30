import { aprovadosTurma } from "../../lab02/ex13";
describe("Testes do exercício 13", () => {
    test("Turma aprovada", () => {
        //Arrange
        const aprovados = 0.9;
        const resultadoEsperado = "Turma excelente";
        //Act
        let resultado = aprovadosTurma(aprovados);
        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})
describe("Testes do exercício 13", () => {
    test("Turma aprovada", () => {
        //Arrange
        const aprovados = 0.7;
        const resultadoEsperado = "Turma boa";
        //Act
        let resultado = aprovadosTurma(aprovados);
        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})
describe("Testes do exercício 13", () => {
    test("Turma aprovada", () => {
        //Arrange
        const aprovados = 0.5;
        const resultadoEsperado = "Turma razoável";
        //Act
        let resultado = aprovadosTurma(aprovados);
        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})
describe("Testes do exercício 13", () => {
    test("Turma aprovada", () => {
        //Arrange
        const aprovados = 0.2;
        const resultadoEsperado = "Turma fraca";
        //Act
        let resultado = aprovadosTurma(aprovados);
        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})
describe("Testes do exercício 13", () => {
    test("Turma aprovada", () => {
        //Arrange
        const aprovados = 0;
        const resultadoEsperado = "Turma má";
        //Act
        let resultado = aprovadosTurma(aprovados);
        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})
describe("Testes do exercício 13", () => {
    test("Turma aprovada", () => {
        //Arrange
        const aprovados = 1.1;
        const resultadoEsperado = "valor inválido";
        //Act
        let resultado = aprovadosTurma(aprovados);
        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})