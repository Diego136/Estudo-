//3 Somar apenas numeros impares de 1 ate N
function somarNumerosimpares(valor){

    let soma = 0
    for(let i = 1; i <= valor; i++){

     if(i % 2 === 1){
        soma = soma + 1
            
        }
    }
    console.log(soma)

}

somarNumerosimpares(10)