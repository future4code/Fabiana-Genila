import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { goToApplicationFormPage, goToHomePage } from '../routes/coordinator'

//Para vermos todas as viagens

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    color: orange;
    font-size: 50px;
    font-weight: bold;
    padding: 20px;
    border-bottom: 1px solid orange;
`

const ListTripsPage = () => {
    const history = useHistory()

    return(
        <div>
            <HeaderContainer>
            LabeX
            </HeaderContainer>
            <p>List Trips Page</p>
            <p>Trip Cards</p>
            <button onClick={() => goToApplicationFormPage(history)}>Sign up to travel!</button>
            <button onClick={() => goToHomePage(history)}>Home Page</button>
        </div>
    )
}

export default ListTripsPage