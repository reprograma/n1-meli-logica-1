// 4 - Solicite que o usuário digite um número. Informe então se este número é par ou ímpar.

const num = parseInt(prompt('Digite um número'));

if(num % 2 === 0){
    alert(`${num} é par`)
}else{
    alert(`${num} é ímpar`)
}
