
document.write("Conversor de Celsius para Fahrenheit!");


//Entrada
var celsius, fahrenheit;

celsius = parseFloat(prompt("Temperatura em Celsius:"));

//Processamento
fahrenheit = celsius * 1.8 + 32;


//Saída
document.write("<br><br> A temperatura em fahrenheit é: " + fahrenheit);
