const minhaString: string = "5";
const meuNumero: number = 10;

enum CORES_DO_ARCO_IRIS {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ROXO = "roxo"
}

type Pessoa = {
        nome: string,
        idade: number,
        corFavorita: CORES_DO_ARCO_IRIS,
        calcular?: (combustivel: number) => number
}


function calc(combustivel: number): number {
    return combustivel * 15;
}

const objetos: Pessoa[] = [
    {
        nome: "Fabiana",
        idade: 42,
        corFavorita: CORES_DO_ARCO_IRIS.VERMELHO,
        calcular: calc
    },
    {
        nome: "Wagner",
        idade: 48,
        corFavorita: CORES_DO_ARCO_IRIS.AZUL
    },
    {
        nome: "Luiza",
        idade: 25,
        corFavorita: CORES_DO_ARCO_IRIS.ROXO
    }
]

// const objetos: Pessoa[] = [];
// objetos.push(obj1);
// objetos.push(obj2);
// console.table(objetos);

// function buscaCarrosPorMarca(frota: carro[], marca?: string | undefined): carro[] {
//     if (marca === undefined) {
//         return frota
//     }
//     return frota.filter((carro) => { return carro.marca === marca})
// }

// const minhaFrota: carro[] = buscaCarrosPorMarca(garagem, "Ford");
// console.log(minhaFrota);

// const buscarPostsPorAutor = (objetos: Pessoa[], corFavorita: string) =>
// objetos.filter(objeto => objeto.corFavorita === corFavorita)

// const kmDoGol = gol.calcular(gol.volumeDoTanque)
// console.log(kmDoGol)
