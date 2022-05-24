//Exercicio de Interpretação de Código

// 1.  Leia o código abaixo
    
//     const usuarios = [
//       { nome: "Amanda Rangel", apelido: "Mandi" },
//       { nome: "Laís Petra", apelido: "Laura" },
//       { nome: "Letícia Chijo", apelido: "Chijo" }
//     ]
    
//     const novoArrayA = usuarios.map((item, index, array) => {
//        console.log(item, index, array)
//     })
//     ```
    
//     a) O que vai ser impresso no console?
// vai aparecer o item com o índice de cada: nome: "Amanda Rangel", apelido: "Mandi" [0]
// nome: "Laís Petra", apelido: "Laura" [1]
// nome: "Letícia Chijo", apelido: "Chijo" [2]
// e a array completa:  { nome: "Amanda Rangel", apelido: "Mandi" },
//       { nome: "Laís Petra", apelido: "Laura" },
//       { nome: "Letícia Chijo", apelido: "Chijo" }

// 2. Leia o código abaixo
    
//     const usuarios = [
//       { nome: "Amanda Rangel", apelido: "Mandi" },
//       { nome: "Laís Petra", apelido: "Laura" },
//       { nome: "Letícia Chijo", apelido: "Chijo" },
//     ]
    
//     const novoArrayB = usuarios.map((item, index, array) => {
//        return item.nome
//     })
    
//     console.log(novoArrayB)
//     ```
    
//     a) O que vai ser impresso no console?

//será impresso apenas o nome: Amanda Rangel,Laís Petra,Letícia Chijo

// 3. Leia o código abaixo
    
//     const usuarios = [
//       { nome: "Amanda Rangel", apelido: "Mandi" },
//       { nome: "Laís Petra", apelido: "Laura" },
//       { nome: "Letícia Chijo", apelido: "Chijo" },
//     ]
    
//     const novoArrayC = usuarios.filter((item, index, array) => {
//        return item.apelido !== "Chijo"
//     })
    
//     console.log(novoArrayC)
//     ```
    
//     a) O que vai ser impresso no console?

// será impresso apenas os apelidos: Mandi, Laura

//Exercícios de Escrita de Código

// 1 Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as 
// operações pedidas nos itens abaixo utilizando as funções de array map e filter:

// a)  
       const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},]

// const nomesDogs = pets.map((pet) => {
//     return pet.nome
// })
// console.log(nomesDogs)

//b) 
// const dogsSalsicha = pets.filter((dog) =>{
//     return dog.raca === "Salsicha"
// })
// console.log(dogsSalsicha)

//c)
// const todosPoodles = pets.filter((pet) => {
//     return pet.raca === "Poodle"
// })
// const mensagemPoodles = todosPoodles.map((poodle) => {
//     return `Você ganhou um cupom de desconto de 10% para tosar o ${poodle.nome}`
// })
// console.log(mensagemPoodles)

// 2 - Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as 
// funções de array map e filter:
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }]

// a) Crie um novo array que contenha apenas o nome de cada item
// const nomeProdutos = produtos.map((produto) => {
//     return produto.nome
// })
// console.log(nomeProdutos)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de
// desconto em todos eles
// const novaArray = produtos.map((produto) => {
//     return{nome:produto.nome, preço:produto.preco * 0.95}
// })
// console.log(novaArray)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
// const bebidas = produtos.filter((bebida) => {
//     return bebida.categoria === "Bebidas"
// })
// console.log(bebidas)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
//  const nomesYpe = produtos.filter((produto) => {
//      return produto.nome === "Ypê"
//  })
// console.log(nomesYpe)


// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve 
//conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

// const temYpe = produtos.filter((produto) => {
        
//     return `Compre ${produto.nome} por ${produto.preco}` === "Ypê"
// })
// console.log(temYpe)
