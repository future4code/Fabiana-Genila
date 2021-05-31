### Exercício 1
a) id VARCHAR para dados em string, no caso, nome do ator/atriz
    name VARCHAR para os dados em string, nome do ator/atriz
    birth_date DATE para os dados em formato de data
    gender VARCHAR para os dados de gênero
```
CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY,	
    name VARCHAR(255) NOT NULL,		
    salary FLOAT NOT NULL,			
    birth_date DATE NOT NULL,		
    gender VARCHAR(6) NOT NULL		
);
```
b) As queries abaixo são, respectivamente, para mostrar o nome de todos os databases e para mostrar todas as tabelas do database:
```
SHOW DATABASES;
SHOW TABLES;
```
c) A query abaixo é para mostrar como os dados da tabela estão configurados
```
DESCRIBE Actor;
```

### Exercício 2
a) 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"002",
    "Gloria Pires",
    1200000,
    "1963-08-23",
    "female"
);
```
b) Ao inserir um dado duplicado (repetido) no banco de dados, o MySQL vai impedir que os dados gravados subescrevidos pois, ao criar a tabela foi estabelecido como PRIMARY KEY. A restrição PRIMARY KEY identifica exclusivamente cada registro em uma tabela.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"002",
    "Gloria Pires",
    1200000,
    "1963-08-23",
    "female"
);
 Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' -> Entrada duplicada '002' para a key 'PRIMARY'
```
c) Esta query abaixo dará erro pois estão faltando as outras informações da tabela: birth_date e gender, estabelecidas na criação da tabela. Portanto, sem elas, não é possível gravar os dados:
```
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
A query correta seria esta:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
d) Já esta query abaixo vai dar erro, pois falta o campo name não pode ficar sem um valor default :
```
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
Error Code: 1364. Field 'name' doesn't have a default value
```
A query correta é esta abaixo:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Tony Ramos",
  400000,
  "1949-04-18", 
  "male"
);
```
e) A query a seguir também retornará erro, pois a coluna birth_date, do tipo DATE, recebe string e não números:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
```
A query correta abaixo:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```
f) 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"003",
    "Fernanda Montenegro",
    300000,
    "1929-10-19",
    "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
),(
  "005", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

### Exercício 3
a) 
```
SELECT id, name 
FROM Actor 
WHERE gender = "female";
``` 
b)
```
SELECT salary 
FROM Actor 
WHERE name = "Tony Ramos";  
```

c)
```
SELECT * 
FROM Actor 
WHERE gender = "invalid";
```

d)
```
SELECT id, name, salary 
FROM Actor 
WHERE salary > 500000;
```
e) A query abaixo deu erro pois, a coluna está escrita errada. O nome correto da coluna é "name", mas está escrito "nome", retornando erro de coluna desconhecida:
```
SELECT id, nome  
FROM Actor
WHERE id = "002";
Error Code: 1054. Unknown column 'nome' in 'field list'
```
A correção da query se dá abaixo:
```
SELECT id, name  
FROM Actor
WHERE id = "002";
1 row(s) returned - retornou uma linha
```
### Exercício 4
a) A query abaixo retorna os nomes começam com "A" ou "J". Para isto, utilizamos o LIKE e  utilizamos o "%" depois da letra A e J para estabelecer que depois desta letra pode ser qualquer parâmetro dentro da string, e para incluir no SELECT os salários maiores que R$300.000, utilizamos AND para que retorne true as duas buscas:
```
SELECT * FROM Actor		
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
```
b) 
```
SELECT * FROM Actor		
WHERE name NOT LIKE "A%" AND salary > 350000;
```
c)
```
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
``` 
d)
```
SELECT * FROM Actor
WHERE 
(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;
```
### Exercício 5
a) 
```
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
    Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
    "2006-01-06",
    7
),(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
    A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
    empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais 
    morar com ela.",
    "2012-12-27",
    10
),(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que 
    só quer saber de farras e jogatina nas boates. A vida de abusos acaba por 
    acarretar sua morte precoce.",
    "2017-11-02",
    8
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);
```
### Exercício 5
a) 
```
SELECT id, title, rating 
FROM Movie 
WHERE id = "004";
```

b) 
```
SELECT * 
FROM Movie 
WHERE title = "Deus é Brasileiro";
```

c) 
```
SELECT id, title, synopsis 
FROM Movie 
WHERE rating > 7;
```
### Exercício 6
a) 
```
SELECT * FROM Movie
WHERE title 
LIKE "%vida%";
```
b) 
```
SELECT * FROM Movie
WHERE title LIKE "%Deus%" OR
      synopsis LIKE "%cansado%";
```
c) 
```
SELECT * FROM Movie
WHERE release_date < "2020-05-04";
```
d) 
```
SELECT * FROM Movie
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%do%" OR
      synopsis LIKE "%re%") AND rating > 7;
```
