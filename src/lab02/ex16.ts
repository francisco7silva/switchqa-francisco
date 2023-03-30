export function distanciaMediaKm (dia1: number, dia2: number, dia3: number, dia4: number, dia5: number): number {
    let distanciaMedia: number;
    distanciaMedia = ((dia1 + dia2 + dia3 + dia4 + dia5) / 5) * 1.609;
    return distanciaMedia;  
}
console.log(distanciaMediaKm(10, 8, 13, 9, 10));