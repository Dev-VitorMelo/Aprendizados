//Calculadora de Médias

var p1, p2, media
//Entrada
p1 = parseFloat(prompt("Digite a p1:"));
p2 = parseFloat(prompt("Digite a p2"));

//Processamento
media = (p1 + p2) / 2;

if (media >= 6)
{
  document.write("Parabéns, você passou!<br>")
  if (media == 10)
  {
    document.write("Detonou!<br>")
  } 
}
else 
{
  if (media >= 2)
  {
    document.write("Faça a REA!<br>")
  }
  
else 
  {
    document.write("Reprovação!<br>")
  }
}
//Saída
document.write("Sua média é: " + media);
