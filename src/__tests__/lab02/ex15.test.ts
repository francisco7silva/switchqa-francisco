import { custoTempoJardim } from "../../lab02/ex15";
describe("Testes do exercício 15", () => {
    test("Custo e tempo", () => {
        //Arrange
        const areaGrama = 100;
        const arbores = 10;
        const arbustos = 10;
        const resultadoEsperado = 40000;
        //Act
        let resultado = custoTempoJardim(areaGrama, arbores, arbustos);
        //Assert
        expect(resultado).toBe(resultadoEsperado);
    })
})