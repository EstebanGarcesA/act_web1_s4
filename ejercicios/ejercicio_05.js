
function contarVocales(cadena) {
  
  if (cadena.length === 0) {
    return 0;
  }

  let letra = cadena[0].toLowerCase();

  let esVocal = (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') ? 1 : 0;


  return esVocal + contarVocales(cadena.slice(1));
}

console.log(contarVocales("Hola")); 

hola
ola