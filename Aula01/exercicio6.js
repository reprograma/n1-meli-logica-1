/*
Faça um script que pede duas notas de um aluno.
Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Reprovado", se a média for menor do que sete;
A mensagem "Aprovado com Distinção", se a média for igual a dez.
*/

/*
INICIO

Receber a primeira nota do aluno e guardar
Receber a segunda nota do aluno e guardar
Calcular a média do aluno: (numero1+numero2)/2=média
Se a média for maior ou igual a sete, o aluno foi afrovado
Se a média for menor que sete, o aluno foi reprovado
Se a média for igual a 10, o aluno foi aprovado com Distinção

FIM
*/

const nota1= parseInt(prompt('Digite a primeira nota'))
const nota2= parseInt(prompt ('Digite a segunda nota'))
const media = (nota1+nota2)/2
if(media==10){
    alert("Aluno aprovado com distinção")
}else if (media>=7){
    alert("Aluno aprovado")
}else { 
    alert("Aluno reprovado")
}


    


    

        