// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
 const num1 = 4
 const num2 = 7
 const somar = num1+num2
  return somar
}


// EXERCÍCIO 0B
function imprimeMensagem() {
  
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(){
 const altura = prompt("Insira um número")
 const largura = prompt("Insira um número maior que o anterior")
 const area = altura * largura
 console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  // implemente sua lógica aqui
 const anoAtual = prompt("Qual o ano atual?")
 const anoNascimento = prompt("Qual seu ano de nascimento?")
 const idade = anoAtual - anoNascimento
 console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 const imc = peso / (altura * altura)
 console.log(imc)
}
 calculaIMC(60, 1.60)



// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Escreva seu nome")
  const idade = prompt("Escreva sua idade")
  const email = prompt("Escreva seu email")
  const imprimir = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}`
  console.log(imprimir)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  // implemente sua lógica aqui
  const cor1 = prompt("Primeira Cor")
  const cor2 = prompt("Segunda Cor")
  const cor3 = prompt("Terceira Cor")
  return [cor1, cor2, cor3]
  }
  console.log(imprimeTresCoresFavoritas)


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const string = "laranja"
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const custo = 3000
  const valorIngresso = 30
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const string1 = length("bola")
  const string2 = length("laranja")
  return string1 == string2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const frutas = ["banana", "abacaxi", "pêra"]
  return [0]
  
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
 const estados = ["são paulo", "bahia","minas gerais"]
 return [2]
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}