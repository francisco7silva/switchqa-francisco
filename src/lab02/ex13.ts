export function aprovadosTurma (aprovados: number): string {
    if (aprovados < 0 || aprovados > 1) {
        return "valor inválido";
    }
    else if (aprovados <0.2) {
        return "Turma má";
    }
    else if (aprovados <0.5) {
        return "Turma fraca";
    }
    else if (aprovados <0.7) {
        return "Turma razoável";
    }
    else if (aprovados <0.9) {
        return "Turma boa";
    }
    else {
        return "Turma excelente";
    }    
}