//2 Somar apenas numeros pares 
function somarNumerosPares(valor){

    let soma = 0
    for(let i = 1; i <= valor; i++){

     if(i % 2 === 0){
        soma = soma + i

        }
     
    }
    
    console.log(soma)

}
    
somarNumerosPares(10)