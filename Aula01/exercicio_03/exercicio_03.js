// 3 - Altere o exercício anterior de forma que ele informe também se os números são iguais.
 
const num_01 = parseInt(prompt('Digite um número'));
const num_02 = parseInt(prompt('Digite um número'));

if(num_01 > num_02){
    alert(`${num_01} é mior que ${num_02}`)
}else{
    if(num_01 === num_02){
        alert('Os números são iguais')
    }
    else{
        alert(`${num_02} é maior que ${num_01}`)
    }
}