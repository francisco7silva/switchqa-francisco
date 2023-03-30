export function poluição (indice: number): string{
    if (indice > 0 && indice <= 0.3){
        return "indíce aceitável"
    }
    else if (indice > 0.3 && indice <= 0.4){
        return "industrias do 1º grupo devem suspender as atividades"
    }
    else if (indice > 0.4 && indice <= 0.5){
        return "industrias do 1º e 2º grupo devem suspender as atividades"
    }
    else 
        return "industrias de todos os grupos devem suspender as atividades"
}
console.log(poluição(0.4))
