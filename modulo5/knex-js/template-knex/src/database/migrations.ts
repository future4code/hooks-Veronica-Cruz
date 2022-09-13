import connection from "./connection";

const criarTabelaFuncionarios = async () => {
    try {
        await connection.raw(`
            CREATE TABLE Funcionarios_Lista(
            id BIGINT PRIMARY KEY,
            nome VARCHAR(20) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE 
        );
        `)

        console.log("Tabela criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela Produtos.")
        console.log(error.sqlMessage)
    }
}

async function popularTabelaFuncionarios() {
    try {
        await connection.raw(`
        INSERT INTO Funcionarios_Lista(id,nome,email)
        VALUES ("001", "Luana", "lua@lbn.com"),
               ("002", "Vinicius", "vini@lbn.com"),
               ("003", "Laura",	"lau@lbn.com");
        `)
        
        console.log("Tabela populada com sucesso.")
    } catch (error) {
        console.log("Erro ao popular tabela.")
        console.log(error.sqlMessage)
    }
}

criarTabelaFuncionarios()
.then(() => popularTabelaFuncionarios())
.finally(() => process.exit())