USE `hooks-4313654-veronica-cruz`;
SET SQL_SAFE_UPDATES = 0;

/*EXERCICIO 01*/
CREATE TABLE Projects(
	id VARCHAR(38) PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    title VARCHAR(100) NOT NULL,
    date DATE NOT NULL
);

/*EXERCICIO 02*/
ALTER TABLE Projects
ADD title VARCHAR(100) NOT NULL;

INSERT INTO Projects (id, name, title, dueDate)
VALUES ("001","LabeSky", "LSy","2023/10/05"),
	   ("002","Labefy","LFy","2024/01/06"),
       ("003","AstroZoom","AZm","2022/12/20");
          
/*EXERCICIO 03*/
ALTER TABLE Projects
DROP COLUMN title;

DESCRIBE Projects;

ALTER TABLE Projects
ADD email VARCHAR(38) UNIQUE;

ALTER TABLE Projects
CHANGE date dueDate DATE;

ALTER TABLE Funcionarios_List
CHANGE email email VARCHAR(38) NOT NULL UNIQUE;

DESCRIBE Funcionarios_List;

/*EXERCICIO 04*/

ALTER TABLE Projects
ADD description TEXT;

DESCRIBE Projects;
SELECT * FROM Projects;

UPDATE Projects SET description  = "Projeto de sistema em nuvem da Labenu."
WHERE id = "001";

UPDATE Projects SET description  = "Projeto de sistema de gerenciamento de músicas da Labenu."
WHERE id = "002";

UPDATE Projects SET description  = "Projeto de rede de comunicação da Labenu."
WHERE id = "003";
  

/*EXERCICIO 05*/

SELECT id, name, title, dueDate, description FROM Projects ORDER BY dueDate DESC;

SELECT id, name, title, dueDate, description FROM Projects ORDER BY dueDate ASC LIMIT 0,2; 