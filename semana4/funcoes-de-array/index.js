let arrDespesas = []  //guardar o array com as listas de despesas que serão renderizadas na div "despesas" do HTML.
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas){    //responsável por imprimir todas as despesas do array na tela, dentro da div "despesas". 
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'

    // AQUI VEM A IMPLEMENTAÇÃO
    //possivelmente forEach:
    //para cada despesa do array, você precisa colocar as referidas propriedades 
    //dentro da div "despesas" que já está sendo pega com o getElementById, na primeira linha da função imprimirDespesas;
        
        despesas.forEach((despesa) => {
            divDespesas.innerHTML += `<p>Valor: R$${despesa.valor} | Tipo de despesa: ${despesa.tipo} | Descrição da despesa: ${despesa.descricao}</p>`
            
        })

    console.log(despesas)
}


// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')   //pegar o array de despesas da linha 1 do código e, a partir de verificações de cada tipo de despesa, somar o total separado de cada tipo, além de somar os gastos de todas as despesas juntas. 
    let gastoTotal = 0    //soma de todas as despesas
    let gastoAlimentacao = 0    //total gasto com alimentação será guardado na variável 
    let gastoUtilidades = 0    //total gasto com utilidades
    let gastoViagem = 0    //total gasto com viagem


    arrDespesas.forEach((despesa) => {

        gastoTotal += despesa.valor

        if(despesa.tipo === "alimentação") {
            gastoAlimentacao += despesa.valor
        } else if(despesa.tipo === "utilidades") {
            gastoUtilidades += despesa.valor
        } else if(despesa.tipo === "viagem") {
            gastoViagem += despesa.valor
            console.log(despesas)
        }
    })

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
    Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`


    // AQUI VEM A IMPLEMENTAÇÃO
    //Map: para cada despesa do array, verifique o seu tipo e adicione o valor à respectiva variável do tipo verificado. 
    //se a primeira despesa do array for do tipo alimentação, o valor dessa primeira despesa será adicionado à variável gastoAlimentacao
    //os valores de todas as despesas do array devem ser adicionadas à variável gastoTotal;

    }



    

function limparFiltros() {     //limpar os campos da seção de "Filtrar Despesa".
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa(){      //cria um objeto com as propriedades de uma despesa (valor, tipo, descricao), a partir do que o usuário digitou no formulário, e adicionar esse objeto no array de despesas 
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)


    let despesasFiltradas // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO

        
    imprimirDespesas(arrDespesas.filter((despesas)=> {

        if(despesas.tipo === tipoFiltro && despesas.valor > valorMin && despesas.valor < valorMax) {
        return true 
        } else {
            return false
        }

    }))

     
    //filtrar as despesas do array, de acordo com o que o usuário selecionar no formulário de filtro (segunda seção do layout).
    //a função de array a ser implementada deve filtrar o array para mostrar as despesas que se encaixem com o que ele selecionou no form de filtro. 


    imprimirDespesas(despesasFiltradas)
}








// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}