// Altere o exercício anterior de forma que ele informe também se os números são iguais.


const valor1 = parseInt(prompt("Digite o valor1: "))

const valor2 = parseInt(prompt("Digite o valor2: "))

if (valor1 > valor2 ) {
   alert(`${valor1} é maior que ${valor2}`)
}
 else {
    if ( valor1 == valor2) {
    alert(`${valor1} é igual ${valor2}`)
    } else {
        alert("os valores não são iguais")
    }
}