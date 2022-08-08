// Interpretação de código

//Exercício 1

// O código está gerando uma repetição sendo que o número deve ser menor
// que 5. Ou seja, o console irá imprimir "4,3,2,1,0"

//Exercício 2

//a) O console vai imprimir os números maiores que 18. Ou seja,
//"19, 21, 23, 25, 27, 30"

//b) Sim. O "for...of" percorre cada item da array e imprime no console
// esses números. 
// Ficaria:          
//   const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

// for (let numero of lista) {

// let index = lista.indexOf(numero)

// console.log(index)
//  }


//Exercício 3

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// O resultado no console seria *, **,***,****, porque o console iria imprimir até a quantidade de linhas que o 
//usuário escolheu, nesse caso o número 4, por ser maior que a quantidadeAtual que é 0. Se fosse menor, imprimiria
// ""

//Escrita de código

//Exercício 1

//a)
// function temPet() {
//     let bichinho = Number(prompt("Quantos bichinhos de estimação você tem?"))

//     if (bichinho === 0) {

//         console.log("Que pena! Você pode adotar um pet!")

//     } else if (bichinho > 0) {

//         let arrayBichinhos = [];
//         for (let bicho = 0; bicho < bichinho; bicho++) {

//             arrayBichinhos.push(prompt("Insira o nome do seu bichinho"));
//         } console.log(arrayBichinhos)
//     }
// }
// temPet()

//b)

// const bichinhosDeEstimação = Number(prompt("Quantos bichinhos de estimação você tem? "))
// let tenhoBichinhos = 0
// while(tenhoBichinhos > 0){
//   let nomeDoPet = bichinhosDeEstimação
//   for(let nomeDoPet > 0; bichinhosDeEstimação++){
//   nomeDoPet = bichinhosDeEstimação
//   }
//   console.log(nomeDoPet)
//   }

//c)


//Exercício 2

//a)
// let arrayOriginal = [1, 2, 3, 4]
// function imprimeArray() {
//     for (numero of arrayOriginal)
//         console.log(numero)
// }
// imprimeArray()

//b)
// let arrayOriginal = [100, 20, 30, 40]
// function imprimeArray() {
//     for (numero of arrayOriginal)
//         console.log(numero / 10)
// }
// imprimeArray()

//c)
// let arrayOriginal = [2, 7, 10, 55, 60]
// function numPares() {
//     let novoArray = []
//     for (numero of arrayOriginal) {
//         if (numero % 2 === 0) {
//             novoArray.push(numero)
//         } console.log(novoArray)
//     }
// }
// numPares()

//d)

// let arrayNumeros = [2, 7, 10, 55, 60]
// function numeroTexto(arrayNumeros) {
//     let novoArray = []
//     let i = 0
//     for (let numero of arrayNumeros) {

//         novoArray.push(`O elemento do índex ${i} é: ${numero}`)
//         i++
//     } console.log(novoArray)

// }
// numeroTexto(arrayNumeros)

//e)
// let listaNumeros = [3, 6, 8, 9, 4]

// function pegarNumeroMaiorEMenor (listaNumeros) {

//     let valorMaximo = 0
//     let valorMinimo = Infinity

//     for (let elemento = 0; elemento < listaNumeros.length; elemento++) {
//         if (listaNumeros[elemento] < valorMinimo) {
//             valorMinimo = listaNumeros[elemento]
//         } else if (listaNumeros[elemento] > valorMaximo) {
//             valorMaximo = listaNumeros[elemento]
//         }
//     }
//     console.log("O maior número da Lista de Número é:", valorMaximo, "e o menor número da Lista de Números é:", valorMinimo)
// } pegarNumeroMaiorEMenor(listaNumeros)

//---------------------------------------------------------------------------------------------

//DESAFIOS:

// function novoUsuario() {

//     const jogador1 = Number(prompt("JOGADOR1: Insira um número"))
//     let jogador2 = false;
//     console.log("Vamos Jogar!")

//     let tentativas = 0
    
//     while (jogador2 !== jogador1) {
//         jogador2 = Number(prompt("JOGADOR2: Adivinhe o número do Jogador 1"))
//         tentativas++
//         if (jogador2 === jogador1) {
//             console.log("O número chutado foi:", jogador2)
//             console.log("Parabéns! Você acertou!")
//             console.log(`O número de tentativas foram: ${tentativas}`)
//             jogador2 = true
//         } else if (jogador2 > jogador1) {
//             console.log("O número chutado foi:", jogador2)
//             console.log("Errrrou! O número escolhido é maior")
            
//         } else {
//             console.log("O número chutado foi:", jogador2)
//             console.log ("Errroou! O número escolhido é menor")
//         }
              

//     } 

// } novoUsuario()

//========================================================

// console.log("Vamos jogar!")
// const numeroEscolhido = Math.floor(Math.random() * 100) + 1

// let acertou = false
// let tentativas = 0

// let numeroChutado

// while(!acertou){
//     numeroChutado = Number(prompt("Chute um número"))
//     tentativas++
//     console.log(`O número chutado foi: ${numeroChutado}`)
//     if(numeroChutado === numeroEscolhido){
//         console.log("Acertou!")
//         console.log(`O número de tentativas foi : ${tentativas}`)
//         acertou = true
//     } else if (numeroEscolhido > numeroChutado){
//         console.log("Errou. O número escolhido é maior")
//     } else {
//         console.log("Errou. O número escolhido é menor")
//     }
// }
