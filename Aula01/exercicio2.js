/*
Escrever um algoritmo que leia dois valores inteiro distintos e informe qual deles é o maior.
*/

/*
INICIO

Receber um número
Guardar o número
Receber outro número
Guardar o outro número
Comparar os números
E Informar qual deles é maior
FIM
*/

const numero1 = parseInt(prompt(`Digite o primeiro número`))
const numero2 = parseInt(prompt (`Digite o segundo número`))
if (numero1>numero2){
    alert(`${numero1} é maior que o outro número`)
} else{
    alert(`${numero2} é maoir que outro número`)
}