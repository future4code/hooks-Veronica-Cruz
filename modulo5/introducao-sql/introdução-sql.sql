USE `hooks-4313654-veronica-cruz`;
SET SQL_SAFE_UPDATES = 0;

/*EXERCICIO 1*/
CREATE TABLE Funcionarios_List(
	id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(20),
    email VARCHAR(100) NOT NULL UNIQUE,
    PRIMARY KEY (id)
);

/*EXERCICIO 2*/
INSERT INTO Funcionarios_List(id,nome,email)
VALUES ("001", "Luana", "lua@lbn.com"),
	   ("002", "Vinicius", "vini@lbn.com"),
	   ("003", "Laura",	"lau@lbn.com");
  
 /*EXERCICIO 3*/ 
/*A) executar tabela inteira*/  
SELECT * FROM Funcionarios_List;

/*B) executar apenas id da tabela*/
SELECT id AS identifier, nome 
FROM Funcionarios_List;

/*C) executar dados da Laura com o id*/
SELECT * FROM Funcionarios_List
WHERE id=3;

/*D) usuários que tenham a letra “a” no seu nome*/
SELECT nome FROM Funcionarios_List
WHERE nome LIKE "%a%";

/*E) usuários que não tenham a letra “r” no seu nome, mas que 
tenham a letra “u” no seu e-mail.*/
SELECT nome, email FROM Funcionarios_List
WHERE email LIKE "%u%" AND NOT nome LIKE "%r%";

/*EXERCICIO 4*/
INSERT INTO Funcionarios_List
VALUES("004","Yuzo","yuzo@lbn.com");

/*deletar usuario*/
DELETE FROM Funcionarios_List
WHERE id=4;





