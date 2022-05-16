// Interpretação de código

//Exercício 1

// O código está gerando uma repetição sendo que o número deve ser menor
// que 5. Ou seja, o console irá imprimir "0,1,2,3,4"

//Exercício 2

//a) O console vai imprimir os números maiores que 18. Ou seja,
//"19, 21, 23, 25, 27, 30"

//b) Sim. O "for...of" percorre cada item da array e imprime no console
// esses números. 
// Ficaria:          
//   const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
// console.log(numero)
// let index = lista.indexOf(numero)
//  }

 
//Exercício 3

// O resultado no console seria *, **,***,****, porque o console iria imprimir até a quantidade de linhas que o 
//usuário escolheu, nesse caso o número 4, por ser maior que a quantidadeAtual que é 0. Se fosse menor, imprimiria
// ""

//Escrita de código

//Exercício 1

//a)

// let bichinhosDeEstimação = Number(prompt("Quantos bichinhos de estimação você tem?")) 
// function temPet (bichinhos){ 

//   if (bichinhos === 0){
    
//   console.log("Que pena! Você pode adotar um pet!")
//   }
// }
//  temPet(bichinhosDeEstimação)

//dúvida: pede ao usuário para dizer quantos bichinhos tem, mas não imprime a mensagem no console se digitar 0.
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
//  let arrayOriginal = [ 1, 2, 3, 4]
//  function imprimeArray (array){
// for( numero of arrayOriginal)
// console.log(numero)
// }
// imprimeArray(arrayOriginal)
//b) 
// let arrayOriginal = [100, 20, 30, 40]
// function imprimeArray (arrayDivisao){
// for( numero of arrayOriginal)
// console.log(numero/10)
// }
// imprimeArray(arrayOriginal)

//c)
// let arrayOriginal = [2, 7, 10, 55, 60]
// function numPares(arrayOriginal) {
// let novoArray = []
// for(numero of arrayOriginal){
//     if(numero % 2 === 0) {
// 	novoArray.push(numero)
// }  console.log(novoArray)   
// }
// }
// numPares(arrayOriginal)

//d)

// let numeros = [2, 7, 10, 55, 60]
// function numeroTexto(strings) {
// 	let novoArray = []
// 	let i = 0
//     for(numero of numeros){
// 	novoArray.push(numero) 
// 	i++
// 	}
// 	console.log(`O elemento do índex ${i} é: ${numero} `)
// }
// numeroTexto(numeros)

//e)
// let listaNumeros = [3,6,8,9,4]
