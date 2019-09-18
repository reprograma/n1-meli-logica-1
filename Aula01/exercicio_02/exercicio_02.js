//2 - Escrever um algoritmo que leia dois valores inteiro distintos e informe qual deles é o maior.

const num_01 = parseInt(prompt('Digite um número'));
const num_02 = parseInt(prompt('Digite um número'));

if(num_01 > num_02){
    alert(`${num_01} é mior que ${num_02}`)
}else{
    alert(`${num_02} é maior que ${num_01}`)
}

