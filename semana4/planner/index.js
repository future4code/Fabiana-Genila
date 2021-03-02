function criaTarefa() {

    let tarefa = document.getElementById("tarefa").value
    let seletor = document.getElementById("dias-semana").value

    document.getElementById(seletor).innerHTML += `<p>${tarefa}</p>` //adiciona a tarefa em <select></select>

    document.getElementById("tarefa").value = "" //zera valor depois de adicionar no input

}

