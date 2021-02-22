//EXERCÍCIO 1 - RESPOSTA:
//10
//10, 5
//o primeiro console.log seguiu a = 10 e b = 10, porém, 
//como o b mudou para 5 (b = 5), o segundo console.log mostrou a mudança
//a = 10
//b = 10
//console.log(b)
//b = 5
//console.log(a, b)


//EXERCÍCIO 2 - RESPOSTA: 10, 10, 10
//a=10, o b=20, mudou depois para b=c, após mudar o c=a. 
//a era 10, c mudou para a (10) e b mudou para c, ou seja, 10
//a = 10
//b = 20
//c = a
//b = c
//a = b
//console.log(a, b, c)


//EXERCÍCIO DE ESCRITA - PROGRAMA 1
let nome 
console.log(typeof nome)
//UNDEFINED

let idade
console.log(typeof idade)
//UNDEFINED

nome = prompt('Qual o seu nome?')
idade = prompt('Qual a sua idade?')

console.log(typeof nome)
//STRING (recebeu uma sequência de caracteres )

console.log(typeof idade)
//STRING (neste caso, o prompt captou que o usuário escreveu uma string, pois não foi estipulado na variável 
//que receberia um number, ou seja, valor numérico)

console.log('Olá, ', nome,'você tem ', idade,'anos')


//PROGRAMA 2
let nome 
let idade
let nomeRua
let numeroRua
let corFavorita
let animalFavorito

nome = prompt('Qual o seu nome?')
idade = prompt('Qual a sua idade?')
nomeRua = prompt('Qual o nome da rua em que mora?')
numeroRua = prompt('Qual o número da rua em que mora?')
corFavorita = prompt('Qual é sua cor favorita?')
animalFavorito = prompt('Qual o seu animal favorito?')

console.log('1. Qual o seu nome?')
console.log('Resposta: ',nome)

console.log('2. Qual a sua idade?')
console.log('Resposta: ',idade)

console.log('3. Qual o seu endereço?')
console.log('Resposta: ', nomeRua,', ', numeroRua)

console.log('4. Qual a sua cor favorita?')
console.log('Resposta: ',corFavorita)

console.log('5. Qual o seu animal favorito?')
console.log('Resposta: ',animalFavorito)


//PROGRAMA 3
let comidasPreferidas = ['nhoque', 'bolo', 'almondega', 'lasanha', 'sorvete']
console.log(comidasPreferidas)

console.log('Essas são minhas comidas preferidas:')
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

comidasPreferidas[1] = prompt('Qual a sua comida preferida?')
console.log('Essas são minhas comidas preferidas agora:')
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])


//PROGRAMA 4
let perguntas = ['você tem carro?', 'vocês está vestindo preto?', 'você já tomou almoçou?']
let respostas = [false, true, false]

console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])