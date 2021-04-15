import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { goToHomePage, goToLastPage } from '../routes/coordinator'
import useForm from '../hooks/useForm'

//Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    color: orange;
    font-size: 50px;
    font-weight: bold;
    padding: 20px;
    border-bottom: 1px solid orange;
`

const ApplicationFormPage = () => {
    const [name, onChangeName] = useForm("")
    const [planet, onChangePlanet] = useForm("")
    const [date, onChangeDate] = useForm("")
    const [description, onChangeDescription] = useForm("")
    const [durationInDays, onChangeDurationInDays] = useForm("")
    const history = useHistory()

    const onSubmitForm = (e) => {
        e.preventDefault()
    }

    const body = {
        name: name,
        planet: planet,
        date: date,
        description: description,
        durationInDays: durationInDays
    }

    axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabiana-pereira-cruz/trips/${id}/apply`, 
        body
        )
        .then((res) => {
            console.log(res.data)
            window.localStorage.setItem('token', res.data.token)
            history.push('/admin/trips/list')  
        })
        .catch((err) => {
            console.log(err)
        })


    return(
        <div>
            <HeaderContainer>
            LabeX
            </HeaderContainer>
            <p>Application Form Page</p>
            <p>Tela de inscrição</p>
            <p>Escolha sua viagem</p>
            <form onSubmitForm={onSubmitForm}>
                <input
                    type={"text"}
                    title={"O nome deve ter mais de 2 letras"}
                    placeholder={"Digite o seu nome"}
                    value={"nome"}
                    onChange={onChangeName}
                    pattern={"(.*[a-z]){2}"}
                />
                <select name="select">
                    <option value={""}></option>
                    onChange={onChangePlanet}
                </select>
                <input
                    type={"date"}
                    title={"O nome deve ter mais de 2 letras"}
                    placeholder={"Data da viagem"}
                    value={"date"}
                    onChange={onChangeDate}
                    pattern={"(.*[a-z]){2}"}
                />
                <input
                    type={"text"}
                    title={"A descrição deve ter no mínimo 30 caracteres"}
                    placeholder={"Digite a descrição"}
                    value={"descrição"}
                    onChange={onChangeDescription}
                    pattern={"(.*[a-z]){2}"}
                />
                <input
                    type={"number"}
                    title={"O nome deve ter mais de 2 letras"}
                    placeholder={"Duração da viagem em dias"}
                    value={"number"}
                    onChange={onChangeDurationInDays}
                    pattern={"(.*[a-z]){2}"}
                />
                <button>Enviar</button>
            </form>
            <br></br>
            <br></br>
            <button onClick={() => goToLastPage(history)}>Voltar</button>
            <button onClick={() => goToHomePage(history)}>Home Page</button>
        </div>
    )
}

export default ApplicationFormPage