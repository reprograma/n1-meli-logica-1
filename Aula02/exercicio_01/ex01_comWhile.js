let sorte = Math.floor(Math.random()*10+1)
let cont = 0
let resp = '';

console.log('sorte: ', sorte )
while(cont < 2){
    const num = parseInt(prompt('Digite um número'))
    console.log('cont: ', cont)

    if(num == sorte){
        resp = 'Acertou!'
        break;
    }else{
        if(sorte > num){
            alert(`Sorte é maior!`)
            resp = 'Errou'
        }else{
            alert(`Sorte é menor!`)
            resp = 'Errou'
        }
    }
    cont = cont + 1
}

alert(`Você ${resp} a sorte era ${sorte}`)

