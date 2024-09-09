/*
Crie uma função que recebe 3 notas de um aluno por parâmetro e
uma letra. Se a letra for A a função deve calcular a média aritmética,
se for P, a média ponderada (peso: 5, 3 e 2). 
*/

function calcularMedia (nota1, nota2, nota3, letra) {
    let media 

    if (letra === 'A') {
        media = (nota1 + nota2 + nota3) / 3
    } else if (letra === 'P'){
        media = (nota1 * 5 + nota2 * 3 + nota3 * 2) / 10
    } else {
        return "Letra inválida. Use A ou P."
    }
    return media
}
