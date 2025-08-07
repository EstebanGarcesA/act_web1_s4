    const suma = (numeros) => {
    let resultado = 0;
    for(let i = 0 ; i< numeros.length; i++){
        resultado +=numeros[i]
        
    }
    console.log(`La suma del array es ${resultado}`);    
}

suma([1,2,3,4,5,6,7,8,9]);

