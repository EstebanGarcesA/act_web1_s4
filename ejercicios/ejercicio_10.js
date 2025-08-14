
function factorial(n){

    if (n<0) {
        console.log("Por favor ingrese un numero mayor a 0");
        return
    } 

    if ( n === 0) {
    return 1
    }

    return n*factorial(n-1)    
    }



console.log(factorial(5));
