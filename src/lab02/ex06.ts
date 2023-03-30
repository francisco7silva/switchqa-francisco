export function respetivaFuncao(x: number): number {
    let xx: number = -1;
    if (x < 0) {
        xx = x;
        return xx;
    }
    if (x == 0) {
        xx = 0;
        return xx;
    }
    if (x > 0) {
        xx = (x ** 2) - (2 * x);
        return xx;
    }
    return xx;
    /*if (x > 0) {
        xx = (x ** 2) - (2 * x);
        return xx;
    } else {
        return x;
    } */
}
console.log(respetivaFuncao(5));

