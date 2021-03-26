document.write("Calculadora IMC!");

//Entrada
var peso, altura, IMC, quadrado;

peso = parseFloat(prompt(" Digite seu Peso!"));

altura = parseFloat(prompt("Digite sua Altura"));

//Processamento 
quadrado = altura * altura;
imc = peso / quadrado;

//Saída
document.write("<br><br>Seu IMC é: " + imc);
