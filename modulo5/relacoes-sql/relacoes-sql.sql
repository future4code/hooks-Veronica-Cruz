USE `hooks-4313654-veronica-cruz`;
SET SQL_SAFE_UPDATES = 0;

-- EXERCICIO1

CREATE TABLE Movies (
	id VARCHAR(100) PRIMARY KEY,
    filme VARCHAR(100) NOT NULL,
    ingresso INT NOT NULL
    );
    
DROP TABLE Movies;
SELECT * FROM Movies;

CREATE TABLE Actors (
	id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    actor_id VARCHAR(200) NOT NULL,
    FOREIGN KEY (actor_id) REFERENCES Movies(id)
);
DROP TABLE Actors;

INSERT INTO Movies(id, filme ,ingresso)
VALUES("filme1","Senhor Dos Anéis",12),
	  ("filme2","Transformers", 10),
      ("filme3","Homem Aranha" ,20),
      ("filme4","Matrix", 8);
      
INSERT INTO Actors(id, name, actor_id)
VALUES("001","Elijah Wood, Sean Astin, Viggo Montensen","filme1"),
	  ("002","Megan Fox, Shia LaBeouf, Josh Duhamel", "filme2"),
      ("003","Tobey Maguire,Kirsten Dunst, Willem Dafoe", "filme3"),
      ("004","Keanu Reeves, Carrie-Anne Moss, Laurence Fishburne", "filme4");

SELECT * FROM Actors;

SELECT * FROM Actors 
JOIN Movies ON Actors.actor_id = Movies.id;

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    actor_id VARCHAR(200),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Movies(id)
);
    
SELECT * FROM Rating;

DROP TABLE Rating;

-- A) Chave estrangeira permite conectar as informações de uma tabela na outra

INSERT INTO Rating (id, comment, rate, movie_id, actor_id) 
VALUES ("r1","Muito bom!",7,"filme1", "filme1"),
	   ("r2","Só ação, amei!",9,"filme2","filme2"),
       ("r3","Muito bom!",7,"filme3","filme3"),
       ("r4","Filme surreal!",10,"filme4","filme4");
       
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("005","Muito bom!",7,"filme5");

DESCRIBE Rating;

SELECT * FROM Rating
JOIN Movies ON Rating.movie_id = Movies.id
JOIN Actors ON Rating.actor_id = Movies.id;

ALTER TABLE Rating DROP COLUMN rate;

-- C) Dá erro ao inserir id que não existe na tabela Movie. Diz que a foreign key falhou.

-- EXERCICIO 2

CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actors(id)
);

DESCRIBE MovieCast;

-- A) A tabela seleciona o id da tabela movie e da tabela actors para achar a informação.
-- B) 
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"filme3",
		"001"
);

SELECT * FROM MovieCast
JOIN Movies ON MovieCast.movie_id = Movies.id
JOIN Actors ON MovieCast.actor_id = Actors.id;

-- ou pode ser feito como abaixo:

SELECT * FROM Movie 
INNER JOIN Rating ON Movies.id = Rating.movie_id;

-- EXERCICIO 3
-- A) o comando com o inner permite que chamemos as informações de duas tabelas sem duplicar o JOIN
-- o ON localiza onde a informação tem uma condição para ser encontrada. Nesse caso o id de movie_id do 
 -- Rating deve ser igual ao id da tabela Movies.
 
SELECT m.id as movie_id, r.rate as rating FROM Movies m
INNER JOIN Rating r ON m.id = r.movie_id;

