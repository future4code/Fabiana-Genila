//EXERCICIOS DA AULA 12 - SEMANA 3

////INTERPRETAÇÃO DE CÓDIGO - EXERCÍCIO 1

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) { // aqui testa se o numero obtido tem o resto inteiro da divisão igual a 0, o que implica
  console.log("Passou no teste.") // se tratar de números pares
} else {
  console.log("Não passou no teste.") // senão o resto é diferente de 0, é número impar, e portanto não passou no teste
}                                       



////INTERPRETAÇÃO DE CÓDIGO - EXERCÍCIO 2

let fruta = prompt("Escolha uma fruta") 
let preco

switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}

console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
//a. este código é para que o se verifique a igualdade da variável fornecida pelo usuário
//através do prompt (nome de uma fruta). Assim, se escolher uma das opções guardadas na variável, ele 
//mostrará o preço da fruta.
//
//b. se o valor de fruta for "Maçã", imprime no console "O preço da fruta Maçã é R$ 2.25"
//
//c. retirando o break logo acima do default, ao receber o valor da fruta "Pêra", a mensagem impressa será
//"O preço da fruta Pêra é R$ 5". A mensagem correta seria "O preço da fruta Pêra é R$ 5.5". Isto ocorreu
//pois ao retirar o break, não houve a interrupução necessária ao case, fazendo o código continuar funcionando até o 
//o próximo break, ou até que chegasse no default. 



//INTERPRETAÇÃO DE CÓDIGO - EXERCICIO 3

const numero = Number(prompt("Digite o primeiro número.")) //a. esse linha recebe o valor do usuário

if(numero > 0) { //aqui há uma condição para verificar se o número fornecido é maior que 0
  console.log("Esse número passou no teste") //se o usuário digitar 10, exibirá a mensagem "Esse número passou no teste"
	let mensagem = "Essa mensagem é secreta!!!"//aqui a variavel let recebe a frase "Essa mensagem é secreta!!!"
}                                              //se o usuário digitar -10, vai imprimir erro no console, vide justificativa abaixo

console.log(mensagem) //devido o console.log não poder ler a variável "mensagem" pois está 
                      //fora do escopo de if, vai imprimir um erro no console




////ESCRITA DE CÓDIGO - EXERCICIO 4

const idadeDirigir = Number(prompt('Qual a sua idade?'))

if(idadeDirigir >= 18) {
    console.log("Parabéns! Você tem idade paraa dirigir!")
} else {
    console.log("Você NÃO tem idade para dirigir!")
}


////ESCRITA DE CÓDIGO - EXERCICIO 5

let turnoAluno = prompt("Em qual turno você estuda? Digite a letra M para Matutino, N para Noturno ou V para Vespertino")

if(turnoAluno === 'M') {
        console.log('"Bom Dia!"')
} else if(turnoAluno === 'V') {
        console.log('"Boa Tarde!"')
} else if(turnoAluno === 'N') {
        console.log('"Boa Noite!"')
} else {
    console.log("Digite a letra correta!")
}
    


////ESCRITA DE CÓDIGO - EXERCICIO 6

let turnoAluno = prompt("Em qual turno você estuda? Digite a letra M para Matutino, N para Noturno ou V para Vespertino")

switch(turnoAluno) {
    case 'M':
        console.log('"Bom Dia!"')
        break
    case 'V':
        console.log('"Boa Tarde!"')
        break
    case 'N':
        console.log('"Boa Noite!"')
        break
    default:
        console.log("Digite a letra correta!")
}

////ESCRITA DE CÓDIGO - EXERCICIO 7

const filme = prompt('Qual o gênero de filme que vocês vão assistir?')
const respostaPreco = Number(prompt('Qual preço em R$ do ingresso da sessão de filme?'))

if(filme === 'fantasia' && respostaPreco <= 15) {
    console.log('Bom filme!')
} else {
    console.log('Escolha outro filme :(')
}

