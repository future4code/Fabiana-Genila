const operacao = process.argv[2];
const arg1 = Number(process.argv[3]);
const arg2 = Number(process.argv[4]);

red = "\u001b[31m";
blue = "\u001b[34m";
verde = "\033[0;32m";
purple = "\033[0;35m";

if (!arg2) {
  console.log("Esperava 2 parâmetros. Só recebi um");
} else {
  let result = 0;
  switch (operacao) {
    case "add":
      result = arg1 + arg2;
      console.log(red + `Resultado: ${result}`);
      break;
    case "sub":
      result = arg1 - arg2;
      console.log(blue + `Resultado: ${result}`);
      break;
    case "mult":
      result = arg1 * arg2;
      console.log(verde + `Resultado: ${result}`);
      break;
    case "div":
      result = arg1 / arg2;
      console.log(purple + `Resultado: ${result}`);
      break;
    default:
      console.log(red + "operação inválida");
      break;
  }
}

