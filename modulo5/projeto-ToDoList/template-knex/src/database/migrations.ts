import connection from "./connection";

//CRIAR TABELA DE USUÁRIOS
// const createTableUsers = async () => {
//     try {
//         await connection.raw(`
//             CREATE TABLE IF NOT EXISTS Users (
//             id BIGINT PRIMARY KEY,
//             username VARCHAR(255) NOT NULL,
//             nickname VARCHAR(255) NOT NULL,
//             email VARCHAR(255) NOT NULL
//             );
//         `)
//         console.log("Tabela de Users criada com sucesso.")

//     } catch (error) {
//         console.log("Erro ao criar tabela Users.")
//         console.log(error.sqlMessage)
//     }
// }

// CRIAR TABELA DE TAREFAS
    const createTasksTable = async() => {
        try {
            await connection.raw(`
                CREATE TABLE IF NOT EXISTS ListTasks (
                id BIGINT PRIMARY KEY, 
                title VARCHAR(255) NOT NULL, 
                description TEXT NOT NULL, 
                status VARCHAR(255) NOT NULL DEFAULT "to_do",
                limit_date DATE NOT NULL,
                creator_user_id varchar(255) NOT NULL   
                );
            `)
            console.log("Tabela criada com sucesso!")
        } catch (error) {
            console.log("Erro ao criar tabela")
            console.log(error.sqlMessage)
        }
    }

    // createTableUsers()
    createTasksTable()
    .finally(() => process.exit())

//------------------------------------------------------------------------------------------------

//PARA DEPOIS DE CRIAR A TABELA, INSERIR ITENS

// async function popularTabelaProdutos() {
//     try {
//         await connection.raw(`
//             INSERT INTO Produtos (id, nome, preco, categoria)
//             VALUES 
//             (1, "Chinelo", 19.99, "calçados"),
//             (2, "Relógio", 30.00, "acessórios"),
//             (3, "Boné", 25.00, "acessórios"),
//             (4, "Camiseta", 49.99, "roupas"),
//             (5, "Calça", 99.00, "roupas");
//         `)
        
//         console.log("Tabela Produtos populada com sucesso.")
//     } catch (error) {
//         console.log("Erro ao popular tabela Produtos.")
//         console.log(error.sqlMessage)
//     }
// }

