document.write ( "Calculadora de Média Aritimética<br><br>" );

//Entrada
var primeira, segunda, resultado, total;

primeira = parseFloat(prompt("Digite a nota da 1ª prova"));
segunda = parseFloat(prompt("Digite a nota da 2ª prova"));

//Processamento 
resultado = primeira & segunda;
total = resultado / 2;

//Saida
document.write(" Nota da 1ª prova: " + primeira);
document.write(" <br><br>Nota da 2ª prova:" + segunda);
document.write(" <br><br>Média final: " + total);
