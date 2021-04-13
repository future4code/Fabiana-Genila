import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { goToHomePage, goToLastPage } from '../routes/coordinator'

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
    const history = useHistory()

    return(
        <div>
            <HeaderContainer>
            LabeX
            </HeaderContainer>
            <p>Application Form Page</p>
            <p>Tela de inscrição</p>
            <form type="text" placeholder="Nome"></form>
            <button>Enviar</button>
            <br></br>
            <br></br>
            <button onClick={() => goToLastPage(history)}>Voltar</button>
            <button onClick={() => goToHomePage(history)}>Home Page</button>
        </div>
    )
}

export default ApplicationFormPage