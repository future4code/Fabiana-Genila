import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { goToHomePage, goToLastPage } from '../routes/coordinator'

//Formulário para o administrador criar uma nova viagem

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    color: orange;
    font-size: 50px;
    font-weight: bold;
    padding: 20px;
    border-bottom: 1px solid orange;
`

const CreateTripPage = () => {
    const history = useHistory()

    return(
        <div>
            <HeaderContainer>
            LabeX
            </HeaderContainer>
            <p>Create Trip Page</p>
            <p>Trip Cards</p>
            <button>Submit!</button>
            <button onClick={() => goToHomePage(history)}>Home Page</button>
            <button onClick={() => goToLastPage(history)}>Voltar</button>
        </div>
    )
}

export default CreateTripPage