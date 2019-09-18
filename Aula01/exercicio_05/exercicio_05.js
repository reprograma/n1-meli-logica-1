// 5 - Crie um programa que recebe um número inteiro e informa se este número é múltiplo de 10.

const num = parseInt(prompt('Digite um número'));

if(num % 10 === 0){
    alert(`${num} é múltiplo de 10`)
}else{
    alert(`${num} não é múltiplo de 10`)
}