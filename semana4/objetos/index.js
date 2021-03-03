
const titulo = document.getElementById("titulo-post")
const autor = document.getElementById("autor-post")
const conteudo = document.getElementById("conteudo-post")

let array = []

const imprimePostNaTela = () => {

const valoresDoConteudo = {
    tituloDoBlog: titulo.value,
    autorDoBlog: autor.value,
    conteudoDoBlog: conteudo.value
}

let containerDoPost = document.getElementById("container-de-posts")

if(valoresDoConteudo.titulo !== "" && valoresDoConteudo.autor !== "" && valoresDoConteudo.conteudo !== "") {

    array.push(valoresDoConteudo)
        containerDoPost.innerHTML += `<div>
                                        <h1>"${valoresDoConteudo.titulo}"</h1>
                                        <p><i>"${valoresDoConteudo.autor}"</i></p>
                                        <p>"${valoresDoConteudo.conteudo}"</p>
                                    </div>`
    
} else {

    alert("Todos os dados devem ser preenchidos!")
} 

console.log(valoresDoConteudo)

}


