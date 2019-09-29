
/*
Solicite que o usuário digite um número. Informe então se este número é par ou ímpar
*/

/*
INICIO

Receber um número
Guardar o número
Veriifar se o número é impar
Se sim, informar que é impar
Se não, informar que é par

FIM
*/

const numero1 = parseInt(prompt(`Digite um número`))
if (numero1%2==0){
    alert (`${numero1} é par`)
}else{
    alert(`${numero1} é impar`)
}
