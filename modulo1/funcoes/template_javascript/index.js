//exercicios de interpretação de código

//exercicio 1

//a) Vai aparecer os valores da variáveis multiplicados por 5, ou seja, primeiro console.log 10, segundo console.log 50
//b) nao vai aparecer no terminal pois nao tem o console.log

//exercicio 2

//a) O usuario inserir um texto e essa função permite procurar se tem a palavra "CENOURA" no texto que o usuário inseriu.

//b) false, true, false

//exercicios de escrita de código

//exercicio 1

function imprimaMensagem(){
    const nome = "Veronica"
    const idade = 31
    const cidade = "Belo horizonte"
    const profissao = "estudante"
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
}
imprimaMensagem()

function imprimirMensagem2(nome){
    console.log(`Eu sou ${nome}`)
}
imprimirMensagem2("Veronica Silveira")

function imprimirMensagem3(idade){
    console.log(`tenho ${idade} anos`)
}
imprimirMensagem3(31)

function imprimirMensagem4(cidade){
    console.log(`moro em ${cidade}`)
}
imprimirMensagem4("Belo Horizonte")

function imprimirMensagem5(profissao){
    console.log(`e sou ${profissao}`)
}
imprimirMensagem5("educadora física")

//exercicio 2
//a)
function soma(primeiroNum, segundoNum){
    const adicionar = primeiroNum + segundoNum
    console.log(adicionar)
}
soma(50,10)

//b)
function booleano(primeiroNum, segundoNum){
    const comparar = primeiroNum >= segundoNum
    console.log(comparar)
}
booleano(50,10)

//c)
function numeroPar(numero){
    const numeroPar2 = numero % 2 == 0
    console.log(numeroPar2)
}
numeroPar(75)

//d)
function mensagemEspecial(comida){
    let lanche = "Hoje eu comi pizza"
       console.log(lanche.toUpperCase())
      
}
mensagemEspecial()

//exercicio 3

const num1 = Number(prompt("Insira um número"))
const num2 = Number(prompt("Insira outro número"))
function somarNumeros(){
    const adição =  num1 + num2
    console.log(adição)
}
somarNumeros()

function subtrairNumeros(){
    const subtração =  num1 - num2
    console.log(subtração)
}
subtrairNumeros()

function multiplicarNumeros(){
    const multiplicação =  num1 * num2
    console.log(multiplicação)
}
multiplicarNumeros()

function dividirNumeros(){
    const divisão =  num1 / num2
    console.log(divisão)
}
dividirNumeros()


