function esPar(num) {
    let par = true;
    if (num % 2  == 0) {
        return par;
    } else {
        return !par;
    }
}

console.log(esPar(4));
