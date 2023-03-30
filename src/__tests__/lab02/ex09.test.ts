import { momentoSaudação } from "../../lab02/ex09";
describe("Teste da função momentoSaudação", () => {
    test("Teste 1", () => {
        //Arrange
        const segundos = 30000;
        const momentoEsperado = "Bom dia";


        //Act
        let momento = momentoSaudação(segundos);


        //Assert
        expect(momento).toBe(momentoEsperado);


    })
})

describe("Teste da função momentoSaudação", () => {
    test("Teste 2", () => {
        //Arrange
        const segundos = 60000;
        const momentoEsperado = "Boa tarde";


        //Act
        let momento = momentoSaudação(segundos);


        //Assert
        expect(momento).toBe(momentoEsperado);


    })
})

describe("Teste da função momentoSaudação", () => {
    test("Teste 3", () => {
        //Arrange
        const segundos = 80000;
        const momentoEsperado = "Boa noite";


        //Act
        let momento = momentoSaudação(segundos);


        //Assert
        expect(momento).toBe(momentoEsperado);


    })
})
describe("Teste da função momentoSaudação", () => {
    test("Teste 4", () => {
        //Arrange
        const segundos = 21600;
        const momentoEsperado = "Bom dia";


        //Act
        let momento = momentoSaudação(segundos);


        //Assert
        expect(momento).toBe(momentoEsperado);


    })
})
describe("Teste da função momentoSaudação", () => {
    test("Teste 5", () => {
        //Arrange
        const segundos = 6;
        const momentoEsperado = "Boa noite";


        //Act
        let momento = momentoSaudação(segundos);


        //Assert
        expect(momento).toBe(momentoEsperado);


    })
})
describe("Teste da função momentoSaudação", () => {
    test("Teste 6", () => {
        //Arrange
        const segundos = 43201;
        const momentoEsperado = "Boa tarde";


        //Act
        let momento = momentoSaudação(segundos);


        //Assert
        expect(momento).toBe(momentoEsperado);


    })
})
describe("Teste da função momentoSaudação", () => {
    test("Teste 7", () => {
        //Arrange
        const segundos = 43199;
        const momentoEsperado = "Bom dia";


        //Act
        let momento = momentoSaudação(segundos);


        //Assert
        expect(momento).toBe(momentoEsperado);
    })
})
describe("Teste da função momentoSaudação", () => {
    test("Teste 8", () => {
        //Arrange
        const segundos = 43200;
        const momentoEsperado = "Bom dia";

        //Act
        let momento = momentoSaudação(segundos);

        //Assert

        expect(momento).toBe(momentoEsperado);
    })
})

describe("Teste da função momentoSaudação", () => {
    test("Teste 9", () => {
        //Arrange
        const segundos = 72001;
        const momentoEsperado = "Boa noite";

        //Act
        let momento = momentoSaudação(segundos);

        //Assert

        expect(momento).toBe(momentoEsperado);
    })
})
