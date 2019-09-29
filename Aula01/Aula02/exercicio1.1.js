/*
Escreva um programa que sorteia um número de 1 a 10, dá duas chances para que o usuário acerte,
 mas informa se o número sorteado é maior ou menor que o primeiro palpite.
*/

/*
INICIO

num= numero_recebido_do_usuario
sorte= numero_randomico
se num1 == sorte
    retorna Parabéns, você acertou!
senão
num1>sorte
 Retorna que o primeiro palpite é maior que o número sorteado
 Senão
 num1<sorte
 Retorno que o primeiro palpite é menor que o número sorteado
 senão
   num2 = numero_recebido_do_usuario
   se num2 == sorte
    retorna Parabéns, você acertou!
 senão
    Não foi dessa vez!
  
FIM
*/

const num= parseInt(prompt('Digite um número de 1 a 10'));
const sorte = Math.floor(Math.random()*10+1);
console.log('sorte fora do if e else:', sorte)
if  (num==sorte){
    alert (`Parabéns, você acertou! O número é ${sorte}`)
}else if
    (num>sorte){
        alert('O seu palpite é maior que o número sorteado')
    }else if
    (num<sorte){
        alert('O seu palpite é menor que o número sorteado')
    } else {
        alert('Não foi dessa vez :´(')
    }
    