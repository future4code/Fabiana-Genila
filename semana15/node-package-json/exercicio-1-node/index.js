const nome = process.argv[2];
const idade = Number(process.argv[3]);
let result = process.argv[3];

red = '\u001b[31m';
blue = '\u001b[34m';

if(!idade) {
    console.log(red +"Esperava 2 parâmetros. Só recebi um")
} else {
    result = idade + 7;
    console.log(blue +`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${result}`);
}

