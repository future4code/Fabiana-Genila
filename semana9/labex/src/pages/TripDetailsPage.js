import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { goToHomePage, goToLastPage } from '../routes/coordinator'

//Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    color: orange;
    font-size: 50px;
    font-weight: bold;
    padding: 20px;
    border-bottom: 1px solid orange;
`


const TripDetailsPage = () => {
    const history = useHistory()

    return(
        <div>
            <HeaderContainer>
            LabeX
            </HeaderContainer>
            <p>Trip Details Page</p>
            <p>Trip Cards</p>
            <p>Approval Candidates Cards</p>
            <button>Approved!</button>
            <button>Desapproved!</button>
            <p>Desapproval Candidates Cards</p>
            <button onClick={() => goToHomePage(history)}>Home Page</button>
            <button onClick={() => goToLastPage(history)}>Voltar</button>
        </div>
    )
}

export default TripDetailsPage