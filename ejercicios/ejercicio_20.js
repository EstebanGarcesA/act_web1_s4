const promedio = (numeros) => {
    let suma= 0;
    let prom = 0;
    for(let i = 0 ; i< numeros.length; i++){
        suma +=numeros[i]
        
    }
    prom = suma/numeros.length;
    console.log(`el promedio del array es ${prom}`);    
}

promedio([10, 20, 30])