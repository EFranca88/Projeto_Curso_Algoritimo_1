/*Var
// Seção de Declarações das variáveis
   valor01, valor02, resultado: real
   operacao: caracter

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("A proposta deste programa e calcular dois valores,")
   escreval(" baseado na operação de sua escolha.")
   escreva("Digite o primeiro valor: ")
   leia(valor01)
   escreval("Digite a operação: Ex: + , - , * , / ")
   leia(operacao)
   escreva("Digite o segundo valor: ")
   leia(valor02)

   escolha operacao
      caso "+"
           resultado := valor01 + valor02
      caso "-"
           resultado := valor01 - valor02
      caso "*"
           resultado := valor01 * valor02
      caso "/"
           resultado := valor01 / valor02
   fimescolha

   escreva("Resultado do calculo é: ", resultado)

Fimalgoritmo */

var valor01, valor02, resultado, operacao;

function acaoBotao(){
    valor01 = prompt("Digite o primeiro valor: ")
    operacao = prompt("Digite a operação: Ex: + , - , * , / ")
    valor02 = prompt("Digite o segundo valor: ")
    switch (operacao) {
        case "+":
            resultado = parseInt( valor01 ) + parseInt( valor02 )
            break;
        case "-":
            resultado = parseInt( valor01 ) - parseInt( valor02 )
            break;
        case "*":
            resultado = parseInt( valor01 ) * parseInt( valor02 )
            break;
        case "/":
            resultado = parseInt( valor01 ) / parseInt( valor02 )
            break;
    }

    document.getElementById("paragrafo").innerText = resultado
}