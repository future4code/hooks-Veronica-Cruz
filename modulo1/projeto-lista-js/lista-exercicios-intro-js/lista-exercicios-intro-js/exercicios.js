// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
 
  return num1 + num2
}

soma(4,7)

// EXERCÍCIO 0B
function imprimeMensagem() {
  
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}


// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(){

 const altura = Number(prompt("Insira um número"))
 const largura = Number(prompt("Insira um número maior que o anterior"))
 const area = altura * largura
 console.log(area)
}



// EXERCÍCIO 02
function imprimeIdade() {
  
 const anoAtual = Number(prompt("Qual o ano atual?"))
 const anoNascimento = Number(prompt("Qual seu ano de nascimento?"))
 const idade = anoAtual - anoNascimento
 console.log(idade)
}



// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  
 const imc = peso / (altura * altura)
 return imc
}
 

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  
  const nome = prompt("Qual o seu nome?")
  const idade = prompt("Qual sua idade?")
  const email = prompt("Digite seu email")
  console.log( `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Primeira Cor")
  const cor2 = prompt("Segunda Cor")
  const cor3 = prompt("Terceira Cor")
  console.log([cor1, cor2, cor3]) 
  }
  


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {

return string.toUpperCase()
}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
 
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

  return string1.length === string2.length 
}

// // EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
  return array[0]

}

// // EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
  return array[array.length-1]
  
}

// // EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
 
 const primeiroItem = array[0]
 const ultimoItem = array[array.length-1]
 array[0] = ultimoItem
 array[array.length-1] = primeiroItem
 return array
}

// // EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase()

}

// // EXERCÍCIO 13
function checaRenovacaoRG() {
  const esseAno = Number(prompt("Qual o ano atual?"))
  const nascimento = Number(prompt("Em qual ano você nasceu?"))
  const emissaoIdentidade = Number(prompt("Qual o ano de emissão do seu RG?"))
  const idadePessoa = esseAno - nascimento
  const renovarOuNao = esseAno - emissaoIdentidade
  const renovacao5Anos = idadePessoa <= 20 && renovarOuNao >= 5
  const renocacao10Anos = idadePessoa > 20 && idadePessoa <= 50 && renovarOuNao >= 10
  const renovacao15Anos = idadePessoa > 50  && renovarOuNao >= 15

  console.log(renovacao5Anos || renocacao10Anos||renovacao15Anos)

}

// // EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const anoBissexto = ano % 400 === 0 
  const naoBissexto = (ano % 100 !== 0) && (ano % 4 === 0) 
  return anoBissexto || naoBissexto
  }

// // EXERCÍCIO 15
function checaValidadeInscricaoLabenu (){
    const maiorDeIdade = prompt("Você tem 18 anos?")
    const ensinoCompleto = prompt("Você possui ensino médio completo?")
    const horarioDisponivel = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
    const podeEstudar = maiorDeIdade === "sim" && ensinoCompleto === "sim" && horarioDisponivel === "sim"
    const naoPodeEstudar = maiorDeIdade !== "sim" && ensinoCompleto !== "sim" && horarioDisponivel !== "sim"
    
    return podeEstudar || naoPodeEstudar
    }