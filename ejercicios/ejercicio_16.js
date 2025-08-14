const sumar = (...numeros) => {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
};


console.log(sumar(1, 2, 3, 4)); 

