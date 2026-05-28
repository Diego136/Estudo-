//4 Contar quantos numeros pares existem
function contarNumerospares(valor){

    let soma = 0
    for(let i = 0; i <= valor; ++i){
        
    if(i % 2 === 0)
        soma = soma + 1 
        
    }

        console.log(soma)

}

contarNumerospares(10)