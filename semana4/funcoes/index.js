//EXERCICIO 1


function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


//a. O que vai ser impresso no console?
//vai imprimir o número 10 eo número 50

//b. O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
//não apareceria nada

//EXERCICIO 2

let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];

const outraFuncao = function(array) {
	for (let i = 0; i < 2; i++) {
		console.log(array[i])
	}
}

outraFuncao(arrayDeNomes)

//a. Explicite quais são as saídas impressas no console
//"Darvas" "Caio"

//b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console?
//"Amanda" "Caio"


//EXERCICIO 3

const metodo = (array) => {
    let arrayFinal = [];
  
    for (let x of array) {
          if (x % 2 === 0) {
          arrayFinal.push(x * x)
          }
    }
  
    return arrayFinal;
  }

  //O código abaixo mostra uma função que recebe um array e devolve outro array. Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!


  //EXERCICIO 4
  //a.

  function mensagem() {
      console.log('Eu sou Fabiana, tenho 42 anos, moro em Santo André e sou estudante.')
  }
  
  mensagem()

  //b.

  function mensagem (nome, idade, cidade, estudante) {
    if(estudante === true) {
      let estudante = 'sou'
    } else {
      let estudante = 'não sou' 
    }
    console.log('Eu sou ', nome, 'tenho ', idade, 'sou de ', cidade, 'e ', estudante, 'estudante')
}

mensagem("Fabiana", 42, "Santo André", true)


  //EXERCICIO 5
//a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

function somar (a, b) {
    let numero1 = a
    let numero2 = b
    const totalSoma = numero1 + numero2
    return (totalSoma)
}

console.log(somar(10, 5))

//b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

function verificaNumeros (a, b) {
    let numero1 = a
    let numero2 = b
    if (numero1 >= numero2) {
      
        console.log(numero1, 'é maior que', numero2)
      
    } else {
      
        console.log(numero1, 'não é maior que', numero2)
    }
}

 verificaNumeros(15, 5)

//c. Faça uma função que recebe uma mensagem (string) como parâmetro e imprima essa mensagem 10 vezes. (não é permitido escrever 10 console.log dentro da função, use outra estrutura de código para isso)

function mensagem (animal) {
    
    while 
}

//EXERCICIO 6
//a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele


//b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não


//c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele

//d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par
