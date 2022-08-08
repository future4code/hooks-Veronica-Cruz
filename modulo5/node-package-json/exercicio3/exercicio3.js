let listaDeTarefas = ["Lavar louça", "Ir ao Banco", "Se exercitar", "Ir no depósito"]


const novaTarefa = process.argv[2]

if(!novaTarefa){
console.log(`Nenhuma tarefa por aqui!`)
}
listaDeTarefas.push(novaTarefa)


console.log(`Tarefa ${novaTarefa.toUpperCase()} adicionada com sucesso!`)
