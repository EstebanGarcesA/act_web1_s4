function multiplicarArreglo(arr) {
    return arr.reduce((acumulador, elemento) => acumulador * elemento, 1);
}


console.log(multiplicarArreglo([2, 3, 4]));
