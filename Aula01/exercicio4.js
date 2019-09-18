// Solicite que o usuário digite um número. Informe então se este número é par ou ímpar.

const num = parseInt(prompt("Digite um número: "))

if (num % 2 == 0 ) {
    alert("Esse número é par")
} else {
    alert("Esse número é ímpar")
}