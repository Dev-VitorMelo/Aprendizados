document.write( "Calculadora de Retângulo!");

//Entrada
var altura, base, area, perimetro;

altura = parseFloat(prompt(" Digite a Altura do Retângulo"));
base = parseFloat(prompt(" Digite a Base do Retângulo"));

//Processamento
area = altura * base;
perimetro = base * 2 + altura * 2;

//Saída 
document.write("<br><br>A área é: " + area);
document.write("<br>O perimetro é: " + perimetro);
