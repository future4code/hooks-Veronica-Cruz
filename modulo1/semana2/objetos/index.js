//Exercícios de Interpretação de Código
//Exercício 1
//a) O console vai imprimir 
//"Matheus Nachtergaele",
// "Virginia Cavendish"
// canal: "Globo", horario: "14h"

//Exercício 2
//a) O console vai imprimir 
//{nome: 'Juca',	idade: 3, 	raca: 'SRD'}
//{nome: 'Juba', idade: 3, raca: 'SRD'} COPIA OS DADOS DO OBJETO CACHORRO, TROCANDO O NOME "JUCA" POR "JUBA"
//{nome: 'Jubo', idade:3, raca: 'SRD'} COPIA OS DADOS DO OBJETO GATO, TROCANDO A LETRA 'A' POR 'O' NO NOME.

//b) os três pontos antes de um objeto, copia as informações desse objeto para a declaração atual.

//Exercício 3

//a) false
//undefined 
//b)pois nao foi atruibuído valor a variável "altura"


//Exercícios de escrita de código
//Exercício 1

// let objeto = {
//    nome: "Veronica",
//    apelidos: ["vevê", "flor de maio", "vê"]
   
// }

// function minhaFuncao(pessoa) {
//   console.log(`Eu me chamo ${pessoa.nome}, mas pode me chamar
//   de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ou 
//   ${pessoa.apelidos[2]}`)
// }

// minhaFuncao(objeto)

// let novoObjeto =  {
//    ...objeto,
//    novosApelidos: ["veh", "nikka", "verô"]

// }
// minhaFuncao(novoObjeto)


//Exercício 2
// const formulario = {
//    nome: "Veronica",
//    idade: 31,
//    profissao: "Educadora Física"
// }

// const formulario2 = {
//    nome: "Pamela",
//    idade: 32,
//    profissao: "Telemarketing"
// }

// function imprimeFuncao(info) {
//    return [
// info.nome,
// info.nome.length,
// info.idade,
// info.profissao,
// info.profissao.length
// ]
// }
// console.log(imprimeFuncao(formulario))
// console.log(imprimeFuncao(formulario2)) 

//Exercício 3
const carrinho = []
const fruta1 = {
   nome:"laranja",
   disponibilidade: true
} 
const fruta2 = {
   nome:"mamão",
disponibilidade: true
} 
const fruta3 = {
   nome:"banana",
   disponibilidade: true
} 
function noCarrinho(sacolao){
   carrinho.push(sacolao)
}
noCarrinho(fruta1)
noCarrinho(fruta2)
noCarrinho(fruta3)
console.log(carrinho)

//DESAFIOS

//EXERCICIO 1
// function infoUsuario () {
//   const pessoa = {
// nome : prompt('Qual o seu nome?'),
// idade: Number(prompt('Qual a sua idade?')),
// profissao: prompt('Qual a sua profissão?')}
// console.log(pessoa)
// console.log (typeof pessoa)
// };
// infoUsuario()

//EXERCÍCIO 2
// function filmesLancados () {
// const primeiroFilme = {
//   nome: "Tarzan",
//   ano: 2010,
// }

// const segundoFilme = {
//   nome: "Maremoto",
//   ano: 2007,
// }

// console.log(`O primeiro filme foi lançado antes do segundo?` , primeiroFilme.ano > segundoFilme.ano)
// console.log(`O primeiro filme foi lançado no mesmo ano do segundo?`, primeiroFilme.ano === segundoFilme.ano)
// }
// filmesLancados()


//EXERCICIO 3

// function frutaIndisponivel (fruta) {
//  return {...carrinho, disponibilidade: !fruta.diponibilidade}
// }
// console.log(frutaIndisponivel("laranja"))
// console.log(frutaIndisponivel(frutaIndisponivel("laranja")))