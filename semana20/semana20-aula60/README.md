## Exercício 3

a) No design orientado a objeto, o Principio de inversão de dependência refere-se a uma forma específica de dissociação de software de módulos. A inversão de dependências é uma forma de testar um
código que utiliza outras dependências. A ideia é exigir que as dependências sejam passadas como
parâmetros dessas funções. Assim, podemos alterar o
comportamento da forma que for mais conveniente.

## Exercício 4

a) OS testes unitários permitem que realizemos o teste sem utilizar nenhuma implementação de dependências, garantindo que seja isolado e específico para a função/classe que estamos tentando testar. Portanto, devemos criar um mock da função `performAttack`, pois ela utiliza a função `validateCharacter`, sendo necessária a verificação de sua chamada nos testes.