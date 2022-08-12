// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta
//variável. O que acontece?

// let minhaString : string = "Verônica"
// minhaString = 12

// RESPOSTA: O typescript não aceita eu atribuir um valor number, já que foi declarado o valor string.
//---------------------------------------------------------------------------------------------------------------

// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa
//variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de
//valor?

let meuNumero : number | string = 32
meuNumero = "dois"
meuNumero = 40

//RESPOSTA: Para atribuir mais de um tipo de valor usamos o Union Type.

//--------------------------------------------------------------------------------------------------------------

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;  `idade`, que é um número; `corFavorita`, que é uma string.

// const person: {name:string, age:number, color:string} = {
//     name: "Angélica",
//     age: 30,
//     color: "pink"
// }
// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
//Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

type Pessoa = {
    name: string,
    age: number,
    color: string
}

// const person1: Pessoa = {
//     name: "Deivison",
//     age: 22,
//     color: "black"
// }

// const person2: Pessoa = {
//     name: "Nilce",
//     age: 57,
//     color: "white"
// }

// const person3: Pessoa = {
//     name: "Verônica",
//     age: 32,
//     color: "red"
// }

// d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. 
//Utilize um `enum` para isso.

enum rainbowColors {
    RED = "Red",
    ORANGE = "Orange",
    YELLOW = "Yellow",
    GREEN = "Green",
    BLUE = "Blue",
    INDIGO = "Indigo",
    VIOLET = "Violet"
}


const person1: Pessoa = {
    name: "Deivison",
    age: 22,
    color: rainbowColors.GREEN
}

const person2: Pessoa = {
    name: "Nilce",
    age: 57,
    color: rainbowColors.INDIGO
}

const person3: Pessoa = {
    name: "Verônica",
    age: 32,
    color: rainbowColors.VIOLET
}
console.log(person1, person2, person3)