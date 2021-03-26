document.write ( "Calculadora de Piscinas! <br><br>");

//Entrada
var raio = prompt("Digite seu raio");

//Processamento 
var diametro = 2 * raio;
var area = 3.14 * raio * raio;
var circunferencia = 2 * 3.14 * raio;

//Saida
document.write ("Sua piscina tem " + raio + " metros de raio");
document.write("<br>O diâmetro é: " + diametro );
document.write("<br>A área é: " + area );
document.write("<br>A circunferência é: " + circunferencia);
