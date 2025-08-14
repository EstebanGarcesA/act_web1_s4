function esCorreo(texto) {
  if (typeof texto !== "string") return false;

  const at = texto.indexOf("@");
  const endsCom = texto.toLowerCase().endsWith(".com");

  return at > 0 && endsCom && at < texto.length - 4;
}


console.log(esCorreo("test@example.com")); 

