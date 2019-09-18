// Escrever um algoritmo que leia dois valores inteiro distintos e informe qual deles é o maior.

/**
INICIO
   receber valor1
   receber valor2
   se valor1 for maior que valor2
        "esse é o maior valor"
   se não 
      valor2" é maior"
FIM
 **/

 const valor1 = parseInt(prompt("Digite o valor1: "))

 const valor2 = parseInt(prompt("Digite o valor2: "))

 if (valor1 > valor2 ) {
    alert(`${valor1} é maior que ${valor2}`)

 } else {
     alert(`${valor2} é maior que ${valor1}`)
 }