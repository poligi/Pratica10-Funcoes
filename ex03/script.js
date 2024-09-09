/*
Crie uma função que recebe por parâmetro um valor inteiro e
positivo e retorne verdadeiro se o número for primo ou falso se não
for. 
*/

function numero(valor) {
    if (valor <= 1) {
        return false
    } 

    for (let i = 2; i < valor; i++) {
        if (valor % i === 0) {
            return false
        }
    }

    return true
}

//teste
console.log(numero (7))
console.log(numero(10))