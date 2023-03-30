import { respetivaFuncao } from "../../lab02/ex06";
describe("Testes do exercício 06", () => {
    test("Teste 1", () => {
        //Arrange
        let x: number = -3;
        let expected: number = -3;

        //Act
        let result: number = respetivaFuncao(x);

        //Assert
        expect(result).toBe(expected);
    })
})

describe("Testes do exercício 06", () => {
    test("Teste 1", () => {
        //Arrange
        let x: number  = 0;
        let expected: number  = 0;

        //Act
        let result: number  = respetivaFuncao(x);

        //Assert
        expect(result).toBe(expected);
    })
})

describe("Testes do exercício 06", () => {
    test("Teste 1", () => {
        //Arrange
        let x: number  = 5;
        let expected : number = 15;

        //Act
        let result: number  = respetivaFuncao(x);

        //Assert
        expect(result).toBe(expected);
    })
})