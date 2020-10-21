/* Var
// Seção de Declarações das variáveis 
   nota01, nota02: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    nota01 := 10
    nota02 := 15
    
    se(nota01 <> nota02) entao
      escreval("Nota01 é diferente")
    senao
      escreval("Nota01 é igual")
    fimse
      
Fimalgoritmo */

var nota01, nota02, resultado;

nota01 = 20
nota02 = 25
resultado = nota01 |= nota02
if(resultado >= 23) {
  alert("Para esse operador temos o resultado acima de 23")
  alert(resultado)}
else
  {alert("Para esse operador temos o seguinte abaixo de 23")
  alert(resultado)}