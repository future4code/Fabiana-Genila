type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon2: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

//resposta4-a: comandos tsc e após node ./build/exercicio4.js
//resposta4-b: comandos tsc e node ./src/exercicios.js
//resposta4-c: comandos tsc arquivo1.ts arquivo2.ts arquivo3.ts
//respostas4-d: são muitas configurações! Acrescentou ""forceConsistentCasingInFileNames": true" e ""skipLibCheck": true",  