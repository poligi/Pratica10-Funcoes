/*Crie uma função que recebe um valor inteiro e retorne verdadeiro se
for ímpar ou falso se for par.
*/

function numero(valor) {
    if (valor % 2 === 0) {
        return console.log(`O número ${valor} é par.`)
    } else {
        return console.log(`O número ${valor} é ímpar.`)
    }
}

//teste
numero(22)
numero(25)