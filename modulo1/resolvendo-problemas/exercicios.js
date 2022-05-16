// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
         return array.length
     }


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   return array.reverse()
}


// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

   array.sort(function(a,b) {
       return a - b;
   }); return array;
   }


// EXERCÍCIO 04
function retornaNumerosPares(array) {
     const numerosPares = []
    for (item of array) {
      if (item % 2 === 0) {
    numerosPares.push(item)
    }
} return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosPares = []
    for (item of array) {
      if (item % 2 === 0) {
    numerosPares.push(item)
    }
    numerosPares**2
} return numerosPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = [0]
  for(i = 0; i < array.length; i++) {
      if(array[i] > maiorNumero) {
      maiorNumero = array[i]
  }
} return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let maiorNumero
let menorNumero
let maiorDivisivelPorMenor
if(num1 > num2) {
   maiorNumero = num1
   menorNumero = num2
} else if (num2 < num1) {
   maiorNumero = num2
   menorNumero = num1
}
let diferenca = maiorNumero - menorNumero
maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
return {
  maiorNumero: maiorNumero
  maiorDivisivelPorMenor: maiorDivisivelPorMenor
  diferenca: diferenca
}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numerosPares = []
   for(let i = 0; i < n; i++) {
     if(i % 2 === 0) {
       numerosPares.push(i)
     }
   }return numerosPares;
} return retornaNumerosPares()

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if(ladoA === ladoB === ladoC) {
  return "Equilátero"
} else if(ladoA === ladoB !== ladoC) {
  return "Isósceles"
} else if(ladoA !== ladoB !== ladoC) {
  return "Escaleno"
}
} return classificaTriangulo()

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  const filme = {
    nome: "Transformers",
    ano: 2007,
    diretor: "Michael Bay",
    atores: ["Shia LaBeouf", "Megan Fox", "Josh Duhamel", "John Turturro", "Rachael Taylor"]
  } 

} return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} 
e estrelado por ${filme.atores}`

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const pessoa = {
     nome: "Angélica Silveira",
     idade: 30,
     endereço: "rua sabrina ferreira de oliveira",
     email: "angelicasilveira59@gmail.com"
   } 
}  return {...pessoa = pessoa.nome = "Anônimo"

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   temPermissao = []
   let pessoa = 
   {nome: "Veronica", idade: 31, altura: 1.60},
   {nome: "Angelica", idade: 30, altura: 1.65},
   {nome: "David", idade: 21, altura: 1.70},
   {nome: "Eduarda", idade: 7, altura: 1.40},
   {nome: "Henry", idade: 2, altura: 1.10}
   if(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.50) {
     return temPermissao.push(pessoa)
   }
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  naoTemPermissao = []
  if(pessoa.idade < 14 && pessoa.idade > 60 && pessoa.altura < 1.50) {
    return naoTemPermissao.push(pessoa)
  }
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}