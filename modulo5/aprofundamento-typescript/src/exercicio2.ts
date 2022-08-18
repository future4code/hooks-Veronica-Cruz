//a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses 
//parâmetros

// function obterEstatisticas(numeros) {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

function obterEstatisticas(numeros:Array<number>) {

    const numerosOrdenados : Array<number> = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas : {maior:number, menor:number, media:number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    } 
    return estatisticas
}

console.log(obterEstatisticas([10,5,32,48,50]))

// A entrada é um array de números e as saídas são numbers.
//_____________________________________________________________________________________________________________

//b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas
// array, objeto e loop sendo do tipo number.

//______________________________________________________________________________________________________________

//c) Crie um *type* chamado **amostra** de dados, isto é, um objeto com as propriedades **numeros** e 
//**obterEstatisticas**. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

type amostraDeIdades ={
    numeros: Array<number>,
    obterEstatisticas: Array<number>
}

type Estatisticas ={
    maior: number,
    menor: number,
    media: number
}

type amostra = {
    numeros: Array<number>,
    obterEstatisticas: (numeros: Array<number>) =>{
    estatistica: Estatisticas
    } 
  
}




