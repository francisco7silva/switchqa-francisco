export function desconto (preço: number): number {
    if (preço > 200) {
        return preço * 0.4}
        else if (preço > 100 && preço <= 200){ 
            return preço * 0.6}
        else if (preço > 50 && preço <= 100){
            return preço * 0.7}
        else 
            return preço * 0.8
        
    }
console.log(desconto(20))
