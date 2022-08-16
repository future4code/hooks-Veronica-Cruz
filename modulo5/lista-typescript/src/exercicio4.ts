const array: Colaboradores[] =  [
	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]

enum SETORES  {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type Colaboradores = {
    nome: string,
    salario: number,
    setor: SETORES,
    presencial: boolean
}

const pessoas = (array: Colaboradores[]) :Colaboradores[] => {
    const lista: Colaboradores[] = array.filter((colaborador)=> {
        return colaborador.setor === SETORES.MARKETING && colaborador.presencial
    })
   return lista;
}
console.log(pessoas(array))
