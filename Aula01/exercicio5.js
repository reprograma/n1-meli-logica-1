/*
Crie um programa que recebe um número inteiro e informa se este número é múltiplo de 10.
*/

/*
INICIO

Receber um número inteiro
se o número for múltiplo de dez
Informar que é multiplo de 10
se não
Informar que não é multiplo de dez

FIM
*/

const numero= prompt (`Digite um número`)
if (numero%10==0){
    alert(`${numero} é multiplo de 10!`)
}else{
    alert(`${numero} não é multiplo de 10`)
}
