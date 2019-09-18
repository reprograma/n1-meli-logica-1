/*
Altere o exercício anterior de forma que ele informe também se os números são iguais.
*/

/*
INICIO

Receber um número
Guardar o número
Receber outro número
Guardar o outro número
Comparar os números
E Informar se eles são iguais

FIM
*/

const numero1 = parseInt(prompt(`Digite o primeiro número`))
const numero2 = parseInt(prompt (`Digite o segundo número`))
if (numero1>numero2){
    alert(`${numero1} é maior que o outro número`)
} else if (numero2>numero1){
    alert(`${numero2} é maior que o outro número`)
} else{
    alert(`${numero1} e ${numero2} são iguais`)
}
