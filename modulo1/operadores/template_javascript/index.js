//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// exercicio 1
// a - false b- false c- true d- boolean

//exercicio 2

// Ele precisa colocar o Number() no prompt para os valores serem convertidos pra números na soma.
// Nesse caso será impresso um número após o outro e não a soma. Se o usuário inserir 2 e 2 por exemplo,
//irá imprimir 22 ao invés de 4 que seria o resultado da soma nesse caso.

//exercicio 3

// let primeiroNumero = Number(prompt('Digite um número'))
// let segundoNumero = Number(prompt('Digite outro número'))
// let soma = primeiroNumero + segundoNumero
// console.log(soma)

//EXERCÍCIOS DE ESCRITADE CÓDIGO

//exercicio 1

//a)

// const idade = Number(prompt("Qual sua idade?"))

//b)

// const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

//c)

// console.log("Sua idade é maior que a do seu melhor amigo?", idade>idadeAmigo)

//d)
// const diferencaDeIdade = idade - idadeAmigo
// console.log(diferencaDeIdade)

//exercicio 2

// const numero = prompt("Insira um número par")

// const restoDaDivisao = numero % 2/2
// console.log(restoDaDivisao)

//c) O resto da divisão por 2 sempre dá 0, então independente do número que inserir será igual a 0.

//d) O resultado sempre será 0.5, pois o número ímpar dividido por 2 sempre resta 1 e 1 dividido por 2 é 0.5.

// exercicio 3

// const idadeAnos =  prompt("Quantos anos você tem?")
// console.log(idadeAnos * 12, "meses")
// console.log(idadeAnos * 365,"dias")
// console.log(idadeAnos * 8760,"horas")

//exercicio 4

// const primeiroNum = prompt("Insira um número")
// const segundoNum = prompt("Insira outro número")
// console.log("O primeiro é maior que o segundo",primeiroNum > segundoNum)
// console.log("O primeiro é igual ao segundo",primeiroNum == segundoNum)
// console.log("O primeiro é divisível pelo segundo",primeiroNum % segundoNum == 0)
// console.log("O segundo é divisível pelo primeiro",segundoNum % primeiroNum == 0)

//DESAFIOS

//- Graus Fahrenheit(°F) para Kelvin(K)
  
// (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

// - Graus Celsius(°C) para Graus Fahrenheit (°C)

// (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

//Exercicio 1

// GRAUS_FAHRENHEIT = 77
// const converteFaEmKel = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
// console.log(converteFaEmKel, "K")

// GRAUS_CELSIUS = 80
// const converteCelEmFa = (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
// console.log(converteCelEmFa, "°F")

// GRAUS_CELSIUS = 30
// const converteCelemFah = (GRAUS_CELSIUS)*(9/5) + 32
// console.log(converteCelemFah, "°F")

// const converteFahEmKel = (converteCelemFah - 32)*(5/9) + 273.15
// console.log(converteFahEmKel, "K")

// const converteCelUser = Number(prompt("Insira o número em Celsius que deseja converter"))
// const converteCelemFah = (converteCelUser)*(9/5) + 32
// console.log(converteCelemFah, "°F")

// const converteFahEmKel = (converteCelemFah - 32)*(5/9) + 273.15
// console.log(converteFahEmKel, "K")

//Exercicio 2

// const quiloWattHora = 0.05
// const quiloWattCasa = 280
// const resultadoGasto = quiloWattCasa*quiloWattHora
// console.log("O valor a ser pago da sua conta de luz é",resultadoGasto)

// const descontoEnergia = (quiloWattCasa*quiloWattHora)*0.15
// const resultadoEnergia = resultadoGasto-descontoEnergia
// console.log("Você ganhou um desconto de 15%! O valor a ser pago é",resultadoEnergia )

//Exercício 3

// const valorLibra = 20
// const converteLbEmKg = valorLibra/2.2.toFixed()

// console.log ("20lb equivalem a",converteLbEmKg, "Kg")

// const valorOz = 10.5
// const converteOzemKg = valorOz/35.27.toFixed()

// console.log("10,5Oz equivalem a",converteOzemKg,"Kg")


// const valorMi = 100
// const converteMiemMe = valorMi*1609

// console.log("100Mi equivalem a",converteMiemMe,"m")


// const valorFt = 50
// const converteFtemMe = valorFt/3.3.toFixed()

// console.log("50ft equivalem a",converteFtemMe,"m")

// const valorGal = 103.56
// const converteGalemLi = valorGal*3.78.toFixed()

// console.log("103.56gal equivalem a",converteGalemLi,"l")

// const valorXic = 450
// const converteXicemLi = valorXic/3.5.toFixed()

// console.log("450xic equivalem a",converteXicemLi,"l")

const valorXic = Number(prompt("Insira quantas xícaras deseja converter em litros"))
const converteXicemLi = valorXic/3.5.toFixed()

console.log(valorXic,"xic equivalem a",converteXicemLi,"l")











