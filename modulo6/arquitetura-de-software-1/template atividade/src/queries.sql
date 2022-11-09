-- Active: 1665612941149@@35.226.146.116@3306@hooks-4313654-veronica-cruz

    CREATE TABLE User_Arq(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
        )


