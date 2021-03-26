document.write ( "Calculadora de Divisão de Inteiros!");

//Entrada
var dividendo, divisor, quociente, resto, inicio;

dividendo = parseFloat(prompt( "Digite o dividendo!"));
divisor = parseFloat(prompt( "Digite o divisor!"));

//Processamento 
quociente = dividendo / divisor;
inicio = quociente - divisor;
resto = inicio * divisor;



//Saída
document.write(" <br><br>O Quociente da divisão é: " + quociente + " <br><br> O Resto da divisão é: " + resto);
