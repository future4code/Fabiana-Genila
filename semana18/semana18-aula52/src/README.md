#### EXERCICIO 1
a) SALT: acrescenta aleatoriamente sequências de caracteres a senha, projetando resultados criptográficos complexos e aumentando a segurança contra ataques de força bruta, como o rainbow tables, ou seja, um hash sempre será diferente, mesmo que a senha seja igual. ROUND: significa o fator de custo, que controla quanto tempo é necessário para calcular um único hash BCrypt. Quanto maior o fator de custo, mais rodadas de hash são feitas.

#### EXERCICIO 2
a) Tem que modificar primeiro o signup, já que é lá onde a senha do usuário é criptografada antes de ser salva no banco de dados. Após, modificamos o login, para que se possa comparar a senha enviada com a que está criptografada no banco de dados, utilizando para isso o Hash.

