//exercicios de interpretação de código

//exercicio 1

//a) Vai aparecer os valores da variáveis multiplicados por 5, ou seja, primeiro console.log 10, segundo console.log 50
//b) nao vai aparecer no console pois nao tem o console.log

//exercicio 2

//a) O usuario inserir um texto e essa função permite procurar se tem a palavra "CENOURA" no texto que o usuário inseriu.

//b) true, true, false

//exercicios de escrita de código

//exercicio 1

// function imprimaMensagem(){
//     const nome = "Veronica"
//     const idade = 31
//     const cidade = "Belo horizonte"
//     const profissao = "estudante"
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
// }
// imprimaMensagem()

function imprimirMensagem2(nome, idade, cidade, profissao){
    
    console.log("Eu sou",nome, "tenho",idade,"anos","moro em",
    cidade, "e sou" ,profissao )
}
imprimirMensagem2("Angélica",30,"Contagem","Empreendedora")




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
function mensagemEspecial(mensagem){
     return `${mensagem.toUpperCase()}, ${mensagem.length}`
      
}
console.log(mensagemEspecial(`Hoje eu comi sushi`))

//exercicio 3

// const num1 = Number(prompt("Insira um número"))
// const num2 = Number(prompt("Insira outro número"))
// function somarNumeros(){
//     const adicao =  num1 + num2
//     console.log("Adição:",adicao)
// }
// somarNumeros()

// function subtrairNumeros(){
//     const subtracao =  num1 - num2
//     console.log("Subtração:",subtracao)
// }
// subtrairNumeros()

// function multiplicarNumeros(){
//     const multiplicacao =  num1 * num2
//     console.log("Multiplicação:", multiplicacao)
// }
// multiplicarNumeros()

// function dividirNumeros(){
//     const divisao =  num1 / num2
//     console.log("Divisão:", divisao)
// }
// dividirNumeros()


//DESAFIOS:

// EXERCÍCIO 01

const imprimeNoConsole = (valor) => {
 console.log(valor)
}
imprimeNoConsole("Oiê!")

const somar = (primeiroValor, segundoValor) => {
    
    const resultado = primeiroValor + segundoValor
    imprimeNoConsole(resultado)
}
somar(10,152)

// EXERCÍCIO 02

//hip = √(a² + b²)

const teoremaPitagoras = (cat1, cat2) => {
    const elevadoAoQuadrado = cat1 ** 2 + cat2 ** 2
    const hipotenusa = elevadoAoQuadrado ** (1/2)
    return hipotenusa
}
console.log(teoremaPitagoras(14,9))