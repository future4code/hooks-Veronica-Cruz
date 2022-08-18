// a) Crie um arquivo chamado `exercicio-4.ts` , cole o código abaixo e use comentários para responder as questões.

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um arquivo 
//javascript?

// mover o arquivo para dentro da pasta src e dar o comando tsc que cria a pasta build automaticamente 
//com o arquivo js.
//__________________________________________________________________________________________________________________

// c) E se este arquivo estivesse dentro de uma pasta chamada `src`. O processo seria diferente? Se sim, descreva as 
//diferenças.

//se já estivesse dentro da pasta src, é só dar o comando tsc no terminal.
//_______________________________________________________________________________________________________________

// d) Existe alguma maneira de **transpilar** múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.

//todos os arquivos ts estando dentro da pasta src, é só dar o comando tsc no terminal que cria a pasta build com
// todos os arquivos transpilados para js.