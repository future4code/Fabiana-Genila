### Exercício 1

a) FOREIGN KEY indica que a propriedade em questão é uma chave estrangeira para criamos relações, precisaremos dar um jeito de relacionar ou referenciar uma tabela com outra.


b) 
```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
    "001",
    "Muito bom!",
    7,
	"004"
);
```
c) 
```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Muito bom!",
    7,
	"005"
);
Error Code: 1062. Duplicate entry '001' for key 'PRIMARY'
```
d)
```
ALTER TABLE Movie DROP COLUMN rating;
```
e)
```
DELETE FROM Movie WHERE id = "004";

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`cruz-0120067776-fabiana-pereira`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```


### Exercício 2 

a) Esta query cria uma tabela com o elenco de atores de um filme
```
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```
b) 
```
INSERT INTO MovieCast(movie_id, actor_id) VALUES
("004", "001"), ("004", "002"), ("002", "004"), 
("003", "003"), ("002", "006"), ("002", "007");

```
c) 
```
INSERT INTO MovieCast(movie_id, actor_id) VALUES
("004", "010");

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`cruz-0120067776-fabiana-pereira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```

d)
```
DELETE FROM Actor WHERE id = "001";

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`cruz-0120067776-fabiana-pereira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

```

### Exercício 3

a) A cláusula ON, na quuery abaixo, é como uma condição para junção das tabelas Movie e Rating, onde começa com o id de Movie e termina a tabela com o id de Rating
```
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```
  
