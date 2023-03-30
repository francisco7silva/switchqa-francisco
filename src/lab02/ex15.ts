export function custoTempoJardim (areaGrama: number, arbores: number, arbustos: number): number {
    let custoTrabalho: number;
    let tempo: number;
    tempo = 300 * areaGrama + 600 * arbores + 400 * arbustos;
    custoTrabalho = 10 * areaGrama + 20 * arbores + 15 * arbustos + 0.00277777 * tempo;
return custoTrabalho && tempo;
}
console.log(custoTempoJardim(100, 10, 10));