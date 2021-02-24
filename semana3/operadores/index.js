//Interpretação de código - EXERCÍCIO 1
const bool1 = true
const bool2 = false
const bool3 = !bool2 //não bool2 -- true

let resultado = bool1 && bool2
console.log("a. ", resultado) // (true e false = false) a. false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado) // (true e false e true) b. false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) //(!resultado && (true ou true) -> (não resultado e true) -> true e true) c. true

console.log("e. ", typeof resultado) // e. boolean



////Interpretação de código - EXERCÍCIO 2
let array
console.log('a. ', array) // a. undefined

array = null
console.log('b. ', array) // b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // c. 11

let i = 0
console.log('d. ', array[i]) // (i = índex, ou seja, i = 0 é a posição 0 do array) d. 3

array[i+1] = 19
console.log('e. ', array) // (i = 0 + 1 --> i = 1, ou seja, posição 1 do array, será trocada por 19) e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) //(na variavel 'let i = 0', vemos que a posição de i = 0, então array[3]. Portanto array[i+6] = array[3+6]=9) f. 9


//escrita de código - EXERCICIO 1
let suaIdade
let amigoIdade

suaIdade = prompt('Qual a sua idade?')
amigoIdade = prompt('Qual a idade do seu amigo(a)?')

console.log('Sua idade é maior do que a do seu melhor amigo?', typeof Number(suaIdade) < typeof Number(amigoIdade))

const resultado = Number(suaIdade) - Number(amigoIdade)
console.log('A diferença das idades é ' + resultado)


//escrita de código - EXERCICIO 2
let numeroPar

numeroPar = prompt('Escreva um número par')

const resultado = Number(numeroPar) % 2
console.log(resultado)
// o resultado dá sempre 0, pois essa operação aritmética imprime o resto de uma divisão
// se o número for par, sempre terá resto 0. Se for ímpar, o resultado do resto será 1


//escrita de código - EXERCICIO 3
let listaDeTarefas = []

listaDeTarefas[0] = prompt('Escreva primeira tarefa que você necessite realizar')
listaDeTarefas[1] = prompt('Escreva segunda tarefa que você necessite realizar')
listaDeTarefas[2] = prompt('Escreva terceira tarefa que você necessite realizar')

console.log(listaDeTarefas)

let i = 0

listaDeTarefas[i] = prompt('Qual destas tarefas você já realizou? Digite um destes números: 0 para primeira tarefa, 1 para segunda tarefa ou 2 para terceira tarefa')
listaDeTarefas.splice(i, 1)

console.log(listaDeTarefas)


//escrita de código - EXERCICIO 4
let nomeDoUsuario
let emailDoUsuario

nomeDoUsuario = prompt('Qual é o seu nome?')
emailDoUsuario = prompt('Qual é o seu e-mail?')

console.log('O e-mail ' + emailDoUsuario + ' foi cadastrado com sucesso. Seja bem-vinda(o), ' + nomeDoUsuario + '!')


// D E S A F I O

//DESAFIO1
const celsius = 30

resultadoFahrenheit = (celsius)*9/5 + 32
resultadoKelvin = (resultadoFahrenheit - 32)*5/9 + 273.15
console.log(celsius + '°C equivale a ' + resultadoKelvin + '°K e a ' + resultadoFahrenheit + '°F')

const celsius2 = 80

resultadoFahrenheit2 = (celsius2)*9/5 + 32
console.log(celsius2 + '°C equivale a ' + resultadoFahrenheit2 + '°F')

let celsius3 = prompt('Digite o valor em graus Celsius para converter em Fahrenheit:')

resultadoFahrenheit = (celsius3)*9/5 + 32
console.log(celsius3 + '°C equivale a ' + resultadoFahrenheit + '°F')

const kelvin = 77

resultadoFahrenheit3 = (kelvin - 273.15) * 9/5 + 32
console.log(kelvin + '°K equivale a ' + resultadoFahrenheit3 + '°F')

//DESAFIO2
const quilowattHora = 280
const valorQuilowatt = 0.05
resultadoQuilowatt  = valorQuilowatt * quilowattHora
console.log('O consumo de 280 quilowatt-hora será de R$ ' + resultadoQuilowatt + ',00')

const desconto = 0.15
descontoQuilowatt = (resultadoQuilowatt * desconto) 
console.log('Com desconto de 15%, o consumo de 280 quilowatt-hora será de R$ ' + descontoQuilowatt + '')

//DESAFIO3

//a. libras para quilos
let lb = 20
librasParaQuilos = lb / 2.20462
console.log(lb + 'lb equivalem a ' + librasParaQuilos + ' kg')

//b. Onças para quilos
let oz = 10.5
oncasParaQuilos = oz / 35.274
console.log(oz + 'oz equivalem a ' + oncasParaQuilos + ' kg')

//c. Milhas para metros
let mi = 100
milhasParaMetros = mi * 1609
console.log(mi + 'mi equivalem a ' + milhasParaMetros + ' m')

//c. Pés para metros
let ft = 50
pesParaMetros = ft / 3.281
console.log(ft + 'ft equivalem a ' + pesParaMetros + ' m')

//d. Galões para litros
let gal = 103.56
galoesParaLitros = gal * 3.785
console.log(gal + 'gal equivalem a ' + galoesParaLitros + ' l')

//e. Xícaras para litros 
let xic = 450
xicaraParaLitros = xic * (6/25)
console.log(xic + 'xic equivalem a ' + xicaraParaLitros + ' l')

//Usuário digita o valor
let valorxic = prompt('Digite a quantia de xícaras para converter em litros:')
xicaraParaLitros = valorxic * (6/25)
console.log(valorxic + 'xic equivalem a ' + xicaraParaLitros + ' l')

