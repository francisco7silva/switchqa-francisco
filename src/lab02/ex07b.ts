
function volumeCubov2(volume: number): string {
  
    let volume2: number;
    volume2 = volume / 1000;
    if (volume2 <= 1)
        return "pequeno";
    else
        if (volume2 > 1 && volume2 <= 2)
            return "medio";
        else
            return "grande";
}
console.log(volumeCubov2(2001));
export { volumeCubov2 }