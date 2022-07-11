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

  return array.sort((a,b) => {
       return a - b;
   })
   }


// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const numerosPares = array.filter((numero)=> {
    return numero % 2 === 0
  });
   return numerosPares
   
}

// sem usar o filter:
// function retornaNumerosPares2(array) {
//   let novoArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       novoArray.push(array[i]);
//     }
//   }
//   return novoArray;
// }

// // EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosParesAoQuadrado = []
    for (let item = 0; item < array.length; item ++) {
      if (array[item] % 2 === 0) {
    numerosParesAoQuadrado.push(array[item] * array[item])
    }
  }   
 return numerosParesAoQuadrado
}

// //usando o map ficaria...

// //function retornaNumerosParesElevadosADois(array) {
// //   const pares = retornaNumerosPares(array);
// //   const elevados = pares.map((n) => {
// //     return n ** 2;
// //   });
// //   return elevados;
// // }

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
let maior
let menor

if(num1 > num2) {
   maior = num1
   menor = num2
} else {
   maior = num2
   menor = num1
}
const objeto = {
  maiorNumero: maior,
  maiorDivisivelPorMenor: maior % menor === 0,
  diferenca: maior - menor
}
return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let primeirosNumerosPares = []

   for(let i = 0; primeirosNumerosPares.length < n; i++) {
     if(i % 2 === 0) {
      primeirosNumerosPares.push(i)
     }
   }
   return primeirosNumerosPares;
} 

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {
    return "Escaleno";
  } else if (ladoA === ladoB && ladoB === ladoC) {
    return "Equilátero";
  } else {
    return "Isósceles";
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  const ordenado = retornaArrayOrdenado(array);
  const segundoMaior = ordenado[ordenado.length - 2];
  const segundoMenor = ordenado[1];
  return [segundoMaior, segundoMenor];
}

//// Sem ordenar o array
// function retornaSegundoMaiorESegundoMenor2(array) {
//   let menor = Infinity;
//   let maior = -Infinity;
//   let segundoMenor = Infinity;
//   let segundoMaior = -Infinity;
//   let novoArray = [];

//   for (let i of array) {
//     if (i < menor) {
//       menor = i;
//     }
//     if (i > maior) {
//       maior = i;
//     }
//   }

//   for (let i of array) {
//     if (i < segundoMenor && i !== menor) {
//       segundoMenor = i;
//     }
//     if (i > segundoMaior && i !== maior) {
//       segundoMaior = i;
//     }
//   }
//   novoArray.push(segundoMaior);
//   novoArray.push(segundoMenor);

//   return novoArray;
// }


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  let textoAtores = "";

  for (let a of filme.atores) {
    textoAtores += a + ", ";
  }

  const ultimoSemVirgula = textoAtores.slice(0, -2);
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${ultimoSemVirgula}.`;
}

// Outra opção: tem uma condição que identifica o último ator e não coloca vírgula
// function retornaChamadaDeFilme2(filme) {
//   let atoresConcat = "";
//   for (let i = 0; i < filme.atores.length; i++) {
//     if (i === filme.atores.length - 1) {
//       atoresConcat += filme.atores[i];
//     } else {
//       atoresConcat += filme.atores[i] + ", ";
//     }
//   }

//   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresConcat}.`;
// }

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  return {...pessoa, nome: "ANÔNIMO"}
} 

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const temPermissao = pessoas.filter((pessoa) => {
    return pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.50 
}) 
   return temPermissao;
}

// Sem usar filter
// function retornaPessoasAutorizadas2(pessoas) {
//   let pessoasAutorizadas = [];
//   for (let p of pessoas) {
//     if (p.altura >= 1.5 && p.idade > 14 && p.idade < 60) {
//       pessoasAutorizadas.push(p);
//     }
//   }
//   return pessoasAutorizadas;
// }

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  naoTemPermissao = []
  for (let pessoa of pessoas) {
  if(pessoa.idade <= 14 || pessoa.idade >= 60 || pessoa.altura < 1.50) {
    naoTemPermissao.push(pessoa);
  }
} 
return naoTemPermissao;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let c of contas){
      let valorParaDebitar = 0;

      for(let item of c.compras) {
        valorParaDebitar += item
      }
      c.saldoTotal -= valorParaDebitar
      c.compras = []
      }
      return contas
}

// Opção usando forEach
// function retornaContasComSaldoAtualizado2(contas) {
//   contas.forEach((c) => {
//     let totalDeCompras = 0;
//     c.compras.forEach((item) => {
//       totalDeCompras += item;
//     });
//     c.saldoTotal -= totalDeCompras;
//     c.compras = [];
//   });
//   return contas;
// }

// // EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  //o método sort() ordena de acordo com cada possibilidade dentro da condição...
    const arrayOrdemAlfabetica = consultas.sort((a,b) => {
      if (a.nome > b.nome) {
        //se o valor for positivo...
        return 1;
      } else if(a.nome < b.nome) {
        //se o valor for negativ...
        return -1;
      } else {
        //se o valor for nulo...
        return 0;
      }
    });
    return arrayOrdemAlfabetica
  
}

//Para ordenar um array de string usamos o localeCompare()

//ex:  const names = ['Veronica', 'Angelica', 'Nilce, 'Juliana', 'Moacir']

// const ordenado = names.sort((a,b) => {

// return a.localeCompare(b);   COMPARE A COM B......
// })


// sem o sort...
// function retornaArrayOrdenadoAlfabeticamente2(consultas) {
//   for (let i = 0; i < consultas.length; i++) {
//     for (let j = 0; j < consultas.length - i - 1; j++) {
//       if (consultas[j].nome > consultas[j + 1].nome) {
//         const temp = consultas[j];
//         consultas[j] = consultas[j + 1];
//         consultas[j + 1] = temp;
//       }
//     }
//   }
//   return consultas;
// }

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  const ordenado = consultas.sort((a, b) => {
    // Exemplo: 02/03/2022
    const diaA = a.dataDaConsulta.substring(0, 2); // 02
    const mesA = a.dataDaConsulta.substring(3, 5); // 03
    const anoA = a.dataDaConsulta.substring(6, 10); // 2022
    const dataA = new Date(anoA, mesA - 1, diaA); // subtrai 1 do mês porque começa a contar do 0 (jan = 0, fev = 1...)

    // Mesma coisa que o de cima, mas mais abreviado
    const dB = b.dataDaConsulta;
    const dataB = new Date(  //newDate() informa a data de acordo com a data atual
      dB.substring(6, 10),
      dB.substring(3, 5) - 1,
      dB.substring(0, 2)
    );

    if (dataA > dataB) return 1;
    if (dataA < dataB) return -1;
    return 0;
  });

  return ordenado;
}

// Sem usar sort, com split, com timestamp
// function ordenaPorData(consultasData) {
//   for (let i = 0; i < consultasData.length; i++) {
//     for (let j = 0; j < consultasData.length - i - 1; j++) {
//       const arrayData1 = consultasData[j].dataDaConsulta.split("/");
//       const dia1 = Number(arrayData1[0]);
//       const mes1 = Number(arrayData1[1]);
//       const ano1 = Number(arrayData1[2]);

//       const arrayData2 = consultasData[j + 1].dataDaConsulta.split("/");
//       const dia2 = Number(arrayData2[0]);
//       const mes2 = Number(arrayData2[1]);
//       const ano2 = Number(arrayData2[2]);

//       const data1 = new Date(ano1, mes1 - 1, dia1).getTime();
//       const data2 = new Date(ano2, mes2 - 1, dia2).getTime();

//       if (data1 > data2) {
//         const temp = consultasData[j];
//         consultasData[j] = consultasData[j + 1];
//         consultasData[j + 1] = temp;
//       }
//     }
//   }
//   return consultasData;
// }
//=========================================================================================

// Exibir dados atuais de dia, mês e ano:

// let data = newDate()
//Dia: data.getDate()
//Mês: data.getMonth() + 1 os meses no javscript vão de 0 (janeiro) a 11 (dezembro)
//Ano: data.getFullYear() + 1 os dias da semana no javascritpt vão de 0 (domingo) a 6 (sábado)

//Para COLOCAR DADOS NO DATE usamos o newDate() e o set ao invés do get:
// let data = new Date()
// data.setDate(12)  dia
// data.setMonth(01)+1 mês - fevereiro nesse caso
// data.setFullYear(2022) ano

// função para data formato brasileiro...

// let data = new Date()
// function formatarData(data) {
//   let newDate = new Date(data)
//   return `${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`
// }

//calcular a diferença de dias entre datas...

// let diaAtual = new Date()
// let dataPassada = new Date(2022, 05, 15)

// o Math.abs() calcula o valor absoluto, o getTime() serve para atribuir a data as 
//variáveis passadas anteriormente...

// let dataEmMilissegundos = Math.abs(diaAtual.getTime() - dataPassada.getTime())
// Math. ceil() retorna o menor número inteiro maior ou igual a "x"
// let diasDeDiferenca = Math.ceil(dataEmMilissegundos) / (1000 * 60 * 60 * 24)
// console.log (`A diferença dos dias é ${diasDeDiferenca}`)