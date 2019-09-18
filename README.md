# n1-meli-logica-1
N1 | BackEnd | 2019 | Semana 2 | Lógica 1 | Variáveis | Condicionais | Loops

##  [Slide da aula](https://docs.google.com/presentation/d/1uFxblStj9zhe_CNppsVr9RsBB4nf_8_5VG6Gd8qJ6CI/edit?usp=sharing)
****

## Operadores Matemáticos

 ```
  + = mais
 - = menos
 * = multiplicação
 / = divisão
 % = resto
 ** =potencia  
 ``` 

 ## Operadores Relacionais

 ```
 =    atribui valor
 ==  igual 
 ===  igual e de tipos iguais
 > maior
 < menor
 >= maior igual
 <= menor igual
 != diferente
 ``` 

 ## Operadores Lógicos

 ```
 && significa E
 ||  significa OU
 ! significa NÃO
 ```

 ## Variáveis

|Number     |   string          |   boolean                |
|------------|------------ |---------------------|
|  1, 2, ..      | 'texto'        |  True ou False       |

 ```js
let 
const
var
 ```
***
 # Condicionais

## If e Else
```js
if(condição){
    //sequência de instruções
} else {
    //sequência de instruções
}
```

## Swith 

```js
switch (key) {
    case value:
        
        break;

    default:
        break;
}
```

# Laço de repetição`


## While
```js

while(condição){
    //sequência de ações
}

```

## Do While

```js

do {
    //sequência de instruções
}while(condição)

```

## For
```js
for(inicialização; condição; incremento){
    //sequência de instruções    
}

ex.: 

for(let i = 0; i>10; i++ ){
    //sequência de instruções    
}
```
****
# Métodos JS

## Prompt

O método prompt () exibe uma caixa de diálogo que solicita entrada de um dado ao
usuário.


```js

prompt('texto')

```

## Alert

O método alert() exibe uma caixa de alerta.



```js

alert('texto')

```

## ParseInt

A função parseInt converte seu primeiro argumento para uma string, analisa, e
retorna um inteiro ou NaN.

```js

parseInt('2')

```

## Random

Random = um número aleatório.

random() : é uma método JS que forma números aleatórios.

```js
//CASO VOCÊ NÃO QUEIRA O NÚMERO ZERO
let x = Math.floor(Math.random()* quantidade_de_numeros_desejado + 1 )

//CASO VOCÊ QUEIRA O NÚMERO ZERO
let x = Math.floor(Math.random()* quantidade_de_numeros_desejado)
```

## indexOf

Método que retorna aposição da letra na string.

```js

let nome = 'mayara';

nome.indexOf('y') //Meretorna a posição do Y na string

```