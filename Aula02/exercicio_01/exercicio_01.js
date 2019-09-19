/* 1 - Escreva um programa que sorteia um número de 1 a 10 e dá duas chances
para que o usuário acerte.*/

//aqui eu pego o numero do user
const num = parseInt(prompt('Digite um numero de 1 a 10'));

//aqui eu gero numero randomico
const sorte = Math.floor(Math.random()*10+1);
console.log('sorte fora do if e else: ', sorte)

//verifico pela primeravez que ela caertou 
if(num == sorte){
    alert(`Parabéns você acertou! O número é ${num}`)
}
//verifico pela segunda vez
else{
    //dou mais uma chance ao usuario
    const num2 = parseInt(prompt('Digite um numero de 1 a 10'));
    console.log('sorte dentro else: ', sorte)

    //verifico se ele acertou dessa vez
    if(num2 == sorte){
        alert(`Parabéns você acertou! O número é ${sorte}`)
    }
    // o usuario errou nas duas tentivas
    else{
        alert('não foi dessa vez :(')
    }

}
