export function volumeCubo(area: number): number {
    let aresta: number;
    let volume: number = -1;
    if (area > 0){
        aresta = Math.sqrt(area / 6);
        volume = aresta ** 3;
}
    return volume;
}
console.log(volumeCubo(300));

