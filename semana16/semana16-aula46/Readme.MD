### Exercício 1

a) A query abaixo vai deletar a coluna salary da tabela.
```
ALTER TABLE Actor DROP COLUMN salary;
```
b) A query abaixo vai renomear a informação gender da tabela para sex:
```
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
c) A query abaixo vai mudar a informação gender para aceitar strings com até 255 caracteres
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
d) 
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
5 row(s) returned
```

### Exercício 2 

a) 
```
UPDATE Actor
SET 
	name = "Rodrigo Santoro",
	birth_date = "1975-08-22"
WHERE id = "003";
1 row(s) affected Rows matched: 1  Changed: 1  Warnings: 0
```
b) 
```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
1 row(s) affected Rows matched: 1  Changed: 1  Warnings: 0
```
c) 
```
UPDATE Actor
SET 
	name = "Rodrigo Santoro",
	birth_date = "2020-02-10",
    salary = 600000,
    gender = "male"
WHERE id = "005";
1 row(s) affected Rows matched: 1  Changed: 1  Warnings: 0
```

### Exercício 3

a) 
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```
  
b)
```
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
```

### Exercício 4

a) 
```
SELECT MAX(salary) FROM Actor;
```
b) 
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```
c)
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
``` 
d)
```
SELECT SUM(salary) FROM Actor;
```

### Exercício 5

a) A query abaixo resultou em um agrupamento de acordo com a coluna 'gender', com contagem do número de 'male' e 'female' na tabela
```
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
```

b) 
```
SELECT id, name FROM Actor
ORDER BY name DESC;
```

c) 
```
SELECT * FROM Actor
ORDER BY salary;
```

d)
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e)
```
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

### Exercício 6

a) 
```
ALTER TABLE Movie ADD playing_limit_date DATE;
```

b) 
```
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

c) 
```
UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";

UPDATE Movie
SET
	playing_limit_date = "2021-05-25"
WHERE id = "002";
```

d) A query não retornou erro, porém não ocorreram mudanças na tabela
```
DELETE FROM Movie WHERE id = "001";

UPDATE Movie
SET 
	synopsis = "Rodrigo Santoro"
WHERE id = "001";
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
```

### Exercício 7

a) 3 filmes
```
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
```
b) média de 9
```
SELECT AVG(rating) FROM Movie;
```
c) nenhum filme em cartaz
```
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
```
d) nenhum filme a lançar
```
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
```
e) maior nota é 10
```
SELECT MAX(rating) FROM Movie;
```
f) menor nota é 8
```
SELECT MIN(rating) FROM Movie;
```

### Exercício 8

a)
```
SELECT * FROM Movie ORDER BY title;
```
b)
```
SELECT * FROM Movie ORDER BY title DESC LIMIT 5;
```
c)
```
SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
```
d)
```
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;
```

