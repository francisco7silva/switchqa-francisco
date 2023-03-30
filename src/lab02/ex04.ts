function retornoDigito1(numero: number): number {
    let digito1: number;
    if (numero < 100 || numero > 999) {
        digito1 = -1;
    }
    else {
        digito1 = Math.floor(numero / 100) % 10;
    }
    return digito1;
}
console.log(retornoDigito1(20));
export { retornoDigito1 };