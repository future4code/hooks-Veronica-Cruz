//exercicios de interpretação de código

// exercicio 1
// a - false b- false c- true d- boolean

//exercicio 2
// Faltou converter os valores pedidos ao usuário em Number, para que o número seja lido como number no código.

//exercicio 3
// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

//exercicios de escrita de codigo

//exercicio 1
//a) 
// const idade = Number(prompt("Qual sua idade?"))

//b)

// const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

//c)

// console.log("Sua idade é maior que a do seu melhor amigo?")
// console.log(idade>idadeAmigo === true)

//d)
// const diminui = idade - idadeAmigo
// console.log(diminui)

//exercicio 2

//a)
// const numero = Number(prompt("Insira um número par"))

//b)
// const restoDaDivisao = numero % 2

// const resultado = restoDaDivisao/2
//
// console.log(resultado)

//c) O resto da divisão por 2 sempre será 0 pois o numero é par e tem como valor 0.

//d) O resultado permanece 0.5 pra todo número ímpar.

// exercicio 3


/*const idadeAnos =  prompt("Quantos anos você tem?")
console.log(idadeAnos * 12, "meses")
console.log(idadeAnos * 365,"dias")
console.log(idadeAnos * 8760,"horas")

//exercicio 4
*/ 
// const primeiroNum = Number(prompt("Insira um número"))
// const segundoNum = Number(prompt("Insira outro número"))
// console.log(primeiroNum > segundoNum, "O primeiro é maior que o segundo")
// console.log(primeiroNum == segundoNum, "O primeiro é igual ao segundo")
// console.log(primeiroNum % segundoNum == 0, "O primeiro é divisível pelo segundo")
// console.log(segundoNum % primeiroNum == 0, "O segundo é divisível pelo primeiro")

//----------------------------------------------------------------------------------------

//DESAFIOS:

//1-

//A)
// const GRAUS_FAHRENHEIT = 77
// const KELVIN = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

// console.log(KELVIN, "Kelvin")

//B)

// const GRAUS_CELSIUS = 80

// const GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*(9/5) + 32

// console.log(GRAUS_FAHRENHEIT, "Fahrenheit")

//C)

// const GRAUS_CELSIUS = 30

// const GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*(9/5) + 32

// const KELVIN = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

// console.log(GRAUS_FAHRENHEIT, "Fahrenheit")

// console.log(KELVIN, "Kelvin")

//D)

// const GRAUS_CELSIUS = Number(prompt("Quantos Celsius?"))

// const GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*(9/5) + 32

// const KELVIN = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

// console.log(GRAUS_FAHRENHEIT, "Fahrenheit")

// console.log(KELVIN, "Kelvin")

//2-

//A)

// const quilowattHora = 280

// const consumoEnergia = quilowattHora * 0.05

// const contaDeLuz = consumoEnergia * 24

// console.log("Sua conta ficou em", contaDeLuz, "reais")

//B)

// const descontoEnergia = contaDeLuz - (contaDeLuz * 0.15)

// console.log("Eba! Te demos um desconto de 15% e sua conta agora será apenas" , descontoEnergia)

//3-

//A)
// const valorLibra = 20

// const conversao = valorLibra * 0.453592

// console.log("20lb equivalem a", conversao, "kg!")

//B)
// const valorOz = 10.5

// const conversao2 = valorOz * 0.0283495

// console.log("10.5oz equivalem a", conversao2, "kg!")

//C)
// const valorMi = 100

// const conversao3 = valorMi * 1609.34

// console.log("100mi equivalem a", conversao3, "m!")

//D)
// const valorFt = 50

// const conversao4 = valorFt * 0.3047992424196

// console.log("50ft equivalem a", conversao4, "m!")

//E)
// const valorGal = 103.56

// const conversao5 = valorGal * 3.78541

// console.log("103.56gal equivalem a", conversao5, "l!")

//F)
// const valorXic = 450

// const conversao6 = valorXic * 0.284130466089248

// console.log("450 xic equivalem a", conversao6, "l!")

//G)
const valorLb = Number(prompt("Insira quantas libras você converter em KG"))

const conversao7 = valorLb * 0.453592

console.log("São", conversao7, "kg!")



