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
   
   se operacao = "+" então
      resultado := valor01 + valor02
   senao
      se operacao = "-" então
         resultado := valor01 - valor02
      senao
         se operacao = "*" então
            resultado := valor01 * valor02
         senao
           se operacao = "/" então
              resultado := valor01 / valor02
           fimse
         fimse
      fimse
   fimse
   escreva("Resultado do calculo é: ", resultado) */

var valor01, valor02, resultado, operacao;

function acaoBotao(){
    valor01 = prompt("Digite o primeiro valor: ")
    operacao = prompt("Digite a operação: Ex: + , - , * , / ")
    valor02 = prompt("Digite o segundo valor: ")
    
    if ( operacao == "+" ){
        resultado = parseInt( valor01 ) + parseInt( valor02 )
    }else if(operacao == "-"){
        resultado = parseInt( valor01 ) - parseInt( valor02 )
    }else if(operacao == "*"){
        resultado = parseInt( valor01 ) * parseInt( valor02 )
    }else if(operacao == "/"){
        resultado = parseInt( valor01 ) / parseInt( valor02 )
    }
    document.getElementById("paragrafo").innerText = resultado
}

