//Exercício 1
let lista = [0, 8, 23, 16, 10, 15, 41, 12, 13]

function inverteArray(lista) {
      lista.reverse()

      return lista
}

console.log(inverteArray(lista))


//Exercício 2

let lista = [1, 2, 3, 4, 5, 6]

function retornaNumerosParesElevadosADois(array) {
   for(let i = 0; i < array.length; i++) {
      if(array[i] % 2 ===0) {
         lista.push(array[i] * array[i])
      }
   }
return lista
}

//Exercício 3

let array = []

function retornaNumerosPares (array) {
  for (let i = 0; i < array.length; i++) {
     if(x % 2 === 0) {
        array.push(i)
     }
  }
  return (retornaNumerosPares(array))
}

//Exercício 4
let array = [1, 10, 25, 5, 8]

function retornaMaiorNumero(array) {
    return Math.max(...array)
}

console.log(retornaMaiorNumero(array))


//Exercício 5

let array = [1, 10, 25, 5, 8]

function retornaQuantidadeElementos (array) {
   
   return array.length
}

console.log(retornaQuantidadeElementos(array))


//Exercício 6

function retornaExpressoesBooleanas() {
} //não consegui fazer infelizmente

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
}

// Exercício 8

function checaTriangulo(a, b, c) {

      if(a === b && a === c && c === b){
         return "Equilátero";
         
      }else if(a !== b && a !== c && b !== c){

          return"Escaleno";

      } else {

          return"Isósceles";

      }
     
   }

// Exercício 9

function comparaDoisNumeros(a, b) {

   let numeroMaior
   let numeroMenor 
   let maiorDivisivelporMenor 

   if (a > b) {
      numeroMaior = a
      numeroMenor = b
   } else {
      numeroMenor = b
      numeroMaior = a
   }

   const diferencaEntreNumeros = numeroMaior - numeroMenor
   maiorDivisivelporMenor = numeroMaior % numeroMenor === 0;
  
   return {numeroMaior, maiorDivisivelporMenor, diferencaEntreNumeros}
}

// Exercício 10

let array = [20, 50, 2, 3, 31, 100]
 
function segundoMaiorEMenor(array) {
 let primeiroMaior = 0
 let segundoMaior = 0
 let primeiroMenor = 0
 let segundoMenor = 0
  
    for(let i = 0; i < array.length; i++){
      
        if (array[i] > primeiroMaior){
            segundoMaior = primeiroMaior          
            primeiroMaior = array[i]
          
        } else if (array[i] > segundoMaior && array[i] < primeiroMaior){
            segundoMaior = array[i]
          
        } else if (array[i] > primeiroMenor) {
          segundoMenor = primeiroMenor
          primeiroMenor = array[i]
          
        } else if (array[i] < segundoMenor && array[i] > primeiroMenor){
          segundoMenor = array[i]
        }
    }
  
    return {segundoMaior, segundoMenor}
}


//Exercício 11

function ordenaArray(array) {
   function ordenaArray(array) {
      let novoArray = ['maçã', 'banana', 'limão', 'uva', 'bergamota']
      novoArray.sort()
        
      return novoArray 
      }
   }


// Exercício 12

function filmeFavorito() {
   const filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    }
  
   return filme
  }


// Exercício 13

function imprimeChamada() {
   function imprimeChamada() {
      const filme = {
           nome: 'O Diabo Veste Prada',
           ano: 2006,
           diretor: 'David Frankel',
           atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
       }
     
       return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido pOr ${filme.diretor} e estrelado por ${filmes.atores}.`
     }
}

// Exercício 14

function criaRetangulo(lado1, lado2) {

      const retangulo = {
         largura: lado1,
         altura: lado2,
         perimetro: 2 * (lado1 + lado2),
         area: lado1 * lado2
       }
     
       return retangulo
     }

// Exercício 15

function anonimizaPessoa(pessoa) {

   const pessoa = {
      nome: "Astrodev",
      idade: 25,
      email: "astrodev@future4.com.br",
      endereco: "Rua do Futuro, 4"
   }

   return {
      ...pessoa, 
      nome: 'ANÔNIMO'
   }
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {

   const arrayDeMaiores = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade >= 18
     })
     return arrayDeMaiores
     }


// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {

   const arrayDeMenores = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade < 18
      })
     return arrayDeMenores
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {

   const array = [1, 2, 3, 4, 5, 6]

   let arrayMultiploDois = array.map((numero) => {

      return numero * 2

      })

     return novoArray
    }

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {

   const array = [1, 2, 3, 4, 5, 6]

   let arrayMultiploDois = array.map((numero) => {

      return (numero * 2).toString()

      })

     return novoArray

    }

// Exercício 17, letra C

function verificaParidade(array) {

   let arrayParOuImpar = array.map((num) => {

   if (numero % 2 === 0) {

      return `${numero} é par`

    } else {

      return `${numero} é ímpar`
    }
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
} //não consegui fazer infelizmente


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
} //não consegui fazer infelizmente

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
 ]

function retornaEmailConsulta() {
  // implemente sua lógica aqui
} //não consegui fazer infelizmente

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]
console.log(checaTriangulo(20, 50, 10))

function atualizaSaldo() {
  // implemente sua lógica aqui
} //não consegui fazer infelizmente