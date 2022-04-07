```function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

 let nomesBichos = (item) => {
   return item.nome
 }
 let nomesAnimais=  animais.map(nomesBichos)=>{
   return [nomesAnimais]
 }
}```