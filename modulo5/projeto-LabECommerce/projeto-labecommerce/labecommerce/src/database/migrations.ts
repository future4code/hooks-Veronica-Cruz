import connection from "./connection";

// const tabelaLabECommerce = async () => {
//     try {
//         await connection.raw(`
//             CREATE TABLE IF NOT EXISTS labecommerce_users (
//             id BIGINT PRIMARY KEY,
//             name VARCHAR(255) NOT NULL,
//             email VARCHAR(255) NOT NULL,
//             password VARCHAR(255) NOT NULL
//             );
//         `)

//         console.log("Tabela labecommerce_users criada com sucesso.")
//     } catch (error) {
//         console.log("Erro ao criar tabela labecommerce_users.")
//         console.log(error.sqlMessage)
//     }
// }

// tabelaLabECommerce();

// const tabelaProducts = async () => {
//     try {
//         await connection.raw(`
//         CREATE TABLE IF NOT EXISTS Products(
//         id BIGINT PRIMARY KEY,
//         name VARCHAR(100) NOT NULL,
//         price DECIMAL(8,2) NOT NULL,
//         image_url VARCHAR(150) NOT NULL);
//     `)
//     console.log("tabela Products criada!")
// } catch (error) {
//     console.log("Erro ao criar tabela Products")
//     }
// }

// tabelaProducts();

const tabelaPurchases = async () => {
    try {
        await connection.raw(`
        CREATE TABLE IF NOT EXISTS Purchases(
        id BIGINT PRIMARY KEY,
        user_id BIGINT NOT NULL,
        product_id BIGINT NOT NULL,
        quantity INT NOT NULL,
        total_price DECIMAL(8,2) NOT NULL,
        FOREIGN KEY(product_id) REFERENCES Products(id),
        FOREIGN KEY(user_id) REFERENCES labecommerce_users(id));
    `)
    console.log("tabela Purchases criada!")
} catch (error) {
    console.log("Erro ao criar tabela Purchases")
    console.log(error.message)
    }
}

tabelaPurchases();
