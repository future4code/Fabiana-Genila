//EXERCICIOS AULA13 SEMANA3

//INTERPRETAÇÃO DE CÓDIGO - EXERCICIO 1

//o código está fazendo uma verificação, onde enquanto a variável
//for menor que 5, imprime na tela, sempre incrementando o valor
//da variável a si mesmo
//imprime 10

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)


//INTERPRETAÇÃO DE CÓDIGO - EXERCICIO 2

//o código está verificando os objetos de uma lista (array), mantendo
//um laço de verificação até chegar em uma condição em que para de 
//verificar.
//Imprime todos os objetos da array
//10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}


//ESCRITA DE CÓDIGO - EXERCICIO 1
//a.Imprima cada um dos valores do array original.

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for(let i = 0; i < 12; i++) {
    const elemento = array[i]
    console.log(elemento)
}

//b.Imprima cada um dos valores do array original divididos por 10

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for(let i = 0; i < 12; i++) {
    const elemento = array[i]
    const divisao = elemento / 10
    console.log(divisao)
}

//c.- **Crie** um novo array contendo, somente, os números pares do array original.

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for(let i = 0; i < 12; i++) {
    const elemento = array[i]
    if(elemento % 2 === 0){
      console.log(elemento)
    }
}

//d. não consegui progredir :(

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for(let i = 0; i < 12; i++) {
    const elemento = array[i]
}

let index = array[0]
    console.log(index)
    console.log('O elemento do índex 0 é ' + index)



//e. n ão consegui progredir :(

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let valorMaximo = 0 
let valorMinimo = 0

for(let i = 0; i < array.length; i++) {
    if (array[i] > valorMaximo) {
        valorMaximo = array[i]
    }
}
    
for(let i = 0; i < array.length; i++) {   
    if (array[i] < valorMaximo) {
        valorMinimo = array[i]
    }
}
      
console.log('O valor máximo é ' + valorMaximo + 'e o mínimo é' + valorMinimo)

