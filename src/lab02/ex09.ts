function momentoSaudação(segundos: number): string {
    
    if (segundos >= (21600)  && segundos < (43201)) {
        return "Bom dia";
    } else if (segundos >= (43201) && segundos < (72001)) {
        return "Boa tarde";
    } else {
        return "Boa noite";
    }
}

console.log(momentoSaudação(60000));
export { momentoSaudação };